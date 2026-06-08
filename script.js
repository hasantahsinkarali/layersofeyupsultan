
const layers = [
  { key:"visual", title:"👁 Visual Layers" },
  { key:"material", title:"🧱 Material Layers" },
  { key:"acoustic", title:"👂 Acoustic Layers" },
  { key:"olfactory", title:"👃 Olfactory Layers" },
  { key:"gustatory", title:"👅 Gustatory Layers" },
  { key:"behavioral", title:"🚶 Behavioral Layers" },
  { key:"density", title:"👥 Density Layers" }
];

const stops = [
  {
    "no": 1,
    "name": "Eyüpsultan Pier",
    "x": 86.2,
    "y": 51.3,
    "desc": "Located on the shores of the Golden Horn, Eyüpsultan Ferry Pier serves as an important transportation gateway connecting the district to other parts of Istanbul while acting as a vibrant interface between urban mobility and the waterfront.",
    "layers": {
      "visual": {
        "text": "A historic ferry terminal sits alongside the waterfront, where ferries, small boats, and constant maritime activity create a dynamic visual landscape that blends traditional and contemporary urban life.",
        "photos": [
          "assets/photos/stop01-visual-01",
          "assets/photos/stop01-visual-02",
          "assets/photos/stop01-visual-03"
        ],
        "video": [
          "assets/videos/stop01-visual-01",
          "assets/videos/stop01-visual-02"
        ]
      },
      "material": {
        "text": "The area combines landscaped park spaces, ferry infrastructure, ticket barriers, paved walkways, and transportation facilities, reflecting the functional urban fabric of a busy transit hub.",
        "photos": [
          "assets/photos/stop01-material"
        ]
      },
      "acoustic": {
        "text": "The soundscape is characterized by ferry announcements, vehicle traffic, tram movements, pedestrian conversations, transport card validation sounds, and crossing signals, creating a layered urban rhythm.",
        "audio": [
          "assets/audio/stop01-acoustic"
        ]
      },
      "olfactory": {
        "text": "The dominant scent is the smell of the sea, accompanied by the distinctive salty and iodine-rich air of the Golden Horn waterfront.",
        "photos": [
          "assets/photos/stop01-olfactory"
        ]
      },
      "gustatory": {
        "text": "Street food culture is visible through simit vendors and passengers carrying or consuming simit while waiting for or travelling on the ferry.",
        "photos": [
          "assets/photos/stop01-gustatory"
        ]
      },
      "behavioral": {
        "text": "People are primarily engaged in waiting, walking, commuting, and social interaction, reflecting the everyday routines associated with public transportation.",
        "photos": [
          "assets/photos/stop01-behavioral"
        ],
        "video": [
          "assets/videos/stop01-behavioral-01",
          "assets/videos/stop01-behavioral-02"
        ]
      },
      "density": {
        "densityScore": 3
      }
    }
  },
  {
    "no": 2,
    "name": "Reşadiye Secondary School",
    "x": 71.9,
    "y": 28.7,
    "desc": "Located along the Golden Horn waterfront, Reşadiye Secondary School—widely known by locals as Ebusuud School—is one of Eyüpsultan’s historic landmarks, contributing to the district’s educational heritage and collective memory through its distinctive architecture and long-standing presence.",
    "layers": {
      "visual": {
        "text": "The historic yellow school building stands as a recognizable landmark within Eyüpsultan, creating a strong visual connection between the district’s past and present.",
        "photos": [
          "assets/photos/stop02-visual"
        ]
      },
      "acoustic": {
        "text": "The soundscape is shaped by school bells, children's voices, nearby traffic, and the ambient sounds of daily urban life.",
        "audio": [
          "assets/audio/stop02-acoustic"
        ]
      },
      "olfactory": {
        "text": "Due to its proximity to the waterfront, the scent of the sea and iodine-rich air remains present throughout the area."
      },
      "gustatory": {
        "text": "A vehicle regularly distributing lokma as a charitable offering creates a distinctive taste-related experience, attracting queues of people and reinforcing local traditions of sharing and hospitality.",
        "photos": [
          "assets/photos/stop02-gustatory"
        ]
      },
      "behavioral": {
        "text": "Pedestrians continuously move through the area, using it as a transit corridor while others gather around the lokma stand, creating brief moments of social interaction.",
        "photos": [
          "assets/photos/stop02-behavioral"
        ]
      },
      "density": {
        "densityScore": 3
      }
    }
  },
  {
    "no": 3,
    "name": "Sultan Reşad Tomb",
    "x": 66.5,
    "y": 18.7,
    "desc": "Located away from the main religious and commercial core of Eyüpsultan, the Mausoleum of Sultan Mehmed V Reşad offers a quieter and more contemplative atmosphere while remaining an important component of the district’s religious and historical landscape.",
    "layers": {
      "visual": {
        "text": "The historic mausoleum is surrounded by mature trees and greenery, creating a visually tranquil setting where architecture and nature coexist.",
        "photos": [
          "assets/photos/stop03-visual-01",
          "assets/photos/stop03-visual-02"
        ]
      },
      "material": {
        "text": "The site is characterized by stone surfaces, historic architectural elements, and landscaped green areas that reinforce its historical character."
      },
      "acoustic": {
        "text": "Although the atmosphere is relatively calm, the soundscape remains influenced by nearby road traffic and passing vehicles.",
        "audio": [
          "assets/audio/stop03-acoustic"
        ]
      },
      "olfactory": {
        "text": "The scent of the nearby Golden Horn contributes a subtle marine atmosphere, with the smell of sea air and iodine present in the background."
      },
      "behavioral": {
        "text": "The area is primarily used as a passage space, with occasional visitors walking through or briefly pausing to observe the site."
      },
      "density": {
        "densityScore": 2
      }
    }
  },
  {
    "no": 4,
    "name": "Imperial Accession Route (Cülûs Yolu)",
    "x": 47.3,
    "y": 10.5,
    "desc": "The Imperial Accession Route (Cülûs Yolu) historically served as the ceremonial path connecting the Golden Horn to Eyüpsultan Mosque, where Ottoman sultans participated in accession and sword-girding ceremonies. Today, the route continues to function as a symbolic transition space linking the waterfront to the spiritual heart of Eyüpsultan. Unlike conventional pedestrian routes, the Imperial Accession Route functions as a ceremonial landscape where movement itself becomes part of the sensory experience.",
    "layers": {
      "visual": {
        "text": "The route is strongly defined by its historic character, framed by mature trees, traditional architecture, and views that evoke Eyüpsultan's Ottoman heritage. Ongoing restoration works introduce contemporary elements into the historic landscape.",
        "photos": [
          "assets/photos/stop04-visual-01",
          "assets/photos/stop04-visual-02",
          "assets/photos/stop04-visual-03"
        ]
      },
      "material": {
        "text": "Distinctive cobblestone paving, stone surfaces, and historic urban textures shape the physical character of the route. Temporary construction barriers and restoration materials create an additional layer within the streetscape.",
        "photos": [
          "assets/photos/stop04-material-01",
          "assets/photos/stop04-material-02",
          "assets/photos/stop04-material-03",
          "assets/photos/stop04-material-04"
        ]
      },
      "acoustic": {
        "text": "Sounds of prayers and religious recitations from Eyüpsultan Mosque blend with birdsong from the surrounding trees, creating an atmosphere that feels both spiritual and connected to nature.",
        "audio": [
          "assets/audio/stop04-acoustic"
        ]
      },
      "olfactory": {
        "text": "As the route moves away from the waterfront, the scent of the sea gradually fades and is replaced by aromas of food from the historic soup kitchen (imaret) and nearby eateries."
      },
      "behavioral": {
        "text": "Pedestrian activity is relatively limited, with visitors moving at a slower pace. Walking along the route becomes a symbolic and reflective experience, echoing its ceremonial function and encouraging a heightened awareness of place.",
        "photos": [
          "assets/photos/stop04-behavioral"
        ]
      },
      "density": {
        "densityScore": 1
      }
    }
  },
  {
    "no": 5,
    "name": "Eyüp Sultan Mosque",
    "x": 28.4,
    "y": 19.2,
    "desc": "Eyüpsultan Mosque and its surrounding square form the spiritual and cultural heart of Eyüpsultan. As one of the most significant religious destinations in Istanbul, the area attracts worshippers, visitors, and local residents, creating a vibrant landscape shaped by history, faith, and everyday life. Eyüpsultan functions not only as a religious site but also as a living sensory landscape where faith is continuously performed through sounds, scents, movements, and everyday rituals.",
    "layers": {
      "visual": {
        "text": "The area presents a rich historic landscape characterized by Ottoman architecture, religious monuments, colorful public spaces, and continuous human activity, creating a dynamic visual environment.",
        "photos": [
          "assets/photos/stop05-visual-01",
          "assets/photos/stop05-visual-02",
          "assets/photos/stop05-visual-03",
          "assets/photos/stop05-visual-04"
        ]
      },
      "material": {
        "text": "Stone pavements, marble surfaces, decorative tiles, fountains, and historic architectural details contribute to the site's distinctive material character and reinforce its historical identity.",
        "photos": [
          "assets/photos/stop05-material-01",
          "assets/photos/stop05-material-02",
          "assets/photos/stop05-material-03"
        ],
        "video": [
          "assets/videos/stop05-material"
        ]
      },
      "acoustic": {
        "text": "The soundscape is dominated by calls to prayer, religious recitations, conversations, and the sound of flowing water from numerous fountains and ablution facilities, creating a uniquely spiritual atmosphere.",
        "audio": [
          "assets/audio/stop05-acoustic"
        ]
      },
      "olfactory": {
        "text": "The air is filled with the scents of rose water, perfumes, and incense, reflecting long-standing religious and cultural traditions associated with the site."
      },
      "gustatory": {
        "text": "Food and sweetness play an important role in local practices. Visitors and residents often distribute Turkish delight (lokum) in fulfillment of wishes or prayers, creating a sensory connection between faith, generosity, and taste.",
        "photos": [
          "assets/photos/stop05-gustatory"
        ]
      },
      "behavioral": {
        "text": "The area hosts a wide range of ritual and everyday practices. People pray, perform ablutions, walk through the square, socialize, make wishes, and participate in religious and cultural traditions, generating a highly active social environment.",
        "photos": [
          "assets/photos/stop05-behavioral-01",
          "assets/photos/stop05-behavioral-02",
          "assets/photos/stop05-behavioral-03"
        ]
      },
      "density": {
        "densityScore": 5
      }
    }
  },
  {
    "no": 6,
    "name": "Eyüp Sultan Square",
    "x": 29.5,
    "y": 39.9,
    "desc": "Eyüpsultan Square serves as the social and commercial heart of the district, functioning as a major gathering place where religious, cultural, and everyday activities intersect. Surrounded by shops, cafés, and historic landmarks, the square is one of the most vibrant and heavily used public spaces in Eyüpsultan.",
    "layers": {
      "visual": {
        "text": "The square presents a lively historic landscape characterized by mature trees, fountains, birds, historic architecture, colorful storefronts, and a constant flow of people, creating a dynamic and visually rich environment.",
        "photos": [
          "assets/photos/stop06-visual-01",
          "assets/photos/stop06-visual-02",
          "assets/photos/stop06-visual-03",
          "assets/photos/stop06-visual-04",
          "assets/photos/stop06-visual-05"
        ],
        "video": [
          "assets/videos/stop06-visual-01",
          "assets/videos/Stop06-visual-02"
        ]
      },
      "material": {
        "text": "Marble paving dominates the square, while stone architectural elements associated with the surrounding religious and historic structures contribute to a strong sense of place and continuity."
      },
      "acoustic": {
        "text": "The soundscape is highly animated, consisting of conversations, children playing, calls to prayer, religious recitations, the sounds of flowing water, and the fluttering of birds gathering throughout the square.",
        "audio": [
          "assets/audio/stop06-acoustic-01",
          "assets/audio/stop06-acoustic-02",
          "assets/audio/stop06-acoustic-03"
        ]
      },
      "olfactory": {
        "text": "The scents of rose water and traditional perfumes remain present, blending with aromas from nearby bakeries, restaurants, and food vendors that surround the square."
      },
      "gustatory": {
        "text": "The square is surrounded by a diverse range of food establishments, offering visitors access to traditional sweets, baked goods, local dishes, and beverages that contribute to the area's sensory richness.",
        "photos": [
          "assets/photos/stop06-gustatory"
        ]
      },
      "behavioral": {
        "text": "The square is surrounded by a diverse range of food establishments, offering visitors access to traditional sweets, baked goods, local dishes, and beverages that contribute to the area's sensory richness.",
        "photos": [
          "assets/photos/stop06-behavioral-01",
          "assets/photos/stop06-behavioral-02",
          "assets/photos/stop06-behavioral-03"
        ],
        "video": [
          "assets/videos/stop06-behavioral"
        ]
      },
      "density": {
        "densityScore": 5
      }
    }
  },
  {
    "no": 7,
    "name": "Toy Bazaar (Oyuncakçılar Çarşısı)",
    "x": 43.0,
    "y": 43.7,
    "desc": "The Toy Bazaar (Oyuncakçılar Çarşısı) is one of Eyüpsultan’s most vibrant commercial corridors, connecting visitors to a lively retail environment where shopping, social interaction, and local street culture shape the everyday experience of the district.",
    "layers": {
      "visual": {
        "text": "The area presents a colorful and energetic streetscape dominated by shopfronts, merchandise displays, and pedestrian activity. While traces of Eyüpsultan's historic character remain visible, the commercial atmosphere becomes more prominent.",
        "photos": [
          "assets/photos/stop07-visual-01",
          "assets/photos/stop07-visual-02",
          "assets/photos/stop07-visual-03",
          "assets/photos/stop07-visual-04",
          "assets/photos/stop07-visual-05",
          "assets/photos/stop07-visual-06"
        ],
        "video": [
          "assets/videos/stop07-visual-01",
          "assets/videos/stop07-visual-02"
        ]
      },
      "material": {
        "text": "Marble pavements and traditional stone walls continue to define the physical environment, maintaining a connection to the district's historic urban fabric despite the commercial intensity.",
        "photos": [
          "assets/photos/stop07-material-01",
          "assets/photos/stop07-material-02",
          "assets/photos/stop07-material-03",
          "assets/photos/stop07-material-04",
          "assets/photos/stop07-material-05",
          "assets/photos/stop07-material-06",
          "assets/photos/stop07-material-07"
        ]
      },
      "acoustic": {
        "text": "The soundscape is dominated by vendors calling out to customers, conversations between shoppers, and the constant background noise of commercial activity, creating a lively market atmosphere.",
        "audio": [
          "assets/audio/stop07-acoustic"
        ],
        "video": [
          "assets/videos/stop07-acoustic"
        ]
      },
      "olfactory": {
        "text": "Traditional essence and perfume shops are an integral part of the marketplace experience. Visitors frequently pause at these small vendors to explore a variety of fragrances, ranging from floral and herbal notes to richer woody and oriental scents. While these aromas do not dominate the street environment, they appear intermittently through these interactions, adding a distinctive olfactory dimension to the cultural atmosphere of the area.",
        "photos": [
          "assets/photos/stop07-olfactory-01",
          "assets/photos/stop07-olfactory-02",
          "assets/photos/stop07-olfactory-03"
        ]
      },
      "gustatory": {
        "text": "The bazaar offers numerous opportunities to experience local street food culture, including simit, roasted corn, traditional sweets, and macun, providing a distinctive taste of everyday life in Eyüpsultan.",
        "photos": [
          "assets/photos/stop07-gustatory-01",
          "assets/photos/stop07-gustatory-02",
          "assets/photos/stop07-gustatory-03"
        ]
      },
      "behavioral": {
        "text": "People move through the bazaar browsing products, shopping, chatting with vendors, and interacting with one another, generating a dynamic environment centered on commerce and social exchange.",
        "photos": [
          "assets/photos/stop07-behavioral-01",
          "assets/photos/stop07-behavioral-02"
        ],
        "video": [
          "assets/videos/stop07-behavioral"
        ]
      },
      "density": {
        "densityScore": 4
      }
    }
  },
  {
    "no": 8,
    "name": "Feshane Avenue",
    "x": 56.5,
    "y": 57.8,
    "desc": "Feshane Avenue is a quiet street characterized by its historic wooden houses and small shops, offering a more intimate urban experience that contrasts with the busy public spaces found elsewhere in Eyüpsultan.",
    "layers": {
      "visual": {
        "text": "The avenue is defined by historic wooden houses, small storefronts, and a human-scale streetscape that preserves elements of Eyüpsultan's traditional architectural character.",
        "photos": [
          "assets/photos/stop8-visual-01",
          "assets/photos/stop8-visual-02",
          "assets/photos/stop8-visual-03",
          "assets/photos/stop8-visual-04",
          "assets/photos/stop8-visual-05",
          "assets/photos/stop8-visual-06",
          "assets/photos/stop8-visual-07"
        ]
      },
      "material": {
        "text": "The avenue is defined by historic wooden houses, small storefronts, and a human-scale streetscape that preserves elements of Eyüpsultan's traditional architectural character.",
        "photos": [
          "assets/photos/stop8-material-01",
          "assets/photos/stop8-material-02"
        ]
      },
      "acoustic": {
        "text": "The soundscape is relatively subdued, consisting primarily of pedestrian footsteps, conversations, and occasional sounds emerging from nearby shops."
      },
      "olfactory": {
        "text": "As pedestrians move along the avenue, the scent of jasmine flowers growing over the walls becomes noticeable, adding a subtle floral element to the streetscape.",
        "photos": [
          "assets/photos/stop8-olfactory-01",
          "assets/photos/stop8-olfactory-02"
        ]
      },
      "behavioral": {
        "text": "The street is mainly used as a passage corridor, with pedestrians moving through the area and occasionally stopping at local shops.",
        "photos": [
          "assets/photos/stop8-behavioral-01",
          "assets/photos/stop8-behavioral-02"
        ]
      },
      "density": {
        "densityScore": 2
      }
    }
  },
  {
    "no": 9,
    "name": "Kalenderhane Avenue",
    "x": 35.8,
    "y": 79.9,
    "desc": "Kalenderhane Avenue serves as one of Eyüpsultan’s main pedestrian routes, connecting key landmarks and public spaces throughout the district. Lined with historic mansions, stone buildings, and active commercial frontages, the avenue combines daily movement, social interaction, and cultural heritage within a vibrant urban setting.",
    "layers": {
      "visual": {
        "text": "The avenue is characterized by historic wooden mansions, traditional shopfronts, and the stone walls of an old cemetery. Together, these elements create a visually rich environment where commercial activity coexists with traces of the area's historical and cultural heritage.",
        "photos": [
          "assets/photos/stop09-visual-01",
          "assets/photos/stop09-visual-02",
          "assets/photos/stop09-visual-03",
          "assets/photos/stop09-visual-04",
          "assets/photos/stop09-visual-05",
          "assets/photos/stop09-visual-06"
        ]
      },
      "material": {
        "text": "Wood and stone dominate the physical landscape, reflecting the traditional architectural character of Eyüpsultan. As the avenue opens toward the square, the urban texture gradually becomes more open and dynamic.",
        "photos": [
          "assets/photos/stop09-material-01",
          "assets/photos/stop09-material-02"
        ]
      },
      "acoustic": {
        "text": "The soundscape is shaped by pedestrian conversations, footsteps, and sounds emerging from nearby shops, generating a lively yet relatively calm urban atmosphere."
      },
      "olfactory": {
        "text": "The avenue is influenced by scents from nearby perfume shops, where fragrances often drift into the street, while flowers displayed by local florists add natural floral notes to the sensory experience.",
        "photos": [
          "assets/photos/stop09-olfactory-01",
          "assets/photos/stop09-olfactory-02",
          "assets/photos/stop09-olfactory-03"
        ]
      },
      "behavioral": {
        "text": "People use the avenue for walking, shopping, socializing, and moving between different parts of the district. Public fountains located along the route create small moments of pause, where pedestrians stop to drink water.",
        "photos": [
          "assets/photos/stop09-behavioral-01",
          "assets/photos/stop09-behavioral-02"
        ]
      },
      "density": {
        "densityScore": 3
      }
    }
  },
  {
    "no": 10,
    "name": "Eyüp Sultan Square (Final Stop)",
    "x": 19.9,
    "y": 37.1,
    "desc": "The final section of Eyüpsultan Square represents the district's culinary and commercial core, where historic bakeries, traditional restaurants, and local food vendors create a vibrant sensory environment. Surrounded by shops and gathering spaces, the area serves as a lively meeting point where food, commerce, and everyday social life converge. As the final stop of the route, this section of Eyüpsultan Square illustrates the transformation of the sensescape from spiritual and ceremonial experiences toward everyday practices of consumption, social interaction, and collective urban life.",
    "layers": {
      "visual": {
        "text": "Compared to the religious core of the square, this area presents a more contemporary and commercially oriented appearance. Colorful storefronts, restaurant signs, outdoor displays, and continuous pedestrian activity create a lively and visually dynamic streetscape.",
        "photos": [
          "assets/photos/stop10-visual-01",
          "assets/photos/stop10-visual-02",
          "assets/photos/stop10-visual-03",
          "assets/photos/stop10-visual-04"
        ]
      },
      "material": {
        "text": "The marble paving that characterizes Eyüpsultan Square continues throughout the area, providing visual continuity despite the shift toward a more commercial atmosphere."
      },
      "acoustic": {
        "text": "The soundscape combines conversations, children's voices, vendor calls, and sounds from surrounding businesses with prayers and religious recitations emanating from the nearby mosque, creating a layered and energetic urban atmosphere.",
        "audio": [
          "assets/audio/stop10-acoustic-01",
          "assets/audio/stop10-acoustic-02"
        ],
        "video": [
          "assets/videos/stop10-acoustic"
        ]
      },
      "olfactory": {
        "text": "The aromas of freshly baked goods, traditional stews, and local delicacies dominate the area. Scents emerging from bakeries and restaurants create a strong sensory connection to Eyüpsultan's culinary heritage.",
        "photos": [
          "assets/photos/stop10-olfactory-01",
          "assets/photos/stop10-olfactory-02"
        ]
      },
      "gustatory": {
        "text": "The area offers a variety of local flavors associated with Eyüpsultan, including traditional baked dishes (güveç pide), pastries and cookies (halka, un kurabiyesi, and acı badem kurabiyesi), as well as ice cream, providing visitors with a diverse tasting experience.",
        "photos": [
          "assets/photos/stop10-gustatory-01",
          "assets/photos/stop10-gustatory-02",
          "assets/photos/stop10-gustatory-03",
          "assets/photos/stop10-gustatory-04",
          "assets/photos/stop10-gustatory-05"
        ]
      },
      "behavioral": {
        "text": "People continuously move through the area, shopping, socializing, and purchasing food. Rather than dining exclusively inside restaurants, many visitors buy food and consume it while sitting in the square, transforming public space into an extension of the dining experience.",
        "photos": [
          "assets/photos/stop10-behavioral-01",
          "assets/photos/stop10-behavioral-02",
          "assets/photos/stop10-behavioral-03"
        ]
      },
      "density": {
        "densityScore": 5
      }
    }
  }
];

