// ==============================================================================
// TWT Saves (twtsaves.com) — Public Client Controller
// Client-side URL parser, validator, and redirect dispatcher
// ==============================================================================

const OFFICIAL_SITE = 'https://twtsaves.com';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('download-form');
  const input = document.getElementById('tweet-url');
  const pasteBtn = document.getElementById('btn-paste');
  const statusMsg = document.getElementById('status-msg');
  const downloadBtn = document.getElementById('btn-download');
  const copyTrickBtn = document.getElementById('btn-copy-trick');
  const bookmarkletBtn = document.getElementById('btn-bookmarklet');

  // 1. URL Extraction & Validation
  function extractTweetUrl(rawText) {
    if (!rawText) return null;
    const trimmed = rawText.trim();
    const match = trimmed.match(/https?:\/\/(?:twitter\.com|x\.com)\/[a-zA-Z0-9_]+\/status\/[0-9]+/i);
    if (match) return match[0];
    if (trimmed.includes('twitter.com/') || trimmed.includes('x.com/')) {
      return trimmed;
    }
    return null;
  }

  // 2. Handle Download Trigger
  function handleDownload(e) {
    if (e) e.preventDefault();
    const rawValue = input.value.trim();

    if (!rawValue) {
      showStatus('Please paste a Twitter or X post URL first.', 'error');
      input.focus();
      return;
    }

    const cleanUrl = extractTweetUrl(rawValue);
    if (!cleanUrl) {
      showStatus('Invalid link. Please provide a valid Twitter/X post URL (e.g., https://x.com/.../status/...)', 'error');
      input.focus();
      return;
    }

    // Set UI to loading state
    showStatus('Connecting to TWT Saves high-speed engine...', 'info');
    downloadBtn.disabled = true;
    downloadBtn.innerHTML = `
      <svg class="animate-spin" style="width:18px;height:18px;animation:spin 1s linear infinite" fill="none" viewBox="0 0 24 24">
        <circle style="opacity:0.25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path style="opacity:0.75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Opening Downloader...</span>
    `;

    // Smooth redirect to the official downloader with auto-extract query param
    const destination = `${OFFICIAL_SITE}/?url=${encodeURIComponent(cleanUrl)}`;
    setTimeout(() => {
      window.location.href = destination;
    }, 450);
  }

  function showStatus(text, type = 'error') {
    statusMsg.textContent = text;
    statusMsg.className = `status-message ${type}`;
  }

  if (form) {
    form.addEventListener('submit', handleDownload);
  }

  // 3. Paste from Clipboard Button
  if (pasteBtn) {
    pasteBtn.addEventListener('click', async () => {
      try {
        const clipText = await navigator.clipboard.readText();
        if (clipText) {
          input.value = clipText.trim();
          showStatus('');
          // If valid tweet URL was pasted, automatically trigger download
          const valid = extractTweetUrl(clipText);
          if (valid) {
            handleDownload();
          }
        }
      } catch (err) {
        input.focus();
        showStatus('Please press Ctrl+V / Cmd+V to paste manually.', 'info');
      }
    });
  }

  // 4. Copy Prefix Trick Button
  if (copyTrickBtn) {
    copyTrickBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('twtsaves.com/');
        const orig = copyTrickBtn.innerHTML;
        copyTrickBtn.innerHTML = '<span>✓ Copied "twtsaves.com/"!</span>';
        setTimeout(() => {
          copyTrickBtn.innerHTML = orig;
        }, 2500);
      } catch (e) {
        alert('Copy prefix: twtsaves.com/');
      }
    });
  }

  // 5. Bookmarklet Copy Code
  const bookmarkletCode = "javascript:(function(){const u=window.location.href;if(u.indexOf('twitter.com')!==-1||u.indexOf('x.com')!==-1){window.open('https://twtsaves.com/?url='+encodeURIComponent(u),'_blank');}else{alert('Please open an X or Twitter post first!');}})();";
  
  if (bookmarkletBtn) {
    bookmarkletBtn.setAttribute('href', bookmarkletCode);
    bookmarkletBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(bookmarkletCode).then(() => {
        alert('Bookmarklet code copied to clipboard! You can also drag this button directly to your browser bookmarks bar.');
      }).catch(() => {
        alert('Drag this button to your bookmarks bar to use!');
      });
    });
  }

  // 6. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close other items
        faqItems.forEach((other) => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Check URL query parameters (e.g. ?url=...) for auto-processing if hosted on GitHub Pages
  const searchParams = new URLSearchParams(window.location.search);
  const paramUrl = searchParams.get('url') || searchParams.get('tweet') || searchParams.get('link');
  if (paramUrl) {
    input.value = paramUrl;
    handleDownload();
  }
});

// CSS spinner animation keyframe injection
const styleEl = document.createElement('style');
styleEl.textContent = `
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
`;
document.head.appendChild(styleEl);
