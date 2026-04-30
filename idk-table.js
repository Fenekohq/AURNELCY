// IDK Table Data - "I don't know" in various languages
const idkTableData = [
  { language: "Afrikaans", nativeName: "Afrikaans", translation: "Ek weet nie.", phonetics: "/ɛk fiət niə/" },
  { language: "Albanian", nativeName: "Shqip", translation: "Unë nuk e di.", phonetics: "/unə nuk ɛ di/" },
  { language: "Amharic", nativeName: "አማርኛ", translation: "አላውቅም", phonetics: "/ʔälawḳ'əm/" },
  { language: "Arabic", nativeName: "العربية", translation: "أنا لا أعرف.", phonetics: "/ʔanaː laː ʔaʕrif/" },
  { language: "Armenian", nativeName: "Հայերեն", translation: "Ես չգիտեմ։", phonetics: "/jes ʧʰəɡiˈtɛm/" },
  { language: "Assamese", nativeName: "অসমীয়া", translation: "মই নাজানোঁ।", phonetics: "/moi naˈzanuŋ/" },
  { language: "Azerbaijani", nativeName: "Azərbaycanca", translation: "Mən bilmirəm.", phonetics: "/mæn bilˈmiɾæm/" },
  { language: "Basque", nativeName: "Euskara", translation: "Ez dakit.", phonetics: "/es ðakit/" },
  { language: "Belarusian", nativeName: "Беларуская", translation: "Я не ведаю.", phonetics: "/ja nʲe ˈvʲedəju/" },
  { language: "Bengali", nativeName: "বাংলা", translation: "আমি জানি না।", phonetics: "/ami dʒani na/" },
  { language: "Bosnian", nativeName: "Bosanski", translation: "Ne znam.", phonetics: "/ne znam/" },
  { language: "Bulgarian", nativeName: "Български", translation: "Не знам.", phonetics: "/nɛ znam/" },
  { language: "Burmese", nativeName: "မြန်မာ", translation: "ကျွန်ုပ်မသိပါ။", phonetics: "/tɕʰənoʊʔ mə θḭ ba/" },
  { language: "Catalan", nativeName: "Català", translation: "No ho sé.", phonetics: "/nu u ˈse/" },
  { language: "Cebuano", nativeName: "Cebuano", translation: "Wala ko kahibalo.", phonetics: "/wala ko kahibalo/" },
  { language: "Chichewa", nativeName: "Chichewa", translation: "Sindikudziwa.", phonetics: "/sindikuʣiwa/" },
  { language: "Chinese (Simplified)", nativeName: "中文", translation: "我不知道。", phonetics: "/wǒ bù zhīdào/" },
  { language: "Chinese (Traditional)", nativeName: "中文", translation: "我不知道。", phonetics: "/wǒ bù zhīdào/" },
  { language: "Corsican", nativeName: "Corsu", translation: "Ùn la sò micca.", phonetics: "/un la so ˈmitʃa/" },
  { language: "Croatian", nativeName: "Hrvatski", translation: "Ne znam.", phonetics: "/ne znam/" },
  { language: "Czech", nativeName: "Čeština", translation: "Nevím.", phonetics: "/ˈnɛviːm/" },
  { language: "Danish", nativeName: "Dansk", translation: "Jeg ved det ikke.", phonetics: "/jɑj veð de ðikə/" },
  { language: "Dutch", nativeName: "Nederlands", translation: "Ik weet het niet.", phonetics: "/ɪk ʋeːt ɦɛt nit/" },
  { language: "English", nativeName: "English", translation: "I don't know.", phonetics: "/aɪ doʊnt noʊ/" },
  { language: "Esperanto", nativeName: "Esperanto", translation: "Mi ne scias.", phonetics: "/mi ne ˈsias/" },
  { language: "Estonian", nativeName: "Eesti", translation: "Ma ei tea.", phonetics: "/ma ej tea/" },
  { language: "Filipino (Tagalog)", nativeName: "Filipino", translation: "Hindi ko alam.", phonetics: "/hinˈdi ko aˈlam/" },
  { language: "Finnish", nativeName: "Suomi", translation: "En tiedä.", phonetics: "/en ˈtie̯dæ/" },
  { language: "French", nativeName: "Français", translation: "Je ne sais pas.", phonetics: "/ʒə nə sɛ pa/" },
  { language: "Frisian", nativeName: "Frysk", translation: "Ik wit it net.", phonetics: "/ɪk ʋɪt ɪt nɛt/" },
  { language: "Galician", nativeName: "Galego", translation: "Non o sei.", phonetics: "/nõn o ˈsej/" },
  { language: "Georgian", nativeName: "ქართული", translation: "არ ვიცი.", phonetics: "/ɑr vɪtsʼɪ/" },
  { language: "German", nativeName: "Deutsch", translation: "Ich weiß es nicht.", phonetics: "/ɪç vaɪs ɛs nɪçt/" },
  { language: "Greek", nativeName: "Ελληνικά", translation: "Δεν ξέρω.", phonetics: "/ðɛn ˈksero/" },
  { language: "Gujarati", nativeName: "ગુજરાતી", translation: "મને ખબર નથી.", phonetics: "/məne ˈkʰəbər nətʰi/" },
  { language: "Haitian Creole", nativeName: "Kreyòl Ayisyen", translation: "M pa konnen.", phonetics: "/m pa konnɛn/" },
  { language: "Hausa", nativeName: "Hausa", translation: "Ban sani ba.", phonetics: "/ban sani ba/" },
  { language: "Hawaiian", nativeName: "ʻŌlelo Hawaiʻi", translation: "ʻAʻole au i ʻike.", phonetics: "/ʔaːˈʔole ʔau i ˈʔike/" },
  { language: "Hebrew", nativeName: "עברית", translation: "אני לא יודע.", phonetics: "/ani lo jodeʕa/" },
  { language: "Hindi", nativeName: "हिन्दी", translation: "मुझे नहीं पता।", phonetics: "/mujʰe nəɦĩː pətaː/" },
  { language: "Hmong", nativeName: "Hmoob", translation: "Kuv tsis paub.", phonetics: "/ku ʈʃi paʊ/" },
  { language: "Hungarian", nativeName: "Magyar", translation: "Nem tudom.", phonetics: "/nɛm ˈtudom/" },
  { language: "Icelandic", nativeName: "Íslenska", translation: "Ég veit það ekki.", phonetics: "/jɛːɣ veit ðau ɛːcɪ/" },
  { language: "Igbo", nativeName: "Igbo", translation: "Amaghị m.", phonetics: "/amaɣi m/" },
  { language: "Indonesian", nativeName: "Bahasa Indonesia", translation: "Saya tidak tahu.", phonetics: "/saja tidak tahu/" },
  { language: "Irish", nativeName: "Gaeilge", translation: "Níl a fhios agam.", phonetics: "/niːl ə ˈɪsˠ ˈaɡəm/" },
  { language: "Italian", nativeName: "Italiano", translation: "Non lo so.", phonetics: "/non lo sɔ/" },
  { language: "Japanese", nativeName: "日本語", translation: "わかりません。", phonetics: "/wakari masen/" },
  { language: "Javanese", nativeName: "Basa Jawa", translation: "Aku ora ngerti.", phonetics: "/aku ɔra ŋərti/" },
  { language: "Kannada", nativeName: "ಕನ್ನಡ", translation: "ನನಗೆ ತಿಳಿದಿಲ್ಲ.", phonetics: "/nænəɡe t̪ilidilla/" },
  { language: "Kazakh", nativeName: "Қазақ тілі", translation: "Мен білмеймін.", phonetics: "/men bʲilˈmejmin/" },
  { language: "Khmer", nativeName: "ខ្មែរ", translation: "ខ្ញុំមិនដឹងទេ។", phonetics: "/kʰɲom mɨn dəŋ teː/" },
  { language: "Kinyarwanda", nativeName: "Ikinyarwanda", translation: "Simbizi.", phonetics: "/simbizi/" },
  { language: "Korean", nativeName: "한국어", translation: "몰라요.", phonetics: "/mol-la-yo/" },
  { language: "Kurdish", nativeName: "Kurdî", translation: "Ez nizanim.", phonetics: "/ɛz niˈzanɪm/" },
  { language: "Kyrgyz", nativeName: "Кыргызча", translation: "Мен билбейм.", phonetics: "/men bilˈbejɯm/" },
  { language: "Lao", nativeName: "ລາວ", translation: "ຂ້ອຍບໍ່ຮູ້.", phonetics: "/kʰɔj bɔː huː/" },
  { language: "Latin", nativeName: "Latina", translation: "Nescio.", phonetics: "/ˈnɛs.ki.oː/" },
  { language: "Latvian", nativeName: "Latviešu", translation: "Es nezinu.", phonetics: "/ɛs ˈnɛ.zi.nu/" },
  { language: "Lithuanian", nativeName: "Lietuvių", translation: "Aš nežinau.", phonetics: "/aʃ nʲɛʒʲɪˈnɐʊ̯/" },
  { language: "Luxembourgish", nativeName: "Lëtzebuergesch", translation: "Ech weess et net.", phonetics: "/ɛʃ veːs ɛt nɛt/" },
  { language: "Macedonian", nativeName: "Македонски", translation: "Не знам.", phonetics: "/nɛ znam/" },
  { language: "Malagasy", nativeName: "Malagasy", translation: "Tsy fantatro.", phonetics: "/t͡si fanˈtatʂu/" },
  { language: "Malay", nativeName: "Bahasa Melayu", translation: "Saya tidak tahu.", phonetics: "/saja tidak tahu/" },
  { language: "Malayalam", nativeName: "മലയാളം", translation: "എനിക്ക് അറിയില്ല.", phonetics: "/ɛnɨkɨ aɾijilla/" },
  { language: "Maltese", nativeName: "Malti", translation: "Ma nafx.", phonetics: "/ma ˈnafʃ/" },
  { language: "Maori", nativeName: "Māori", translation: "Kāore au i te mōhio.", phonetics: "/kaːɔɾɛ aʊ i tɛ ˈmɔːhiɔ/" },
  { language: "Marathi", nativeName: "मराठी", translation: "मला माहित नाही.", phonetics: "/məlɑː məhit nɑːhiː/" },
  { language: "Mongolian", nativeName: "Монгол", translation: "Би мэдэхгүй.", phonetics: "/bi medexɢui/" },
  { language: "Nepali", nativeName: "नेपाली", translation: "मलाई थाहा छैन।", phonetics: "/malai tʰaha t͡sʰʌina/" },
  { language: "Norwegian", nativeName: "Norsk", translation: "Jeg vet ikke.", phonetics: "/jæɪ veːt ɪkə/" },
  { language: "Odia", nativeName: "ଓଡ଼ିଆ", translation: "ମୁଁ ଜାଣେନି।", phonetics: "/mũ d͡ʒaɳeni/" },
  { language: "Pashto", nativeName: "پښتو", translation: "زه نه پوهیږم.", phonetics: "/zə na puˈhiɡəm/" },
  { language: "Persian", nativeName: "فارسی", translation: "من نمی‌دانم.", phonetics: "/mæn næmiː dɒːnæm/" },
  { language: "Polish", nativeName: "Polski", translation: "Nie wiem.", phonetics: "/ɲɛ ˈvʲɛm/" },
  { language: "Portuguese", nativeName: "Português", translation: "Eu não sei.", phonetics: "/ew nɐ̃w ˈsej/" },
  { language: "Punjabi", nativeName: "ਪੰਜਾਬੀ", translation: "ਮੈਨੂੰ ਹਹੀਂ ਪਤਾ।", phonetics: "/mɛːnũː nəˈhiː pət̪aː/" },
  { language: "Romanian", nativeName: "Română", translation: "Nu știu.", phonetics: "/nu ˈʃtiw/" },
  { language: "Russian", nativeName: "Русский", translation: "Я не знаю.", phonetics: "/ja nʲe ˈzna.jʊ/" },
  { language: "Samoan", nativeName: "Gagana Samoa", translation: "Ou te le iloa.", phonetics: "/ou te le iˈloa/" },
  { language: "Scots Gaelic", nativeName: "Gàidhlig", translation: "Chan eil fhios agam.", phonetics: "/xan eːl iʃ əkəm/" },
  { language: "Serbian", nativeName: "Српски", translation: "Не знам.", phonetics: "/nɛ znam/" },
  { language: "Sesotho", nativeName: "Sesotho", translation: "Ha ke tsebe.", phonetics: "/ha ke tsɛbɛ/" },
  { language: "Shona", nativeName: "Shona", translation: "Handizivi.", phonetics: "/handizivi/" },
  { language: "Sindhi", nativeName: "سنڌي", translation: "مان نه ٿو ڄاڻان.", phonetics: "/maːn nə tʰoː ʤãːʈʰãː/" },
  { language: "Sinhala", nativeName: "සිංහල", translation: "මට දන්නෙ නැහැ.", phonetics: "/maʈə dannɛ nɛhɛ/" },
  { language: "Slovak", nativeName: "Slovenčina", translation: "Neviem.", phonetics: "/ˈnɛvʲiɛm/" },
  { language: "Slovenian", nativeName: "Slovenščina", translation: "Ne vem.", phonetics: "/nɛ ʋɛm/" },
  { language: "Somali", nativeName: "Af-Soomaali", translation: "Ma aqaan.", phonetics: "/ma ʕɑːʕɑːn/" },
  { language: "Spanish", nativeName: "Español", translation: "No lo sé.", phonetics: "/no lo ˈse/" },
  { language: "Sundanese", nativeName: "Basa Sunda", translation: "Abdi henteu terang.", phonetics: "/abdi henteu tɛraŋ/" },
  { language: "Swahili", nativeName: "Kiswahili", translation: "Sijui.", phonetics: "/siˈd͡ʒui/" },
  { language: "Swedish", nativeName: "Svenska", translation: "Jag vet inte.", phonetics: "/jɑːɡ veːt ˈɪntɛ/" },
  { language: "Tajik", nativeName: "Тоҷикӣ", translation: "Ман намедонам.", phonetics: "/mɑn næmedonɑm/" },
  { language: "Tamil", nativeName: "தமிழ்", translation: "எனக்குத் தெரியாது.", phonetics: "/ɛnakkut̪ t̪ɛɾijɑːd̪u/" },
  { language: "Tatar", nativeName: "Татарча", translation: "Мин белмим.", phonetics: "/min bɛlˈmim/" },
  { language: "Telugu", nativeName: "తెలుగు", translation: "నాకు తెలియదు.", phonetics: "/naːku t̪elijadu/" },
  { language: "Thai", nativeName: "ไทย", translation: "ฉันไม่รู้", phonetics: "/tɕʰǎn mâj rúː/" },
  { language: "Turkish", nativeName: "Türkçe", translation: "Bilmiyorum.", phonetics: "/bilˈmjoɾum/" },
  { language: "Turkmen", nativeName: "Türkmençe", translation: "Men bilemok.", phonetics: "/men bilemok/" },
  { language: "Ukrainian", nativeName: "Українська", translation: "Я не знаю.", phonetics: "/jɑ nɛ ˈznɑ.ju/" },
  { language: "Urdu", nativeName: "اردو", translation: "مجھے نہیں معلوم۔", phonetics: "/mʊ.d͡ʒʱeː nəˈhiː mɑː.luːm/" },
  { language: "Uzbek", nativeName: "Oʻzbekcha", translation: "Men bilmayman.", phonetics: "/men bɪlmɑjmɑn/" },
  { language: "Vietnamese", nativeName: "Tiếng Việt", translation: "Tôi không biết.", phonetics: "/toj xawŋ biət/" },
  { language: "Welsh", nativeName: "Cymraeg", translation: "Dydw i ddim yn gwybod.", phonetics: "/ˈdədu i ðɪm ən ˈɡwɪbɔd/" },
  { language: "Xhosa", nativeName: "isiXhosa", translation: "Andazi.", phonetics: "/andaːzi/" },
  { language: "Yiddish", nativeName: "יידיש‎", translation: "איך ווייס נישט.", phonetics: "/ɪχ vais nɪʃt/" },
  { language: "Yoruba", nativeName: "Yorùbá", translation: "Mi ò mọ̀.", phonetics: "/mi ɔ mɔ/" },
  { language: "Zulu", nativeName: "isiZulu", translation: "Angazi.", phonetics: "/aŋaːzi/" }
];

// Populate the IDK table
function populateIdkTable() {
  const tbody = document.getElementById('idkTableBody');
  if (!tbody) return;
  
  // Clear existing rows (if any)
  tbody.innerHTML = '';
  
  // Add rows from data
  idkTableData.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.language}</td>
      <td>${row.nativeName}</td>
      <td>${row.translation}</td>
      <td>${row.phonetics}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Call when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', populateIdkTable);
} else {
  populateIdkTable();
}