let mediaState = {};
let modalItems = [];
let modalIndex = 0;
let modalType = "photo";

function showPage(pageId){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  document.querySelectorAll(".nav-links button").forEach(b => b.classList.remove("active"));
  const activeBtn = document.querySelector(`[data-page="${pageId}"]`);
  if(activeBtn) activeBtn.classList.add("active");

  // When the map page is opened from Start Journey or the navigation,
  // always return to the initial map panel before any stop is selected.
  if(pageId === "map"){
    resetMapIntro();
  }
}

function resetMapIntro(){
  const initialPanel = document.getElementById("initialPanel");
  const stopPanel = document.getElementById("stopPanel");
  const accordion = document.getElementById("accordion");

  if(initialPanel) initialPanel.style.display = "flex";
  if(stopPanel) stopPanel.classList.remove("active");
  if(accordion) accordion.innerHTML = "";

  document.querySelectorAll(".stop-marker").forEach(marker => {
    marker.classList.remove("active-stop");
  });
}

function createMarkers(){
  const stage = document.querySelector(".map-stage");
  stops.forEach((s, i)=>{
    const btn = document.createElement("button");
    btn.className = "stop-marker";
    btn.dataset.stopNo = s.no;
    btn.style.left = s.x + "%";
    btn.style.top = s.y + "%";
    btn.innerText = s.no;
    btn.title = s.name;
    btn.onclick = () => openStop(i);
    stage.appendChild(btn);
  });
}

