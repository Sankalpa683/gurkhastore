import json
import random
import string

# Function to generate a random id of 9 characters
def generate_id(length=9):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

# Load the JSON data from the file
with open('ProductList.json', 'r') as file:
    data = json.load(file)

# Add an 'id' to each product
for product in data:
    product['id'] = generate_id()

# Save the updated data back to the JSON file
with open('ProductList.json', 'w') as file:
    json.dump(data, file, indent=4)

print("ID added to each product successfully.")
