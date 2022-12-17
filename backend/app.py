from flask import Flask, abort, request, jsonify
from flask_cors import CORS, cross_origin
import whisper
from tempfile import NamedTemporaryFile

# Load the Whisper model:
model = {
    'tiny': whisper.load_model('tiny'),
    'base': whisper.load_model('base'),
    'medium': whisper.load_model('medium'),
    'large': whisper.load_model('large'),
}

app = Flask(__name__)
cors = CORS(app)

@app.route('/transcription', methods=['POST'])
@cross_origin()
def handler():
    if not request.files:
        # If the user didn't submit any files, return a 400 (Bad Request) error.
        abort(400)

    # For each file, let's store the results in a list of dictionaries.
    results = []

    model_type = request.form['model_type']

    # Loop over every file that the user submitted.
    for filename, handle in request.files.items():
        # Create a temporary file.
        # The location of the temporary file is available in `temp.name`.
        temp = NamedTemporaryFile()
        # Write the user's uploaded file to the temporary file.
        # The file will get deleted when it drops out of scope.
        handle.save(temp)
        # Let's get the transcript of the temporary file.

        try :
            result = model[model_type].transcribe(temp.name, language='Portuguese')
        except Exception as e:
            results.append({
                'success': False,
                'message': e,
                'filename': '',
                'transcript': '',
                'model_type': model_type
            })

        # Now we can store the result object for this file.
        results.append({
            'success': True,
            'message': '',
            'filename': filename,
            'transcript': result['text'],
            'model_type': model_type

        })

    # This will be automatically converted to JSON.
    return jsonify({'results': results})