function openStop(index){
  const stop = stops[index];

  document.querySelectorAll(".stop-marker").forEach(marker => marker.classList.remove("active-stop"));
  const activeMarker = document.querySelector(`.stop-marker[data-stop-no="${stop.no}"]`);
  if(activeMarker) activeMarker.classList.add("active-stop");

  document.getElementById("initialPanel").style.display = "none";
  document.getElementById("stopPanel").classList.add("active");

  document.getElementById("stopNo").innerText = `Stop ${String(stop.no).padStart(2,"0")}`;
  document.getElementById("stopName").innerText = stop.name;
  document.getElementById("stopDesc").innerText = stop.desc;

  const panelContent = document.querySelector(".stop-panel-content");
  if(panelContent){
    panelContent.scrollTop = 0;
  }

  const wrap = document.getElementById("accordion");
  wrap.innerHTML = "";
  let hasAnyLayer = false;

  layers.forEach((layer)=>{
    const data = stop.layers[layer.key] || {};
    const hasText = data.text && data.text.trim();
    const hasPhotos = data.photos && data.photos.length;
    const hasAudio = data.audio && data.audio.length;
    const hasVideo = data.video && data.video.length;
    const hasDensity = layer.key === "density" && data.densityScore;

    if(!hasText && !hasPhotos && !hasAudio && !hasVideo && !hasDensity) return;
    hasAnyLayer = true;

    const item = document.createElement("div");
    item.className = "acc-item";

    const head = document.createElement("button");
    head.className = "acc-head";
    head.innerHTML = `<span>${layer.title}</span><span>＋</span>`;
    head.onclick = () => {
      item.classList.toggle("open");
      head.querySelector("span:last-child").innerText = item.classList.contains("open") ? "−" : "＋";
    };

    const body = document.createElement("div");
    body.className = "acc-body";

    if(hasText){
      const p = document.createElement("p");
      p.innerText = data.text;
      body.appendChild(p);
    }

    if(hasDensity){
      body.appendChild(createDensityVisual(Number(data.densityScore)));
    }

    if(hasPhotos){
      body.appendChild(createMediaCarousel(`photo-${stop.no}-${layer.key}`, "photo", data.photos, stop.name, layer.title));
    }

    if(hasAudio){
      body.appendChild(createMediaCarousel(`audio-${stop.no}-${layer.key}`, "audio", data.audio, stop.name, layer.title));
    }

    if(hasVideo){
      body.appendChild(createMediaCarousel(`video-${stop.no}-${layer.key}`, "video", data.video, stop.name, layer.title));
    }

    item.appendChild(head);
    item.appendChild(body);
    wrap.appendChild(item);
  });

  if(!hasAnyLayer){
    wrap.innerHTML = `<div class="placeholder-note">Content for this stop will be added later.</div>`;
  }
}

