document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert('Please select a file to upload.');
        return;
    }

    const file = fileInput.files[0];
    alert(`File "${file.name}" selected for upload.`);

    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert('File uploaded successfully!');
        } else {
            alert('File upload failed.');
        }
    })
    .catch(error => {
        console.error('Upload error:', error);
        alert('An error occurred while uploading the file.');
    });
});
