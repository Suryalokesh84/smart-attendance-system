## 🎓 Face Recognition–Based Smart Attendance System

Welcome! This project is a **real-time, AI-powered attendance system** designed to make the process of marking attendance not only faster but also smarter and more secure.

---

## 📸 What It Does

Instead of the traditional manual methods or RFID cards, this system:
- Uses **face recognition** to identify a person.
- Detects **eye blinks** to ensure liveness (no photo hacks!).
- Automatically **marks attendance** and sends a confirmation **email**.
- Stores attendance data and user info securely using **JSON files**.

---

## 💡 Why This Project?

This project was built with the vision to solve a **real-world problem**—automating attendance while ensuring accuracy, security, and ease of use for educational institutions or workplaces.

Traditional systems are prone to:
- **Proxy attendance**
- **Time-consuming** manual tracking
- **Hardware dependency**

We tackled all of these by combining **AI + Face Detection + Web Development** in one neat solution.

---

## ⚙️ Tech Stack

| Category        | Technology Used                      |
|----------------|---------------------------------------|
| 👨‍💻 Backend      | Flask (Python)                        |
| 🎯 AI/ML        | Face Recognition, MediaPipe, OpenCV  |
| 🌐 Frontend     | HTML5, CSS3                          |
| 📦 Storage      | JSON (for user and attendance data)  |
| 📩 Email Alert  | SMTP (Python smtplib)                |

---

## 🚀 Features

- 🎥 **Live video stream** for real-time detection  
- 🧠 **Face recognition** with high accuracy  
- 👀 **Blink detection** to ensure it’s a real person  
- 📬 **Email confirmation** after marking attendance  
- 📊 **Admin dashboard** to view and filter records  
- 📝 **Easy registration** with webcam capture  
- 🗂️ **Offline data handling** (no external DB required)

---

## 🛠 How It Works

1. A student registers by capturing their face (10 samples).
2. During attendance, the system opens the webcam.
3. If the student blinks 4 times → identity is confirmed.
4. Attendance is marked and stored.
5. An email confirmation is sent to the student.

---
![0](https://github.com/user-attachments/assets/81fda5e0-3eda-4fb2-9e4a-0e8ba7a79c2d)![1](https://github.com/user-attachments/assets/2eb1fee9-20b6-4daf-b666-4c5d2ed2f02d)

![2](https://github.com/user-attachments/assets/03d83e7e-b482-46d8-94f0-63091c884aa7)
![3](https://github.com/user-attachments/assets/7f7bc5d6-33eb-48f3-b2f5-8100252f33c7)
![4](https://github.com/user-attachments/assets/a9c375ef-ff12-44c3-9caf-b46d0602e5b7)
![5](https://github.com/user-attachments/assets/d56457b8-0f23-4977-a179-1a72f611ea82)
![6](https://github.com/user-attachments/assets/a9926d50-1392-496d-9998-23fea3759215)
![7](https://github.com/user-attachments/assets/4ebfadc4-b634-43fb-be9c-1790a89e619f)
![8](https://github.com/user-attachments/assets/db984a24-99b4-4580-b48d-f0a83fed494c)
![9](https://github.com/user-attachments/assets/1c45e3c5-823b-49ab-933c-ded230e94d69)
![10](https://github.com/user-attachments/assets/667794e9-b43b-4467-802a-d4ffdde1ca3c)
![11](https://github.com/user-attachments/assets/b6f92026-8694-4c59-9baa-171e77dab822)
![12](https://github.com/user-attachments/assets/6e1b83b8-06de-457e-9744-4e8e22be528f)
