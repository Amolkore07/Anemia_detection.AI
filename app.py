from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

model = tf.keras.models.load_model('model_anemia.h5')

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400
    file = request.files['image']
    img = Image.open(io.BytesIO(file.read())).convert('RGB').resize((64, 64))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    prediction = model.predict(img_array)[0][0]
    result = "Non-Anemic" if prediction > 0.5 else "Anemic"
    confidence = float(prediction) if prediction > 0.5 else float(1 - prediction)
    return jsonify({"result": result, "confidence": round(confidence * 100, 2)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
