function showInfo(id) {
    document.getElementById(id).style.display = 'block';
}

function hideInfo(id) {
    document.getElementById(id).style.display = 'none';
}

// Image popup functionality
function showImagePopup(imageSrc, title) {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.className = 'image-popup-overlay';
    overlay.onclick = closeImagePopup;
    
    // Create popup container
    const popup = document.createElement('div');
    popup.className = 'image-popup';
    
    // Create close button
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-popup';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = closeImagePopup;
    
    // Create image element
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;
    img.className = 'popup-image';
    
    // Create title element
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.className = 'popup-title';
    
    // Assemble popup
    popup.appendChild(closeBtn);
    popup.appendChild(img);
    popup.appendChild(titleElement);
    overlay.appendChild(popup);
    
    // Add to body
    document.body.appendChild(overlay);
    
    // Add fade-in animation
    setTimeout(() => {
        overlay.style.opacity = '1';
        popup.style.transform = 'scale(1)';
    }, 10);
}

function closeImagePopup() {
    const overlay = document.querySelector('.image-popup-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        const popup = overlay.querySelector('.image-popup');
        popup.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 300);
    }
}

// Enhanced button click handler
function handleButtonClick(buttonElement) {
    const img = buttonElement.querySelector('img');
    const text = buttonElement.querySelector('.button-text');
    
    if (img && text) {
        const imageSrc = img.src;
        const title = text.textContent;
        showImagePopup(imageSrc, title);
    }
}

// Close popup with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImagePopup();
    }
});

// Prevent popup from closing when clicking on the image
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup-image') || 
        event.target.classList.contains('image-popup')) {
        event.stopPropagation();
    }
});
