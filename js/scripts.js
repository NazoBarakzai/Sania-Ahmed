
document.getElementsByClassName("d-inline-block bi bi-download me-2").addEventListener("click", function() {
    // Specify the file URL and file name
    // const resumeUrl = ''; 
    const fileName = 'Sania Ahmed.pdf';

    // Create an invisible link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = fileName;

    // Append link to the body and click it programmatically
    document.body.appendChild(link);
    link.click();

    // Remove the link after downloading
    document.body.removeChild(link);
});
