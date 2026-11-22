import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Base Matte Black Canvas */}
      <div className="absolute inset-0 bg-[#0B0C0E]" />

      {/* Subtle Warm Orange Ambient Lighting */}
      <div className="absolute -top-40 right-1/4 w-[650px] h-[650px] bg-[radial-gradient(circle,_rgba(242,140,40,0.045)_0%,_rgba(11,12,14,0)_70%)] blur-3xl opacity-60 animate-ambient-breathe" />
      <div className="absolute top-1/2 -left-40 w-[550px] h-[550px] bg-[radial-gradient(circle,_rgba(242,140,40,0.03)_0%,_rgba(11,12,14,0)_70%)] blur-3xl opacity-50 animate-ambient-breathe [animation-delay:5s]" />

      {/* Quiet, Low-Opacity Topographic Contour Lines (No Fake Labels) */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1200"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="contourOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F28C28" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#F28C28" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#292929" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Organic Contour Lines */}
        <path
          d="M1000,-100 C1150,80 1280,120 1450,110 C1550,105 1620,180 1700,240"
          stroke="#292929"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M950,-120 C1120,120 1250,170 1420,160 C1540,150 1600,260 1720,320"
          stroke="#292929"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M900,-140 C1090,160 1220,220 1390,210 C1510,200 1570,320 1700,400"
          stroke="url(#contourOrange)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M850,-150 C1050,200 1190,270 1360,260 C1480,250 1540,380 1680,480"
          stroke="#292929"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M800,-160 C1010,240 1150,320 1320,310 C1440,300 1500,440 1640,550"
          stroke="#292929"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M750,-170 C970,280 1110,370 1280,360 C1400,350 1460,500 1600,620"
          stroke="#292929"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M700,-180 C930,320 1070,420 1240,410 C1360,400 1420,560 1560,690"
          stroke="url(#contourOrange)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* Center Curves */}
        <path
          d="M200,300 C450,220 700,400 950,380 C1200,360 1350,520 1500,580"
          stroke="#292929"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M150,360 C420,280 670,460 920,440 C1170,420 1320,580 1480,650"
          stroke="#292929"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M100,420 C390,340 640,520 890,500 C1140,480 1280,640 1450,720"
          stroke="url(#contourOrange)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M50,480 C360,400 610,580 860,560 C1110,540 1250,700 1420,790"
          stroke="#292929"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0,540 C330,460 580,640 830,620 C1080,600 1220,760 1390,860"
          stroke="#292929"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* Lower Curves */}
        <path
          d="M-50,600 C200,640 380,780 650,760 C900,740 1100,920 1300,940"
          stroke="#292929"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-80,670 C170,710 350,850 620,830 C870,810 1060,980 1260,1010"
          stroke="#292929"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-110,740 C140,780 320,920 590,900 C840,880 1020,1050 1220,1080"
          stroke="url(#contourOrange)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-140,810 C110,850 290,990 560,970 C810,950 980,1120 1180,1150"
          stroke="#292929"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* Closed Natural Contours */}
        <ellipse cx="1380" cy="220" rx="90" ry="45" transform="rotate(-15 1380 220)" stroke="#292929" strokeWidth="1" />
        <ellipse cx="1380" cy="220" rx="55" ry="28" transform="rotate(-15 1380 220)" stroke="url(#contourOrange)" strokeWidth="1" />
        <ellipse cx="280" cy="880" rx="110" ry="55" transform="rotate(25 280 880)" stroke="#292929" strokeWidth="1" />
      </svg>

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_#0B0C0E_100%)] opacity-80" />
    </div>
  );
};

export default Background;
