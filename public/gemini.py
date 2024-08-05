import json
import google.generativeai as genai
import os

# Configure Gemini API key directly
api_key = 'AIzaSyA5_kT5NLHmU5FEAbHUSwAm7W_S6mc-qvU'
genai.configure(api_key=api_key)

#run the code

model = genai.GenerativeModel('gemini-1.0-pro-latest')
response = model.generate_content("The opposite of hot is")
print(response.text)

