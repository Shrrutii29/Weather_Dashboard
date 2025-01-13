## Project Overview
The Weather Dashboard is a user-friendly application designed to provide real-time weather information by city name.

## Setup Instructions

### Prerequisites
#### installation
  ```bash
    pip3 install python
    pip3 install flask
    pip3 install requests
    pip3 install flask-cors
    pip3 install python-dotenv
   ```

#### **API Key**: Obtain an API key from [OpenWeather](https://openweathermap.org/) to fetch weather data.

### Steps to Run Locally
1. **Clone the Repository**
   ```bash
       git clone https://github.com/Shrrutii29/Weather_Dashboard.git
   ```
2. **API KEY**
   create .env file and write in it following :
   API_KEY=your_openweathermap_api_key

3. replace API_URL with folllowing in script.py
   ```bash
      http://127.0.0.1:5000/
   ``` 
 
3. **Start Flask Server**
   ```bash
       python3 main.py
   ```
4. ```bash
      http://127.0.0.1:8080/
   ```

### Deploy on replit
1. sign up on replit
2. add all files
3. in secret write API_KEY=your_openweathermap_api_key
4. run main.py
5. my replit deploy url is as following, you will get in similar form
    ```bash
       https://c6b1ce78-47b5-4158-bbac-6d7a9fb83342-00-364lentosq3f0.sisko.replit.dev/weather
   ```
6. replace API_URL with that in script.py
7. and now you can access weatherDashboard using that URL

### Design Decisions
- Frontend
  HTML, CSS and Javascript
- Backend
  Flask
 
### Future improvement
1. clear previous search history
2. shortcut to search previous\y searched city by clicking it
3. dark mode / light mode facility
4. autocomplete city name

### Platform limitation
1. OpenWeather's free tier limits the number of requests
2. Limitations for deployment using replit

### User Interface
![Screenshot from 2025-01-14 01-18-39](https://github.com/user-attachments/assets/7b018960-8a9c-45ac-9566-179f608dc161)

![Screenshot from 2025-01-14 01-18-57](https://github.com/user-attachments/assets/808a6c0c-4fee-4a79-86f5-eb881c05f982)

![Screenshot from 2025-01-14 01-19-08](https://github.com/user-attachments/assets/c10a12e2-1a5c-436e-9e95-9394a232e42c)







