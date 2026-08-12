const subjects=[
['💻','C++ Programming','28 Notes'],['☕','Java Programming','35 Notes'],['🗄️','DBMS','42 Notes'],
['⚙️','Software Engineering','30 Notes'],['🔗','Data Structure','25 Notes'],['🖥️','Computer Organization','18 Notes'],
['🤖','Artificial Intelligence','22 Notes'],['√x','Discrete Mathematics','15 Notes']];
const notes=[
['C++ Basics and Structure','C++ Programming','💻'],['Java OOPs Concepts','Java Programming','☕'],
['DBMS ER Model Explained','DBMS','🗄️'],['Waterfall Model in SWE','Software Engineering','⚙️'],['Queue Data Structure','Data Structure','🔗']];
const colors=['#6346e8','#1689e8','#15a55e','#ff9c1c','#ec3d85','#10aeba','#8d45d9','#ef493f'];
document.getElementById('subjectGrid').innerHTML=subjects.map((s,i)=>`<div class="subject" style="background:${colors[i]}" onclick="filter('${s[1]}')"><div class="icon">${s[0]}</div><b>${s[1]}</b><small>${s[2]}</small></div>`).join('');
function render(filterText=''){let q=(document.getElementById('search').value+' '+filterText).toLowerCase();let a=notes.filter(n=>!q||n.join(' ').toLowerCase().includes(q));document.getElementById('count').textContent=`Showing ${a.length} note${a.length!==1?'s':''}`;document.getElementById('noteGrid').innerHTML=a.map(n=>`<article class="note"><span class="pdf">PDF</span><div class="noteIcon">${n[2]}</div><h3>${n[0]}</h3><p>${n[1]}</p><a href="#" onclick="alert('Your PDF will be connected here after publishing.');return false">⇩ View / Download</a></article>`).join('')||'<p>No notes found.</p>'}
function filter(s){document.getElementById('search').value=s;document.getElementById('notes').scrollIntoView();render()}
function clearFilter(){document.getElementById('search').value='';render()}
function admin(){alert('Admin upload/login will be connected when we add the online database and hosting.')}
render();