function createMediaCarousel(id, type, items, stopName, layerTitle){
  mediaState[id] = { type, items, index:0, stopName, layerTitle };
  const section = document.createElement("div");
  section.className = "media-carousel";
  section.id = id;

  const title = type === "photo" ? "📸 Photos" : type === "video" ? "🎥 Videos" : "🎧 Audio";
  section.innerHTML = `
    <strong>${title}</strong>
    <div class="media-frame" id="${id}-frame"></div>
    <div class="media-controls">
      <button onclick="moveMedia('${id}', -1)">←</button>
      <span id="${id}-count">1 / ${items.length}</span>
      <button onclick="moveMedia('${id}', 1)">→</button>
    </div>
  `;

  setTimeout(() => renderMedia(id), 0);
  return section;
}


function isPhotoPath(src){
  return /\.(jpg|jpeg|png|webp)$/i.test(src);
}

function getPhotoFallbacks(src){
  const base = src.replace(/\.(jpg|jpeg|png|webp)$/i, "");
  return [base + ".jpg", base + ".jpeg", base + ".png", base + ".webp"];
}

function tryNextPhotoFormat(img){
  const fallbacks = (img.dataset.fallbacks || "").split("|").filter(Boolean);
  const index = Number(img.dataset.fallbackIndex || "0");
  if(index < fallbacks.length - 1){
    img.dataset.fallbackIndex = String(index + 1);
    img.src = fallbacks[index + 1];
  } else {
    showMissingMedia(img, "Photo file is not found yet. Check file name or extension in assets/photos.");
  }
}


