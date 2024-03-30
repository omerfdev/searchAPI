exports.filterText = (req, res) => {
    const { text, keyword } = req.body;
    
    // Belirtilen metinde aranan kelimeyi filtrele
    const filteredText = text.replace(new RegExp(keyword, 'gi'), '***');
  
    res.status(200).json({ filteredText });
  };
  