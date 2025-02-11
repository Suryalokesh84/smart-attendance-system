import cv2
import face_recognition
import numpy as np
import os
import json

def load_user_data():
    user_data = {}
    for filename in os.listdir('user_data'):
        if filename.endswith('.json'):
            with open(os.path.join('user_data', filename), 'r') as f:
                user_details = json.load(f)
                user_data[user_details['rollNumber']] = user_details
    return user_data

def preload_encodings(user_data):
    known_face_encodings = []
    known_face_names = []

    for rollNumber, details in user_data.items():
        if 'encoding' in details:
            known_face_encodings.append(np.array(details['encoding']))
            known_face_names.append(details['name'])

    return known_face_encodings, known_face_names

def main():
    user_data = load_user_data()
    known_face_encodings, known_face_names = preload_encodings(user_data)
    
    cap = cv2.VideoCapture(0)
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        
        face_locations = face_recognition.face_locations(frame)
        face_encodings = face_recognition.face_encodings(frame, face_locations)

        for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
            matches = face_recognition.compare_faces(known_face_encodings, face_encoding, tolerance=0.4)
            name = "Unknown"

            face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
            best_match_index = np.argmin(face_distances)
            if matches[best_match_index]:
                name = known_face_names[best_match_index]
                

            cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
            cv2.rectangle(frame, (left, bottom + 35), (right, bottom), (0, 255, 0), cv2.FILLED)
            cv2.putText(frame, name, (left + 6, bottom + 30), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (255, 255, 255), 1)
        
        mask = np.zeros_like(frame)
        mask = cv2.circle(mask, (frame.shape[1] // 2, frame.shape[0] // 2), 200, (255, 255, 255), -1)
        frame = cv2.bitwise_and(frame, mask)

        cv2.imshow('Attendance', frame)
        if cv2.waitKey(5) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