function getAudioFallbacks(src){
  const base = src.replace(/\.(mp3|MP3|m4a|M4A|aac|AAC|wav|WAV|ogg|OGG)$/i, "");
  const exts = [".mp3", ".MP3", ".m4a", ".M4A", ".aac", ".AAC", ".wav", ".WAV", ".ogg", ".OGG", ""];
  return [...new Set(exts.map(ext => base + ext))];
}

function tryNextAudioFormat(audioEl){
  const fallbacks = (audioEl.dataset.fallbacks || "").split("|").filter(Boolean);
  const index = Number(audioEl.dataset.fallbackIndex || "0");
  if(index < fallbacks.length - 1){
    audioEl.dataset.fallbackIndex = String(index + 1);
    audioEl.src = fallbacks[index + 1];
    audioEl.load();
  } else {
    showMissingFrame(audioEl.dataset.mediaId, "Audio file is not found yet. Check file name, extension, or folder: assets/audio.");
  }
}

function getVideoFallbacks(src){
  const base = src.replace(/\.(mp4|MP4|mov|MOV|webm|WEBM)$/i, "");
  const folders = [base];
  if(base.includes("/videos/")) folders.push(base.replace("/videos/", "/video/"));
  if(base.includes("/video/")) folders.push(base.replace("/video/", "/videos/"));
  const exts = [".mp4", ".MP4", ".mov", ".MOV", ".webm", ".WEBM", ""];
  return [...new Set(folders.flatMap(f => exts.map(ext => f + ext)))];
}

