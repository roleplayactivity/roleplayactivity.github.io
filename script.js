document.getElementById('whitelistForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const experience = document.getElementById('experience').value;

  const response = await fetch('https://discord.com/api/webhooks/WEBHOOK_URL', {  // Nahraď s URL na tvůj webhook
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: `Nová žádost o whitelist:\nJméno: ${username}\nZkušenosti: ${experience}`
    })
  });

  if (response.ok) {
    alert('Tvoje žádost byla odeslána!');
  } else {
    alert('Došlo k chybě při odesílání žádosti.');
  }
});
