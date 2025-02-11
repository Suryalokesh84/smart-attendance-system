import cv2
import face_recognition
import numpy as np
import os
import json
import sys

if not os.path.exists('trained_images'):
    os.makedirs('trained_images')
if not os.path.exists('user_data'):
    os.makedirs('user_data')

def save_user_data(user_details):
    user_data_file = f"user_data/{user_details['rollNumber']}.json"
    with open(user_data_file, 'w') as f:
        json.dump(user_details, f)

def main():
    if len(sys.argv) < 2:
        print("Usage: python train.py <rollNumber>")
        return

    rollNumber = sys.argv[1]

    # Load user details
    user_data_file = f"user_data/{rollNumber}.json"
    if not os.path.exists(user_data_file):
        print(f"No user data found for roll number {rollNumber}")
        return

    with open(user_data_file, 'r') as f:
        user_details = json.load(f)

    print("Details loaded. Starting camera in 3 seconds...")
    cap = cv2.VideoCapture(0)
    known_face_encodings = []
    captured_frames = []
    frame_count = 0
    while cap.isOpened() and frame_count < 50:
        ret, frame = cap.read()
        if not ret:
            break

        face_locations = face_recognition.face_locations(frame)
        face_encodings_current = face_recognition.face_encodings(frame, face_locations)

        if len(face_encodings_current) == 1:
            face_encoding = face_encodings_current[0]
            known_face_encodings.append(face_encoding)
            captured_frames.append(frame)
            frame_count += 1
            print(f"Captured {frame_count} images")

        elif len(face_encodings_current) > 1:
            print("Warning: Multiple faces detected. Ensure only one person is visible.")

    if frame_count == 50:
        avg_encoding = np.mean(known_face_encodings, axis=0)
        user_details['encoding'] = avg_encoding.tolist()
        save_user_data(user_details)
        for i, frame in enumerate(captured_frames):
            cv2.imwrite(f"trained_images/{user_details['rollNumber']}_{i}.jpg", frame)
        print("Training completed successfully!")

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