function tryNextVideoFormat(videoEl){
  const fallbacks = (videoEl.dataset.fallbacks || "").split("|").filter(Boolean);
  const index = Number(videoEl.dataset.fallbackIndex || "0");
  if(index < fallbacks.length - 1){
    videoEl.dataset.fallbackIndex = String(index + 1);
    videoEl.src = fallbacks[index + 1];
    videoEl.load();
  } else {
    showMissingFrame(videoEl.dataset.mediaId, "Video file is not found yet. Check file name, extension, or folder: assets/videos.");
  }
}

function renderMedia(id){
  const state = mediaState[id];
  if(!state) return;
  const src = state.items[state.index];
  const frame = document.getElementById(`${id}-frame`);
  const count = document.getElementById(`${id}-count`);
  if(!frame) return;

  frame.classList.remove("media-frame-photo", "media-frame-video", "media-frame-audio");
  frame.classList.add(`media-frame-${state.type}`);
  count.innerText = `${state.index + 1} / ${state.items.length}`;

  if(state.type === "photo"){
    const fallbacks = getPhotoFallbacks(src);
    frame.innerHTML = `<img src="${fallbacks[0]}" data-fallbacks="${fallbacks.join('|')}" data-fallback-index="0" alt="${state.stopName} ${state.layerTitle}" onclick="openMediaModal('${id}')" onerror="tryNextPhotoFormat(this)">`;
  } else if(state.type === "video"){
    const fallbacks = getVideoFallbacks(src);
    frame.innerHTML = `<div class="video-wrap"><video controls playsinline preload="metadata" src="${fallbacks[0]}" data-fallbacks="${fallbacks.join('|')}" data-fallback-index="0" data-media-id="${id}" onerror="tryNextVideoFormat(this)"></video><button class="media-zoom-btn" title="Large view" onclick="openMediaModal('${id}')">🔍</button></div>`;
  } else if(state.type === "audio"){
    const fallbacks = getAudioFallbacks(src);
    frame.innerHTML = `<div class="audio-wrap"><audio controls src="${fallbacks[0]}" data-fallbacks="${fallbacks.join('|')}" data-fallback-index="0" data-media-id="${id}" onerror="tryNextAudioFormat(this)"></audio></div>`;
  }
}

