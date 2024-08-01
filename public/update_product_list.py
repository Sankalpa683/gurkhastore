import os
import json

# Function to split the JSON data into smaller chunks
def split_json(data, max_characters):
    chunks = []
    current_chunk = []
    current_chunk_size = 0
    
    for item in data:
        item_size = len(json.dumps(item))
        if current_chunk_size + item_size > max_characters:
            chunks.append(current_chunk)
            current_chunk = []
            current_chunk_size = 0
        current_chunk.append(item)
        current_chunk_size += item_size
    
    if current_chunk:
        chunks.append(current_chunk)
    
    return chunks

# Load the large JSON data
with open('ProductList.json', 'r') as file:
    products = json.load(file)

# Specify the maximum number of characters per chunk
max_characters_per_chunk = 10000  # Adjust this value as needed

# Split the JSON data into chunks
chunks = split_json(products, max_characters_per_chunk)

# Create a folder to store the chunks
output_folder = 'json_chunks'
os.makedirs(output_folder, exist_ok=True)

# Save each chunk as a separate JSON file
for i, chunk in enumerate(chunks):
    chunk_file_path = os.path.join(output_folder, f'ProductList_chunk_{i + 1}.json')
    with open(chunk_file_path, 'w') as chunk_file:
        json.dump(chunk, chunk_file, indent=4)

print(f"Split JSON data into {len(chunks)} chunks and saved them in the '{output_folder}' folder.")
