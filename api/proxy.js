export default async function handler(req, res) {
  // MASUKKAN API KEY KAU KAT SINI!
  const API_KEY = "b71cf030-ec4d-4f29-89e6-edaf1e1adc11"; 
  const TARGET_URL = "https://draw.ar-lottery01.com/WinGo/WinGo_1M/GetHistoryIssuePage.json";
  
  // Kita guna servis ni untuk "menyamar" jadi user dari negara lain
  const PROXY_URL = `https://api.webscraping.ai/html?api_key=${API_KEY}&url=${encodeURIComponent(TARGET_URL)}&proxy_type=datacenter`;

  try {
    const response = await fetch(PROXY_URL);
    const data = await response.json();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Block Bypass Failed", details: e.message });
  }
}
