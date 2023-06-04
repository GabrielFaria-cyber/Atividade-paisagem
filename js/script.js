const canvas=document.getElementById('canvas');
const CTX=canvas.getContext('2d');

CTX.fillStyle='#0c003b';
CTX.fillRect(0, 465, 1000, 165);

CTX.shadowColor = '#fffbb0'
CTX.shadowBlur = 200;
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

//Árvore 4
CTX.strokeStyle='#0c003b';
CTX.beginPath();
CTX.moveTo(867, 405);
CTX.lineTo(867, 465);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(867, 400, 40, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(867, 350, 33, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(867, 310, 28, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

//Árvore 5
CTX.strokeStyle='#0c003b';
CTX.beginPath();
CTX.moveTo(800, 405);
CTX.lineTo(800, 465);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(800, 415, 38, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(800, 365, 31, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(800, 325, 26, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

//Árvore 6
CTX.strokeStyle='#0c003b';
CTX.beginPath();
CTX.moveTo(200, 405);
CTX.lineTo(200, 465);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(200, 400, 40, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(200, 350, 33, 0, Math.PI * 2);
CTX.fillStyle='#6B8E23';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#6B8E23';
CTX.beginPath();
CTX.arc(200, 310, 28, 0, Math.PI * 2);
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

//Pedrinhas
CTX.strokeStyle='#463e6f';
CTX.beginPath();
CTX.arc(70, 535, 10, 0, Math.PI, true);
CTX.fillStyle='#463e6f';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#463e6f';
CTX.beginPath();
CTX.arc(125, 535, 10, 0, Math.PI, true);
CTX.fillStyle='#463e6f';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#463e6f';
CTX.beginPath();
CTX.arc(250, 560, 10, 0, Math.PI, true);
CTX.fillStyle='#463e6f';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#463e6f';
CTX.beginPath();
CTX.arc(275, 560, 10, 0, Math.PI, true);
CTX.fillStyle='#463e6f';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#463e6f';
CTX.beginPath();
CTX.arc(473, 590, 10, 0, Math.PI, true);
CTX.fillStyle='#463e6f';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#463e6f';
CTX.beginPath();
CTX.arc(550, 564, 10, 0, Math.PI, true);
CTX.fillStyle='#463e6f';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#463e6f';
CTX.beginPath();
CTX.arc(575, 564, 10, 0, Math.PI, true);
CTX.fillStyle='#463e6f';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#463e6f';
CTX.beginPath();
CTX.arc(800, 525, 10, 0, Math.PI, true);
CTX.fillStyle='#463e6f';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#463e6f';
CTX.beginPath();
CTX.arc(875, 525, 10, 0, Math.PI, true);
CTX.fillStyle='#463e6f';
CTX.fill();
CTX.stroke();

//Estrelas

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(200, 100, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(52, 30, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(200, 200, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(35, 250, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(50, 275, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(475, 300, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(525, 350, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(490, 200, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(300, 30, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(450, 35, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(700, 250, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(875, 150, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(915, 85, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(825, 45, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(700, 60, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(300, 250, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(950, 250, 1, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

//3 Marias
CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(600, 50, 2, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(624, 70, 2, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='#797BB9';
CTX.beginPath();
CTX.arc(647, 90, 2, 0, Math.PI * 2);
CTX.fillStyle='#797BB9';
CTX.fill();
CTX.stroke();