function showMissingMedia(el, message){
  const frame = el.parentElement;
  frame.innerHTML = `<div class="media-missing">${message}</div>`;
}

function showMissingFrame(id, message){
  if(id === "modal-audio" || id === "modal-video"){
    const content = document.getElementById("modalContent");
    if(content) content.innerHTML = `<div class="media-missing">${message}</div>`;
    return;
  }
  const frame = document.getElementById(`${id}-frame`);
  if(frame) frame.innerHTML = `<div class="media-missing">${message}</div>`;
}

function moveMedia(id, direction){
  const state = mediaState[id];
  state.index = (state.index + direction + state.items.length) % state.items.length;
  renderMedia(id);
}

function openMediaModal(id){
  const state = mediaState[id];
  if(!state) return;
  modalItems = state.items;
  modalIndex = state.index;
  modalType = state.type;
  renderMediaModal();
  document.getElementById("mediaModal").classList.add("active");
}

function renderMediaModal(){
  const content = document.getElementById("modalContent");
  const counter = document.getElementById("modalCounter");
  const src = modalItems[modalIndex];
  counter.innerText = `${modalIndex + 1} / ${modalItems.length}`;

  if(modalType === "photo"){
    const fallbacks = getPhotoFallbacks(src);
    content.innerHTML = `<img src="${fallbacks[0]}" data-fallbacks="${fallbacks.join('|')}" data-fallback-index="0" alt="Expanded image" onerror="tryNextPhotoFormat(this)">`;
  } else if(modalType === "video"){
    const fallbacks = getVideoFallbacks(src);
    content.innerHTML = `<div class="modal-video-note">Use the side arrows to move between videos</div><video controls autoplay playsinline controlsList="nofullscreen" src="${fallbacks[0]}" data-fallbacks="${fallbacks.join('|')}" data-fallback-index="0" data-media-id="modal-video" onerror="tryNextVideoFormat(this)"></video>`;
  } else {
    const fallbacks = getAudioFallbacks(src);
    content.innerHTML = `<audio controls autoplay src="${fallbacks[0]}" data-fallbacks="${fallbacks.join('|')}" data-fallback-index="0" data-media-id="modal-audio" onerror="tryNextAudioFormat(this)"></audio>`;
  }
}

