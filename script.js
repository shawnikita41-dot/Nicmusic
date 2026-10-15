/* Nic music player. Demo audio uses public sample tracks; replace with music you own or are licensed to use. */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const tracks = [
  {id:"t1",title:"Midnight City Lights",artist:"Nova June",album:"Afterglow",duration:"3:42",seconds:222,cover:"cover-a",symbol:"☾",mood:"dream",audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",lyrics:["City lights are waking up","Neon rivers, silver dust","We keep driving through the blue","Every road leads back to you","Hold the night a little longer","Let the quiet make us stronger"]},
  {id:"t2",title:"Golden Hour",artist:"The Sunday Club",album:"Soft Focus",duration:"3:18",seconds:198,cover:"cover-b",symbol:"☼",mood:"chill",audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",lyrics:["Warm light across the room","Afternoon in bloom","No rush, no place to be","Just the world and you and me","Let the golden hour stay","We can drift away"]},
  {id:"t3",title:"Parallel Lines",artist:"Milo Park",album:"Motion Studies",duration:"4:01",seconds:241,cover:"cover-c",symbol:"〰",mood:"focus",audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",lyrics:["One thought becomes a spark","A little rhythm in the dark","Line by line and beat by beat","Find the pattern underneath","Keep your eyes on what you know","Let the steady current flow"]},
  {id:"t4",title:"Velvet Skies",artist:"Luna Sol",album:"Dream State",duration:"3:56",seconds:236,cover:"cover-d",symbol:"✧",mood:"dream",audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",lyrics:["Velvet skies above the sea","Every star is calling me","Floating where the colours blend","Wish this blue would never end","Close your eyes and count to three","Meet me where the clouds run free"]},
  {id:"t5",title:"Run It Back",artist:"Kairo",album:"Electric Bloom",duration:"2:58",seconds:178,cover:"cover-e",symbol:"ϟ",mood:"energy",audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",lyrics:["Feel the bass beneath your feet","Catch the spark and find the beat","Hands up, let the whole room glow","One more time, don't let it go","Turn it up and take the floor","Give the night a little more"]},
  {id:"t6",title:"Blue on Blue",artist:"Aria West",album:"Soft Focus",duration:"3:35",seconds:215,cover:"cover-f",symbol:"◌",mood:"chill",audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",lyrics:["Blue on blue and open air","Little moments everywhere","Nothing left to prove tonight","Everything is soft and light","Let the day fall out of view","I'll be here in blue on blue"]},
  {id:"t7",title:"Paper Planets",artist:"Milo Park",album:"Dream State",duration:"3:27",seconds:207,cover:"cover-g",symbol:"✦",mood:"dream",audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",lyrics:["Fold a map from yesterday","Send our paper worlds away","Tiny planets, paper moons","Meet me there this afternoon","If the sky could keep a secret","We would be the ones to keep it"]},
  {id:"t8",title:"Pulse Check",artist:"Kairo",album:"Electric Bloom",duration:"3:11",seconds:191,cover:"cover-h",symbol:"ϟ",mood:"energy",audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",lyrics:["Heartbeat moving with the sound","Feel the electricity around","Every second, every spark","We can light up all the dark","Pulse check, are you feeling alive?","This is our moment to arrive"]}
];
const bollywoodSongs = [
  ["Kesariya","Arijit Singh","Brahmastra"],
  ["Deva Deva","Arijit Singh, Jonita Gandhi","Brahmastra"],
  ["Dance Ka Bhoot","Arijit Singh","Brahmastra"],
  ["Apna Bana Le","Arijit Singh","Bhediya"],
  ["Thumkeshwari","Sachin-Jigar, Rashmeet Kaur, Ash King, Divya Kumar","Bhediya"],
  ["Tere Pyaar Mein","Arijit Singh, Nikhita Gandhi","Tu Jhoothi Main Makkaar"],
  ["Pyaar Hota Kayi Baar Hai","Arijit Singh, Charan","Tu Jhoothi Main Makkaar"],
  ["O Bedardeya","Arijit Singh","Tu Jhoothi Main Makkaar"],
  ["Show Me The Thumka","Sunidhi Chauhan, Shashwat Singh","Tu Jhoothi Main Makkaar"],
  ["Jhoome Jo Pathaan","Arijit Singh, Sukriti Kakar, Vishal-Shekhar","Pathaan"],
  ["Besharam Rang","Shilpa Rao, Caralisa Monteiro, Vishal-Shekhar","Pathaan"],
  ["Chaleya","Arijit Singh, Shilpa Rao","Jawan"],
  ["Not Ramaiya Vastavaiya","Anirudh Ravichander, Vishal Dadlani, Shilpa Rao","Jawan"],
  ["Zinda Banda","Anirudh Ravichander","Jawan"],
  ["Tere Vaaste","Varun Jain, Shadab Faridi, Altamash Faridi, Shashwat Singh","Zara Hatke Zara Bachke"],
  ["Phir Aur Kya Chahiye","Arijit Singh","Zara Hatke Zara Bachke"],
  ["Tum Kya Mile","Arijit Singh, Shreya Ghoshal","Rocky Aur Rani Kii Prem Kahaani"],
  ["What Jhumka?","Arijit Singh, Jonita Gandhi","Rocky Aur Rani Kii Prem Kahaani"],
  ["Ve Kamleya","Arijit Singh, Shreya Ghoshal, Shadab Faridi, Altamash Faridi","Rocky Aur Rani Kii Prem Kahaani"],
  ["Kudmayi","Shahid Mallya","Rocky Aur Rani Kii Prem Kahaani"],
  ["Heeriye","Jasleen Royal, Arijit Singh","Heeriye"],
  ["O Maahi","Arijit Singh","Dunki"],
  ["Lutt Putt Gaya","Arijit Singh","Dunki"],
  ["Satranga","Arijit Singh","Animal"],
  ["Pehle Bhi Main","Vishal Mishra","Animal"],
  ["Hua Main","Raghav Chaitanya","Animal"],
  ["Arjan Vailly","Bhupinder Babbal","Animal"],
  ["Saari Duniya Jalaa Denge","B Praak","Animal"],
  ["Papa Meri Jaan","Sonu Nigam","Animal"],
  ["Akhiyan Gulaab","Mitraz","Teri Baaton Mein Aisa Uljha Jiya"],
  ["Laal Peeli Akhiyaan","Romy, Tanishk Bagchi","Teri Baaton Mein Aisa Uljha Jiya"],
  ["Tum Se","Sachin-Jigar, Raghav Chaitanya, Varun Jain","Teri Baaton Mein Aisa Uljha Jiya"],
  ["Naina","Diljit Dosanjh, Badshah","Crew"],
  ["Choli Ke Peeche","Diljit Dosanjh, IP Singh, Alka Yagnik, Ila Arun","Crew"],
  ["Sajni","Arijit Singh","Laapataa Ladies"],
  ["Ishq Jaisa Kuch","Vishal-Shekhar, Shilpa Rao, Mellow D","Fighter"],
  ["Sher Khul Gaye","Vishal-Shekhar, Benny Dayal, Shilpa Rao","Fighter"],
  ["Heer Aasmani","Vishal-Shekhar, B Praak, Shilpa Rao","Fighter"],
  ["Tainu Khabar Nahi","Arijit Singh","Munjya"],
  ["Taras","Sachin-Jigar, Jasmine Sandlas","Munjya"],
  ["Aaj Ki Raat","Madhubanti Bagchi, Divya Kumar","Stree 2"],
  ["Aayi Nai","Pawan Singh, Simran Choudhary, Divya Kumar, Sachin-Jigar","Stree 2"],
  ["Khoobsurat","Vishal Mishra","Stree 2"],
  ["Tauba Tauba","Karan Aujla","Bad Newz"],
  ["Jaanam","Vishal Mishra","Bad Newz"],
  ["Mere Mehboob Mere Sanam","Udit Narayan, Alka Yagnik","Bad Newz"],
  ["Dekhha Tenu","Mohammad Faiz","Mr. and Mrs. Mahi"],
  ["Agar Ho Tum","Jubin Nautiyal","Mr. and Mrs. Mahi"],
  ["Tere Sang Ishq Hua","Arijit Singh, Neeti Mohan","Yodha"],
  ["Ishq Mitaye","Mohit Chauhan","Amar Singh Chamkila"]
];
const bollywoodTracks = bollywoodSongs.map(([title,artist,album],index)=>({
  id:`b${index+1}`,title,artist,album,duration:"Preview",isBollywood:true,cover:`cover-${String.fromCharCode(97+(index%8))}`,
  symbol:["♫","✦","☼","ϟ","✧","◌","☾","〰"][index%8],mood:["chill","focus","energy","dream"][index%4],
  audio:null,lyrics:[]
}));
tracks.push(...bollywoodTracks);
const albums = [
  {title:"Afterglow",artist:"Nova June",cover:"cover-a",symbol:"☾",trackIds:["t1"]},
  {title:"Soft Focus",artist:"The Sunday Club",cover:"cover-b",symbol:"☼",trackIds:["t2","t6"]},
  {title:"Motion Studies",artist:"Milo Park",cover:"cover-c",symbol:"〰",trackIds:["t3"]},
  {title:"Dream State",artist:"Luna Sol & friends",cover:"cover-d",symbol:"✧",trackIds:["t4","t7"]},
  {title:"Electric Bloom",artist:"Kairo",cover:"cover-h",symbol:"ϟ",trackIds:["t5","t8"]},
  {title:"Bollywood Picks",artist:"Various Artists",cover:"cover-e",symbol:"♫",trackIds:bollywoodTracks.map(track=>track.id)}
];
const starterPlaylists = [
  {id:"p1",name:"Late Night",description:"For the hours that belong to you.",trackIds:["t1","t4","t7"]},
  {id:"p2",name:"Main Character",description:"A little confidence in every beat.",trackIds:["t5","t8","t2"]}
];
const STORAGE_KEY = "nic-data-v1";
const defaultData = {favorites:[],recent:[],playlists:starterPlaylists,profile:null};
let data = loadData();
let currentTrack = null;
let currentIndex = -1;
let queue = [...tracks];
let shuffle = false;
let repeat = false;
let authMode = "login";
let libraryFilter = "all";
let toastTimer;
let playbackRequestId = 0;
let previewPending = false;

const audio = $("#audio");
audio.volume = 0.7;

function loadData(){
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.favorites) && Array.isArray(saved.playlists)) return {...defaultData,...saved};
  } catch(error) { console.warn("Saved data could not be read", error); }
  return structuredClone(defaultData);
}
function saveData(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
function escapeHTML(value){ return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char])); }
function getTrack(id){ return tracks.find(track => track.id === id); }
function getTracks(ids){ return ids.map(getTrack).filter(Boolean); }
function formatTime(seconds){ if(!Number.isFinite(seconds)) return "0:00"; const min=Math.floor(seconds/60); const sec=Math.floor(seconds%60).toString().padStart(2,"0"); return `${min}:${sec}`; }
function showToast(message){
  const toast=$("#toast"); toast.textContent=message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove("show"),2400);
}
function coverMarkup(track, extraClass=""){
  return `<div class="cover-art ${track.cover} ${extraClass}"><span class="cover-symbol">${track.symbol}</span></div>`;
}
function trackCard(track){
  const liked=data.favorites.includes(track.id);
  return `<article class="track-card">
    <div class="cover-art ${track.cover}"><span class="cover-symbol">${track.symbol}</span><button class="cover-play" data-play="${track.id}" aria-label="Play ${escapeHTML(track.title)}">▶</button></div>
    <h3 title="${escapeHTML(track.title)}">${escapeHTML(track.title)}</h3><p>${escapeHTML(track.artist)}${track.isBollywood?" · Preview":""}</p>
    <div class="track-bottom"><span class="duration-label">${track.duration}</span><button class="small-like ${liked?"liked":""}" data-like="${track.id}" aria-label="${liked?"Unlike":"Like"} ${escapeHTML(track.title)}">${liked?"♥":"♡"}</button></div>
  </article>`;
}
function albumCard(album){
  return `<button class="album-card" data-album="${escapeHTML(album.title)}"><span class="album-art ${album.cover}">${album.symbol}</span><strong>${escapeHTML(album.title)}</strong><small>${escapeHTML(album.artist)} · Album</small></button>`;
}
function renderTracksTable(list, emptyTitle="Nothing here yet", emptyText="Choose a track and it will appear here.", showLike=true){
  if(!list.length) return `<div class="empty-state"><div class="empty-icon">♫</div><h3>${escapeHTML(emptyTitle)}</h3><p>${escapeHTML(emptyText)}</p><button class="primary-btn" data-view="home">Explore music</button></div>`;
  return `<table class="track-list"><thead><tr><th>#</th><th>TITLE</th><th>ALBUM</th><th>TIME</th><th></th></tr></thead><tbody>${list.map((track,i)=>`<tr data-play="${track.id}"><td class="track-number">${String(i+1).padStart(2,"0")}</td><td><div class="list-track"><span class="list-cover ${track.cover}">${track.symbol}</span><span><strong>${escapeHTML(track.title)}</strong><small>${escapeHTML(track.artist)}${track.isBollywood?" · Preview":""}</small></span></div></td><td>${escapeHTML(track.album)}</td><td>${track.duration}</td><td>${showLike?`<button class="list-like ${data.favorites.includes(track.id)?"liked":""}" data-like="${track.id}" aria-label="Toggle favorite">${data.favorites.includes(track.id)?"♥":"♡"}</button>`:""}</td></tr>`).join("")}</tbody></table>`;
}
function renderHome(){
  $("#featuredTracks").innerHTML=tracks.slice(0,4).map(trackCard).join("");
  $("#bollywoodTracks").innerHTML=bollywoodTracks.map(trackCard).join("");
  $("#albumGrid").innerHTML=albums.map(albumCard).join("");
}
function renderPlaylistSidebar(){
  $("#playlistList").innerHTML=data.playlists.map(playlist=>`<button class="playlist-link" data-playlist="${playlist.id}" title="${escapeHTML(playlist.name)}">♫ &nbsp;${escapeHTML(playlist.name)}</button>`).join("");
}
function renderFavorites(){
  const liked=getTracks(data.favorites);
  $("#favoriteCount").textContent=`${liked.length} ${liked.length===1?"track":"tracks"}`;
  $("#favoritesContent").innerHTML=renderTracksTable(liked,"Your likes live here","Tap the heart on any track to save it to your collection.");
}
function renderRecent(){
  $("#recentContent").innerHTML=renderTracksTable(getTracks(data.recent),"Your listening history is empty","Play a track and it will show up here.");
}
function renderLibrary(){
  const root=$("#libraryContent");
  if(libraryFilter==="tracks"||libraryFilter==="all"){
    root.innerHTML=`<h2 class="result-title">All tracks</h2>${renderTracksTable(tracks,"No tracks available","Add music to the tracks array in script.js.")}`+
      (libraryFilter==="all"?`<h2 class="result-title">Albums</h2><div class="album-grid">${albums.map(albumCard).join("")}</div><h2 class="result-title">Your playlists</h2><div class="album-grid">${data.playlists.map(playlist=>`<button class="album-card" data-playlist="${playlist.id}"><span class="album-art cover-g">♫</span><strong>${escapeHTML(playlist.name)}</strong><small>${getTracks(playlist.trackIds).length} tracks · Playlist</small></button>`).join("")}</div>`:"");
  }else if(libraryFilter==="albums"){
    root.innerHTML=`<div class="album-grid">${albums.map(albumCard).join("")}</div>`;
  }else{
    root.innerHTML=data.playlists.length?`<div class="album-grid">${data.playlists.map(playlist=>`<button class="album-card" data-playlist="${playlist.id}"><span class="album-art cover-g">♫</span><strong>${escapeHTML(playlist.name)}</strong><small>${getTracks(playlist.trackIds).length} tracks · Playlist</small></button>`).join("")}</div>`:`<div class="empty-state"><h3>No playlists yet</h3><p>Create a playlist to start collecting tracks.</p><button class="primary-btn" id="emptyCreatePlaylist">＋ Create playlist</button></div>`;
  }
  const emptyCreate=$("#emptyCreatePlaylist"); if(emptyCreate) emptyCreate.addEventListener("click",createPlaylist);
}
function renderPlaylist(id){
  const playlist=data.playlists.find(item=>item.id===id);
  if(!playlist){showToast("Playlist not found");navigate("library");return;}
  $("#playlistTitle").textContent=playlist.name;
  $("#playlistDescription").textContent=playlist.description || "A collection for every version of you.";
  $("#playlistContent").innerHTML=`<div class="playlist-hero-actions"><button class="primary-btn" id="playPlaylistBtn">▶ Play playlist</button><button class="secondary-btn" id="addToPlaylistBtn">＋ Add tracks</button></div>${renderTracksTable(getTracks(playlist.trackIds),"This playlist is waiting for a soundtrack","Use “Add tracks” to add songs to this playlist.")}`;
  $("#playPlaylistBtn").addEventListener("click",()=>{const list=getTracks(playlist.trackIds);if(list.length){queue=list;playTrack(list[0].id);}else showToast("Add a few tracks first.");});
  $("#addToPlaylistBtn").addEventListener("click",()=>addTracksToPlaylist(id));
}
function renderSearch(query=""){
  const q=query.trim().toLowerCase();
  const results=tracks.filter(track=>!q||[track.title,track.artist,track.album,track.mood].some(value=>value.toLowerCase().includes(q)));
  const matchingAlbums=albums.filter(album=>!q||[album.title,album.artist].some(value=>value.toLowerCase().includes(q)));
  $("#searchResults").innerHTML=`<h2 class="result-title">${q?`Results for “${escapeHTML(query.trim())}”`:"Popular right now"}</h2>${renderTracksTable(results,"No matches found","Try a different song, artist, album, or mood.")}${matchingAlbums.length?`<h2 class="result-title">Albums</h2><div class="album-grid">${matchingAlbums.map(albumCard).join("")}</div>`:""}`;
}
function navigate(view){
  const map={home:"homeView",search:"searchView",library:"libraryView",favorites:"favoritesView",recent:"recentView",playlist:"playlistView"};
  $$(".view").forEach(section=>section.classList.remove("active-view"));
  const target=$("#"+(map[view]||"homeView")); target.classList.add("active-view");
  $$(".nav-item").forEach(button=>button.classList.toggle("active",button.dataset.view===view));
  if(view==="favorites") renderFavorites();
  if(view==="recent") renderRecent();
  if(view==="library") renderLibrary();
  if(view==="search") renderSearch($("#searchInput").value);
  if(view==="playlist"&&activePlaylistId) renderPlaylist(activePlaylistId);
  window.scrollTo({top:0,behavior:"smooth"});
}
let activePlaylistId=null;
function openPlaylist(id){activePlaylistId=id;navigate("playlist");renderPlaylist(id);}
function normalizeSongText(value){return value.toLowerCase().replace(/[^a-z0-9]/g,"");}
async function findLicensedPreview(track){
  const term=encodeURIComponent(`${track.title} ${track.artist} ${track.album}`);
  const response=await fetch(`https://itunes.apple.com/search?term=${term}&entity=song&country=IN&limit=25`);
  if(!response.ok)throw new Error(`Preview lookup failed with HTTP ${response.status}`);
  const results=await response.json();
  const title=normalizeSongText(track.title);
  const album=normalizeSongText(track.album);
  const matches=(results.results||[]).filter(result=>normalizeSongText(result.trackName||"").includes(title));
  matches.sort((a,b)=>{
    const score=result=>(normalizeSongText(result.trackName||"")===title?4:0)+(normalizeSongText(result.collectionName||"").includes(album)?2:0);
    return score(b)-score(a);
  });
  return matches[0]?{previewUrl:matches[0].previewUrl||null,trackUrl:matches[0].trackViewUrl||null}:null;
}
async function openBollywoodPlayer(track,requestId){
  previewPending=true;
  const playerModal=$("#bollywoodPlayerModal"),frame=$("#bollywoodPlayerFrame");
  frame.removeAttribute("src");
  playerModal.classList.remove("open");
  playerModal.setAttribute("aria-hidden","true");
  showToast("Opening the official song player…");
  try{
    const result=await findLicensedPreview(track);
    if(requestId!==playbackRequestId)return;
    previewPending=false;
    if(!result?.trackUrl){showToast("Couldn't find this song on Apple Music.");return;}
    $("#bollywoodPlayerTitle").textContent=track.title;
    $("#bollywoodAppleLink").href=result.trackUrl;
    const songLink=$("#songLink");
    songLink.href=result.trackUrl;
    songLink.hidden=false;
    songLink.style.display="inline";
    const embedUrl=new URL(result.trackUrl);
    embedUrl.hostname="embed.music.apple.com";
    frame.src=embedUrl.toString();
    playerModal.classList.add("open");
    playerModal.setAttribute("aria-hidden","false");
    showToast("Tap play in the Apple Music player.");
  }catch(error){
    if(requestId!==playbackRequestId)return;
    previewPending=false;
    console.error("Could not find the licensed song",error);
    showToast("Couldn't load the song. Check your connection and try again.");
  }
}
async function playTrack(id){
  const track=getTrack(id); if(!track)return;
  if(currentTrack?.id===id){
    if(track.isBollywood){
      const requestId=++playbackRequestId;
      await openBollywoodPlayer(track,requestId);
      return;
    }
    if(previewPending){showToast("Finding the licensed preview…");return;}
    if(audio.paused) audio.play().then(updatePlayButton).catch(()=>showToast("Audio couldn't start. Check your connection."));
    else {audio.pause();updatePlayButton();}
    return;
  }
  const requestId=++playbackRequestId;
  if(!track.isBollywood){
    const songLink=$("#songLink");
    songLink.hidden=true;
    songLink.style.display="none";
    songLink.removeAttribute("href");
    $("#bollywoodPlayerFrame").removeAttribute("src");
    $("#bollywoodPlayerModal").classList.remove("open");
    $("#bollywoodPlayerModal").setAttribute("aria-hidden","true");
  }
  currentTrack=track;currentIndex=queue.findIndex(item=>item.id===id);
  if(currentIndex<0){queue=[...tracks];currentIndex=queue.findIndex(item=>item.id===id);}
  audio.pause();
  if(track.isBollywood){
    audio.removeAttribute("src");
    audio.load();
    previewPending=true;
  }else{
    audio.src=track.audio;
    audio.load();
    previewPending=false;
  }
  const songLink=$("#songLink");
  songLink.hidden=true;
  songLink.style.display="none";
  songLink.removeAttribute("href");
  $("#nowTitle").textContent=track.title;$("#nowArtist").textContent=`${track.artist}${track.isBollywood?" · Apple Music player":""}`;
  $("#nowCover").className=`mini-cover ${track.cover}`;$("#nowCover").textContent=track.symbol;
  $("#nowLikeBtn").textContent=data.favorites.includes(id)?"♥":"♡";$("#nowLikeBtn").classList.toggle("liked",data.favorites.includes(id));
  $("#duration").textContent=track.isBollywood?"Preview":track.duration;$("#currentTime").textContent="0:00";$("#progress").value=0;
  data.recent=[id,...data.recent.filter(item=>item!==id)].slice(0,12);saveData();renderRecent();
  if(track.isBollywood){
    updatePlayButton();
    if($("#lyricsPanel").classList.contains("open"))renderLyrics();
    await openBollywoodPlayer(track,requestId);
    return;
  }
  audio.play().then(updatePlayButton).catch(()=>{updatePlayButton();showToast("Audio is loading. If playback fails, check your connection.");});
  if($("#lyricsPanel").classList.contains("open"))renderLyrics();
}
function updatePlayButton(){const playing=!audio.paused;$("#playBtn").textContent=playing?"Ⅱ":"▶";$("#playBtn").setAttribute("aria-label",playing?"Pause":"Play");}
function togglePlay(){if(!currentTrack){playTrack(tracks[0].id);return;}if(currentTrack.isBollywood){playTrack(currentTrack.id);return;}if(audio.paused){audio.play().then(updatePlayButton).catch(()=>showToast("Audio couldn't start. Check your connection."));}else{audio.pause();updatePlayButton();}}
function nextTrack(){
  if(!queue.length)return;
  if(shuffle){let next;do{next=Math.floor(Math.random()*queue.length);}while(queue.length>1&&next===currentIndex);currentIndex=next;}
  else currentIndex=(currentIndex+1)%queue.length;
  playTrack(queue[currentIndex].id);
}
function previousTrack(){if(audio.currentTime>3){audio.currentTime=0;return;}currentIndex=(currentIndex-1+queue.length)%queue.length;playTrack(queue[currentIndex].id);}
function toggleFavorite(id){
  if(data.favorites.includes(id))data.favorites=data.favorites.filter(item=>item!==id);
  else data.favorites.push(id);
  saveData();renderHome();renderFavorites();renderLibrary();
  if(currentTrack?.id===id){$("#nowLikeBtn").textContent=data.favorites.includes(id)?"♥":"♡";$("#nowLikeBtn").classList.toggle("liked",data.favorites.includes(id));}
  if($("#searchView").classList.contains("active-view"))renderSearch($("#searchInput").value);
  showToast(data.favorites.includes(id)?"Added to Liked Songs":"Removed from Liked Songs");
}
function renderLyrics(){
  if(!currentTrack){$("#lyricsTitle").textContent="Lyrics";$("#lyricsBody").innerHTML="<p>Select a track to view its lyrics.</p>";return;}
  $("#lyricsTitle").textContent=currentTrack.title;
  if(!currentTrack.lyrics.length){$("#lyricsBody").innerHTML="<p>Lyrics aren't available for this track.</p>";return;}
  $("#lyricsBody").innerHTML=currentTrack.lyrics.map((line,index)=>`<p class="lyric-line ${index===0?"current":""}">${escapeHTML(line)}</p>`).join("");
}
function toggleLyrics(open){
  const panel=$("#lyricsPanel");panel.classList.toggle("open",open??!panel.classList.contains("open"));panel.setAttribute("aria-hidden",String(!panel.classList.contains("open")));renderLyrics();
}
function createPlaylist(){
  const name=prompt("Give your playlist a name:");
  if(!name||!name.trim())return;
  const playlist={id:"p"+Date.now(),name:name.trim().slice(0,50),description:"Your personal mix.",trackIds:[]};
  data.playlists.push(playlist);saveData();renderPlaylistSidebar();renderLibrary();showToast("Playlist created");openPlaylist(playlist.id);
}
function addTracksToPlaylist(id){
  const playlist=data.playlists.find(item=>item.id===id);if(!playlist)return;
  const options=tracks.map((track,index)=>`${index+1}. ${track.title} — ${track.artist}`).join("\n");
  const answer=prompt(`Enter track numbers separated by commas to add to “${playlist.name}”:\n\n${options}`);
  if(!answer)return;
  const indexes=answer.split(",").map(value=>Number(value.trim())-1).filter(index=>Number.isInteger(index)&&index>=0&&index<tracks.length);
  indexes.forEach(index=>{const trackId=tracks[index].id;if(!playlist.trackIds.includes(trackId))playlist.trackIds.push(trackId);});
  saveData();renderPlaylistSidebar();renderLibrary();renderPlaylist(id);showToast("Playlist updated");
}
function showAuth(mode="login"){
  authMode=mode;$("#authTitle").textContent=mode==="login"?"Welcome back.":"Create your account.";
  $("#authSubtitle").textContent=mode==="login"?"Sign in to keep your music close.":"Set up your own little music space.";
  $("#authSubmit").textContent=mode==="login"?"Log in":"Create account";
  $("#authSwitchText").textContent=mode==="login"?"New to Nic?":"Already have an account?";
  $("#authSwitchBtn").textContent=mode==="login"?"Create account":"Log in";
  $("#nameField").classList.toggle("hidden",mode==="login");$("#authMessage").textContent="";$("#authMessage").classList.remove("error");
  $("#authModal").classList.add("open");$("#authModal").setAttribute("aria-hidden","false");
}
function closeAuth(){$("#authModal").classList.remove("open");$("#authModal").setAttribute("aria-hidden","true");}
function updateAccountUI(){
  const profile=data.profile;$("#openAuthBtn").textContent=profile?"Log out":"Log in";$("#accountAvatar").textContent=profile?(profile.name||profile.email).slice(0,1).toUpperCase():"N";
}
function handleAuth(event){
  event.preventDefault();
  const email=$("#authEmail").value.trim().toLowerCase(),password=$("#authPassword").value,name=$("#authName").value.trim();
  const message=$("#authMessage");message.classList.remove("error");
  if(password.length<6){message.textContent="Use at least 6 characters for this demo.";message.classList.add("error");return;}
  // Front-end demo only: never use this pattern for real authentication or store actual passwords.
  if(authMode==="signup"&&!name){message.textContent="Please enter a display name.";message.classList.add("error");return;}
  data.profile={email,name:authMode==="signup"?name:(data.profile?.name||email.split("@")[0])};saveData();updateAccountUI();closeAuth();showToast(authMode==="signup"?"Demo account created":"You're signed in on this device");
}
function setSearch(value){$("#searchInput").value=value;$("#largeSearchInput").value=value;navigate("search");renderSearch(value);}
function initEvents(){
  document.addEventListener("click",event=>{
    const viewButton=event.target.closest("[data-view]");
    if(viewButton){navigate(viewButton.dataset.view);return;}
    const playButton=event.target.closest("[data-play]");
    if(playButton){event.stopPropagation();const id=playButton.dataset.play;const track=getTrack(id);queue=track?.isBollywood?[...bollywoodTracks]:[...tracks];playTrack(id);return;}
    const likeButton=event.target.closest("[data-like]");
    if(likeButton){event.stopPropagation();toggleFavorite(likeButton.dataset.like);return;}
    const playlistButton=event.target.closest("[data-playlist]");
    if(playlistButton){openPlaylist(playlistButton.dataset.playlist);return;}
    const albumButton=event.target.closest("[data-album]");
    if(albumButton){const album=albums.find(item=>item.title===albumButton.dataset.album);if(album){queue=getTracks(album.trackIds);if(queue.length)playTrack(queue[0].id);showToast(`Playing ${album.title}`);}return;}
    const moodButton=event.target.closest("[data-mood]");
    if(moodButton){const mood=moodButton.dataset.mood;const list=tracks.filter(track=>track.mood===mood);if(list.length){queue=list;playTrack(list[0].id);showToast(`Your ${mood} mix is playing`);}return;}
  });
  $("#playBtn").addEventListener("click",togglePlay);$("#heroPlayBtn").addEventListener("click",()=>{queue=[...tracks];playTrack(currentTrack?.id||tracks[0].id);});
  $("#nextBtn").addEventListener("click",nextTrack);$("#prevBtn").addEventListener("click",previousTrack);
  $("#shuffleBtn").addEventListener("click",()=>{shuffle=!shuffle;$("#shuffleBtn").classList.toggle("active",shuffle);showToast(shuffle?"Shuffle on":"Shuffle off");});
  $("#repeatBtn").addEventListener("click",()=>{repeat=!repeat;$("#repeatBtn").classList.toggle("active",repeat);showToast(repeat?"Repeat current track on":"Repeat off");});
  $("#nowLikeBtn").addEventListener("click",()=>{if(currentTrack)toggleFavorite(currentTrack.id);});
  $("#progress").addEventListener("input",event=>{if(Number.isFinite(audio.duration))audio.currentTime=(Number(event.target.value)/100)*audio.duration;});
  audio.addEventListener("timeupdate",()=>{if(Number.isFinite(audio.duration)){$("#progress").value=(audio.currentTime/audio.duration)*100;$("#currentTime").textContent=formatTime(audio.currentTime);$("#duration").textContent=formatTime(audio.duration);}});
  audio.addEventListener("loadedmetadata",()=>{$("#duration").textContent=formatTime(audio.duration);});
  audio.addEventListener("play",updatePlayButton);audio.addEventListener("pause",updatePlayButton);
  audio.addEventListener("ended",()=>{if(repeat&&currentTrack){audio.currentTime=0;audio.play();}else nextTrack();});
  audio.addEventListener("error",()=>{if(currentTrack)showToast(currentTrack.isBollywood?"The preview couldn't play here. Open the full song on Apple Music.":"This sample audio is unavailable. Try another track.");updatePlayButton();});
  $("#volume").addEventListener("input",event=>audio.volume=Number(event.target.value));
  $("#lyricsBtn").addEventListener("click",()=>toggleLyrics());$("#closeLyricsBtn").addEventListener("click",()=>toggleLyrics(false));
  $("#closeBollywoodPlayer").addEventListener("click",()=>{$("#bollywoodPlayerFrame").removeAttribute("src");$("#bollywoodPlayerModal").classList.remove("open");$("#bollywoodPlayerModal").setAttribute("aria-hidden","true");});
  $("#bollywoodPlayerModal").addEventListener("click",event=>{if(event.target===$("#bollywoodPlayerModal"))$("#closeBollywoodPlayer").click();});
  $("#searchInput").addEventListener("input",event=>{if(event.target.value.trim()||$("#searchView").classList.contains("active-view")){navigate("search");renderSearch(event.target.value);$("#largeSearchInput").value=event.target.value;}});
  $("#largeSearchInput").addEventListener("input",event=>{renderSearch(event.target.value);$("#searchInput").value=event.target.value;});
  $("#searchBox").addEventListener("click",()=>{if(!$("#searchView").classList.contains("active-view"))navigate("search");});
  $$(".filter-tab").forEach(button=>button.addEventListener("click",()=>{$$(".filter-tab").forEach(tab=>tab.classList.toggle("active",tab===button));libraryFilter=button.dataset.filter;renderLibrary();}));
  $("#createPlaylistBtn").addEventListener("click",createPlaylist);
  $("#openAuthBtn").addEventListener("click",()=>{if(data.profile){data.profile=null;saveData();updateAccountUI();showToast("Logged out of demo account");}else showAuth("login");});
  $("#accountAvatar").addEventListener("click",()=>data.profile?showToast(`Signed in as ${data.profile.email}`):showAuth("login"));
  $("#authSwitchBtn").addEventListener("click",()=>showAuth(authMode==="login"?"signup":"login"));
  $("#authForm").addEventListener("submit",handleAuth);
  $$("[data-close-modal]").forEach(button=>button.addEventListener("click",closeAuth));
  $("#authModal").addEventListener("click",event=>{if(event.target===$("#authModal"))closeAuth();});
  $("#premiumBtn").addEventListener("click",()=>showToast("Premium is a demo button for this portfolio project."));
  $("#queueBtn").addEventListener("click",()=>showToast(`Up next: ${queue[(currentIndex+1+queue.length)%queue.length]?.title||"No tracks"}`));
  $("#backBtn").addEventListener("click",()=>navigate("home"));$("#forwardBtn").addEventListener("click",()=>navigate("library"));
  document.addEventListener("keydown",event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();navigate("search");$("#searchInput").focus();}if(event.key==="Escape"){closeAuth();toggleLyrics(false);$("#closeBollywoodPlayer").click();}});
}
function init(){
  renderHome();renderPlaylistSidebar();renderFavorites();renderRecent();renderLibrary();updateAccountUI();initEvents();
  // Keep the browser's default saved volume in sync with the control.
  $("#volume").value=audio.volume;
}
init();
