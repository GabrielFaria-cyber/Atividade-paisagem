const canvas=document.getElementById('canvas');
const CTX=canvas.getContext('2d');

CTX.fillStyle='#0c003b';
CTX.fillRect(0, 465, 1000, 165);

//Lua
CTX.strokeStyle='#F5F5F5';
CTX.beginPath();
CTX.arc(485, 100, 50, 0, Math.PI * 2);
CTX.fillStyle='#F8F8FF';
CTX.fill();
CTX.stroke();

//Árvore 1
CTX.strokeStyle='#0c003b';
CTX.lineWidth=3;
CTX.beginPath();
CTX.moveTo(50, 350);
CTX.lineTo(50, 465);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(50, 365, 50, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

//Árvore 2
CTX.strokeStyle='#0c003b';
CTX.beginPath();
CTX.moveTo(125, 405);
CTX.lineTo(125, 465);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(125, 365, 50, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

//Árvore 3
CTX.strokeStyle='#0c003b';
CTX.beginPath();
CTX.moveTo(950, 405);
CTX.lineTo(950, 465);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(950, 365, 50, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

//Nuvem
CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.moveTo(360, 100);
CTX.lineTo(260, 100);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(310, 100, 20, 0,  Math.PI, true);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(345, 100, 15, 0,  Math.PI, true);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(275, 100, 15, 0,  Math.PI, true);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

//Nuvem2
CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.moveTo(525, 130);
CTX.lineTo(625, 130);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(540, 130, 15, 0,  Math.PI, true);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(575, 130, 20, 0,  Math.PI, true);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(610, 130, 15, 0,  Math.PI, true);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

//Nuvem3
CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.moveTo(900, 90);
CTX.lineTo(775, 90);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(885, 90, 15, 0,  Math.PI, true);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(848, 90, 20, 0,  Math.PI, true);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(801, 90, 25, 0,  Math.PI, true);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

//Nuvem4
CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.moveTo(50, 130);
CTX.lineTo(150, 130);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(80, 130, 30, 0,  Math.PI, true);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(128, 130, 20, 0,  Math.PI, true);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();