function modalMove(direction){
  if(!modalItems.length) return;
  document.getElementById("modalContent").innerHTML = "";
  modalIndex = (modalIndex + direction + modalItems.length) % modalItems.length;
  renderMediaModal();
}

function closeMediaModal(){
  document.getElementById("mediaModal").classList.remove("active");
  document.getElementById("modalContent").innerHTML = "";
}

function createDensityVisual(score){
  const safeScore = Math.max(1, Math.min(5, score));
  const wrap = document.createElement("div");
  wrap.className = `density-visual density-${safeScore}`;
  const segments = Array.from({length:5}, (_,i)=>`<div class="density-segment ${i < safeScore ? "" : "inactive"}"></div>`).join("");
  wrap.innerHTML = `
    <div class="density-bar-wrap">
      <div class="density-marker"><span>👥</span></div>
      <div class="density-bar">${segments}</div>
      <div class="density-labels">
        <span>VERY LOW</span>
        <span>VERY HIGH</span>
      </div>
    </div>`;
  return wrap;
}

document.addEventListener("keydown", e=>{
  if(e.key === "Escape") closeMediaModal();
  if(document.getElementById("mediaModal").classList.contains("active")){
    if(e.key === "ArrowLeft") modalMove(-1);
    if(e.key === "ArrowRight") modalMove(1);
  }
});


function teamPhotoFallback(img){
  const formats = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP"];
  const originalSrc = img.getAttribute("src") || "";
  const cleanBase = originalSrc.replace(/\.(jpg|jpeg|png|webp)$/i, "");
  const base = img.dataset.base || cleanBase;
  let index = Number(img.dataset.index || "0");

  if(index < formats.length){
    img.dataset.base = base;
    img.dataset.index = String(index + 1);
    img.src = base + formats[index];
  } else {
    img.onerror = null;
    img.style.display = "none";
    const fallback = img.nextElementSibling;
    if(fallback) fallback.style.display = "block";
  }
}

function tryNextTeamPhoto(img){
  return teamPhotoFallback(img);
}


function setupFeedbackForm(){
  const form = document.getElementById("feedbackForm");
  if(!form) return;

  form.addEventListener("submit", async (event)=>{
    event.preventDefault();

    const submitButton = document.getElementById("feedbackSubmit");
    if(submitButton){
      submitButton.disabled = true;
      submitButton.innerText = "Sending...";
    }

    const formData = new FormData();
    formData.append("entry.1305377735", document.getElementById("feedbackName")?.value || "");
    formData.append("entry.1739723887", document.getElementById("feedbackStop")?.value || "");
    formData.append("entry.1392951396", document.getElementById("feedbackText")?.value || "");

    try{
      await fetch("https://docs.google.com/forms/d/e/1FAIpQLSelNtflD7CgebYgBHuX4CyUrXsBnfj9V4wRF5F_kfwD1mriqA/formResponse", {
        method:"POST",
        mode:"no-cors",
        body:formData
      });

      form.reset();
      alert("Thank you for your feedback!");
    } catch(error){
      alert("Feedback could not be sent. Please try again.");
    } finally {
      if(submitButton){
        submitButton.disabled = false;
        submitButton.innerText = "Submit Feedback";
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll(".nav-links button").forEach(btn => {
    btn.addEventListener("click", () => showPage(btn.dataset.page));
  });
  createMarkers();
  setupFeedbackForm();
  showPage("home");
});
