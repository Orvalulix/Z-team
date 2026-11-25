
const STATIONS={"ARC-L1":["ARC-L1 · Wide Forest","S"],"ARC-L2":["ARC-L2 · Lively Pathway","S"],"ARC-L4":["ARC-L4 · Faint Glen","S"],"CRU-L1":["CRU-L1 · Ambitious Dream","S"],"HUR-L1":["HUR-L1 · Green Glade","S"],"HUR-L2":["HUR-L2 · Faithful Dream","S"],"MIC-L1":["MIC-L1 · Shallow Frontier","S"],"MIC-L2":["MIC-L2 · Long Forest","S"],"MIC-L5":["MIC-L5 · Modern Icarus","S"],"NG-S":["Nyx Gateway · Stanton","S"],"PG-S":["Pyro Gateway · Stanton","S"],"TG-S":["Terra Gateway · Stanton","S"],"LEV-N":["Levski · Nyx","N"],"NG-P":["Nyx Gateway · Pyro","P"],"SG-P":["Stanton Gateway · Pyro","P"],"RUIN-P":["Ruin Station · Pyro","P"],"CHECK-P":["Checkmate Station · Pyro","P"],"ORBIT-P":["Orbituary · Pyro","P"],"PG-N":["Pyro Gateway · Nyx","N"],"SG-N":["Stanton Gateway · Nyx","N"]};
const INTEL={"quantainium":{"locations":{"S":[{"name":"Aaron Halo","index":2.0},{"name":"Aberdeen","index":2.0},{"name":"Arial","index":2.0},{"name":"Calliope","index":2.0},{"name":"Cellin","index":2.0},{"name":"Clio","index":2.0},{"name":"Daymar","index":2.0},{"name":"Euterpe","index":2.0},{"name":"Hurston","index":2.0},{"name":"Ita","index":2.0},{"name":"Lyria","index":2.0},{"name":"Magda","index":2.0},{"name":"Wala","index":2.0},{"name":"Yela","index":2.0},{"name":"microTech","index":2.0}]},"bonuses":{"LEV-N":5,"ARC-L1":3,"ARC-L2":3,"NG-S":3,"HUR-L1":2,"HUR-L2":2,"RUIN-P":2,"CHECK-P":2,"ORBIT-P":2,"NG-P":2,"SG-P":2,"MIC-L2":1,"PG-N":2,"SG-N":2},"associations":["Béryl"],"risk":["Extrême","Extrême"],"source":"https://scminer.rocks/data/mineral-directory/quantainium"},"stileron":{"locations":{"P":[{"name":"Akiro Cluster","index":2.0},{"name":"Pyro I","index":2.0},{"name":"Pyro II (Monox)","index":2.0},{"name":"Pyro III (Bloom)","index":2.0},{"name":"Pyro IV","index":2.0},{"name":"Pyro VI (Terminus)","index":2.0}]},"bonuses":{},"associations":["Taranite"],"risk":["Élevée","Élevée"],"source":"https://scminer.rocks/data/mineral-directory/stileron"},"savrilium":{"locations":{"N":[{"name":"Breaker Stations — grandes géodes","index":100.0},{"name":"Glaciem Ring","index":2.0},{"name":"Keeger Belt","index":2.0}]},"bonuses":{"MIC-L5":6,"LEV-N":1},"associations":[],"risk":["Extrême","Extrême"],"source":"https://scminer.rocks/data/mineral-directory/savrilium"},"ouratite":{"locations":{"S":[{"name":"Aberdeen","index":10.0},{"name":"Arial","index":10.0},{"name":"Hurston","index":10.0},{"name":"Ceinture d’astéroïdes de Yela","index":10.0}]},"bonuses":{},"associations":["Agricium"],"risk":["Élevée","Élevée"],"source":"https://scminer.rocks/data/mineral-directory/ouratite"},"riccite":{"locations":{"P":[{"name":"Akiro Cluster","index":10.0},{"name":"Pyro III (Bloom)","index":10.0},{"name":"Pyro V-a (Ignis)","index":10.0},{"name":"Pyro V-b (Vatra)","index":10.0},{"name":"Pyro V-c (Adir)","index":10.0},{"name":"Pyro VI (Terminus)","index":10.0}]},"bonuses":{},"associations":["Laranite"],"risk":["Élevée","Extrême"],"source":"https://scminer.rocks/data/mineral-directory/riccite"},"lindinium":{"locations":{"N":[{"name":"Glaciem Ring","index":10.0},{"name":"Keeger Belt","index":10.0}]},"bonuses":{"MIC-L5":7,"LEV-N":4},"associations":["Tungstène"],"risk":["Extrême","Extrême"],"source":"https://scminer.rocks/data/mineral-directory/lindinium"},"beryl":{"locations":{"S":[{"name":"Aaron Halo","index":18.0},{"name":"Wala","index":18.0},{"name":"ARC-L3","index":5.7},{"name":"CRU-L5","index":5.7},{"name":"MIC-L4","index":5.7},{"name":"Aberdeen","index":2.0},{"name":"Arial","index":2.0},{"name":"Calliope","index":2.0},{"name":"Cellin","index":2.0},{"name":"Clio","index":2.0},{"name":"Daymar","index":2.0},{"name":"Euterpe","index":2.0},{"name":"Hurston","index":2.0},{"name":"Ita","index":2.0},{"name":"Lyria","index":2.0},{"name":"Magda","index":2.0},{"name":"Yela","index":2.0},{"name":"microTech","index":2.0}]},"bonuses":{"LEV-N":8,"ARC-L1":7,"CRU-L1":7,"MIC-L5":7,"PG-S":7,"NG-S":7,"HUR-L2":1,"ARC-L4":-4,"MIC-L1":-6,"TG-S":-6,"MIC-L2":-8},"associations":[],"risk":["Moyenne","Élevée"],"source":"https://scminer.rocks/data/mineral-directory/beryl"},"taranite":{"locations":{"S":[{"name":"Cellin","index":18.0},{"name":"Clio","index":18.0},{"name":"Euterpe","index":18.0},{"name":"Yela","index":18.0},{"name":"HUR-L2","index":12.5},{"name":"ARC-L1","index":12.5},{"name":"ARC-L2","index":12.5},{"name":"ARC-L4","index":12.5}],"P":[{"name":"Akiro Cluster","index":2.0},{"name":"Pyro I","index":2.0},{"name":"Pyro II (Monox)","index":2.0},{"name":"Pyro III (Bloom)","index":2.0},{"name":"Pyro IV","index":2.0},{"name":"Pyro VI (Terminus)","index":2.0}]},"bonuses":{"LEV-N":8,"ARC-L4":5,"HUR-L2":-3,"ARC-L1":-6,"NG-S":-6},"associations":[],"risk":["Élevée","Élevée"],"source":"https://scminer.rocks/data/mineral-directory/taranite"},"borase":{"locations":{"S":[{"name":"HUR-L1","index":8.3},{"name":"HUR-L4","index":8.3}],"P":[{"name":"Pyro IV","index":18.0},{"name":"Pyro III (Bloom)","index":18.0},{"name":"Pyro V-a (Ignis)","index":18.0},{"name":"Pyro V-b (Vatra)","index":18.0},{"name":"Pyro V-c (Adir)","index":18.0},{"name":"Pyro V-f (Vuur)","index":18.0},{"name":"Pyro VI (Terminus)","index":18.0},{"name":"Pyro V-d (Fairo)","index":9.0},{"name":"Pyro V-e (Fuego)","index":9.0}],"N":[{"name":"Glaciem Ring","index":18.0},{"name":"Keeger Belt","index":18.0}]},"bonuses":{"MIC-L5":9,"LEV-N":8,"ARC-L2":2,"HUR-L1":1,"RUIN-P":1,"CHECK-P":1,"ORBIT-P":1,"NG-P":1,"SG-P":1,"MIC-L2":-3,"PG-N":1,"SG-N":1},"associations":["Bexalite","Or"],"risk":["Très faible","Moyenne"],"source":"https://scminer.rocks/data/mineral-directory/borase"},"gold":{"locations":{"S":[{"name":"ARC-L5","index":10.2},{"name":"CRU-L4","index":10.2},{"name":"MIC-L3","index":10.2}],"P":[{"name":"Pyro IV","index":18.0},{"name":"Pyro III (Bloom)","index":18.0},{"name":"Pyro V-a (Ignis)","index":18.0},{"name":"Pyro V-b (Vatra)","index":18.0},{"name":"Pyro V-c (Adir)","index":18.0},{"name":"Pyro V-f (Vuur)","index":18.0},{"name":"Pyro VI (Terminus)","index":18.0},{"name":"Pyro V-d (Fairo)","index":9.0},{"name":"Pyro V-e (Fuego)","index":9.0}],"N":[{"name":"Glaciem Ring","index":18.0},{"name":"Keeger Belt","index":18.0}]},"bonuses":{"MIC-L2":9,"ARC-L2":7,"LEV-N":5,"HUR-L2":1,"MIC-L1":1,"TG-S":1,"HUR-L1":-3,"RUIN-P":-3,"CHECK-P":-3,"ORBIT-P":-3,"NG-P":-3,"SG-P":-3,"ARC-L4":-4,"CRU-L1":-6,"PG-S":-6,"PG-N":-3,"SG-N":-3},"associations":["Bexalite","Borase"],"risk":["Élevée","Élevée"],"source":"https://scminer.rocks/data/mineral-directory/gold"},"bexalite":{"locations":{"S":[{"name":"CRU-L1","index":9.5},{"name":"CRU-L2","index":9.5},{"name":"HUR-L3","index":9.5}],"P":[{"name":"Pyro IV","index":18.0},{"name":"Pyro III (Bloom)","index":18.0},{"name":"Pyro V-a (Ignis)","index":18.0},{"name":"Pyro V-b (Vatra)","index":18.0},{"name":"Pyro V-c (Adir)","index":18.0},{"name":"Pyro V-f (Vuur)","index":18.0},{"name":"Pyro VI (Terminus)","index":18.0},{"name":"Pyro V-d (Fairo)","index":9.0},{"name":"Pyro V-e (Fuego)","index":9.0}],"N":[{"name":"Glaciem Ring","index":18.0},{"name":"Keeger Belt","index":18.0}]},"bonuses":{"MIC-L5":12,"MIC-L2":9,"LEV-N":8,"ARC-L2":2,"HUR-L1":-2,"RUIN-P":-2,"CHECK-P":-2,"ORBIT-P":-2,"NG-P":-2,"SG-P":-2,"CRU-L1":-6,"PG-S":-6,"PG-N":-2,"SG-N":-2},"associations":["Or","Borase"],"risk":["Élevée","Élevée"],"source":"https://scminer.rocks/data/mineral-directory/bexalite"},"laranite":{"locations":{"S":[{"name":"Wala","index":28.5},{"name":"Lyria","index":28.5},{"name":"HUR-L1","index":13.2},{"name":"HUR-L4","index":13.2}],"P":[{"name":"Pyro IV","index":28.5},{"name":"Pyro V-c (Adir)","index":28.5},{"name":"Pyro V-d (Fairo)","index":28.5},{"name":"Akiro Cluster","index":10.0},{"name":"Pyro III (Bloom)","index":10.0},{"name":"Pyro V-a (Ignis)","index":10.0},{"name":"Pyro V-b (Vatra)","index":10.0},{"name":"Pyro VI (Terminus)","index":10.0}]},"bonuses":{"LEV-N":7,"HUR-L1":2,"MIC-L1":2,"TG-S":2,"RUIN-P":2,"CHECK-P":2,"ORBIT-P":2,"NG-P":2,"SG-P":2,"HUR-L2":-1,"MIC-L2":-1,"ARC-L1":-2,"NG-S":-2,"CRU-L1":-8,"PG-S":-8,"PG-N":2,"SG-N":2},"associations":["Tungstène"],"risk":["Moyenne","Élevée"],"source":"https://scminer.rocks/data/mineral-directory/laranite"},"aslarite":{"locations":{"S":[{"name":"Aberdeen","index":28.5},{"name":"Cellin","index":28.5},{"name":"Daymar","index":28.5},{"name":"Ita","index":28.5},{"name":"Yela","index":28.5},{"name":"Ceinture d’astéroïdes de Yela","index":28.5},{"name":"ARC-L5","index":16.1},{"name":"CRU-L4","index":16.1},{"name":"MIC-L3","index":16.1},{"name":"Aaron Halo","index":14.2},{"name":"Magda","index":14.2}],"P":[{"name":"Pyro V-e (Fuego)","index":28.5},{"name":"Pyro V-f (Vuur)","index":14.2},{"name":"Pyro VI (Terminus)","index":14.2}]},"bonuses":{},"associations":["Silicium","Quartz"],"risk":["Élevée","Élevée"],"source":"https://scminer.rocks/data/mineral-directory/aslarite"},"titanium":{"locations":{"S":[{"name":"Aberdeen","index":28.5},{"name":"Cellin","index":28.5},{"name":"Daymar","index":28.5},{"name":"Ita","index":28.5},{"name":"Yela","index":28.5},{"name":"Ceinture d’astéroïdes de Yela","index":28.5},{"name":"CRU-L1","index":15.1},{"name":"CRU-L2","index":15.1},{"name":"HUR-L3","index":15.1},{"name":"Aaron Halo","index":14.2},{"name":"Magda","index":14.2}],"P":[{"name":"Pyro V-e (Fuego)","index":28.5},{"name":"Pyro V-f (Vuur)","index":14.2},{"name":"Pyro VI (Terminus)","index":14.2}]},"bonuses":{"MIC-L5":13,"LEV-N":8,"MIC-L2":6,"ARC-L1":5,"NG-S":5,"ARC-L2":3,"CRU-L1":-1,"PG-S":-1,"ARC-L4":-2},"associations":["Agricium","Aslarite"],"risk":["Très faible","Moyenne"],"source":"https://scminer.rocks/data/mineral-directory/titanium"},"tungsten":{"locations":{"S":[{"name":"Wala","index":28.5},{"name":"Lyria","index":28.5},{"name":"HUR-L2","index":19.8},{"name":"ARC-L1","index":19.8},{"name":"ARC-L2","index":19.8},{"name":"ARC-L4","index":19.8}],"P":[{"name":"Pyro IV","index":28.5},{"name":"Pyro V-c (Adir)","index":28.5},{"name":"Pyro V-d (Fairo)","index":28.5}],"N":[{"name":"Glaciem Ring","index":10.0},{"name":"Keeger Belt","index":10.0}]},"bonuses":{"MIC-L2":9,"LEV-N":8,"HUR-L1":4,"RUIN-P":4,"CHECK-P":4,"ORBIT-P":4,"NG-P":4,"SG-P":4,"CRU-L1":2,"PG-S":2,"ARC-L4":-5,"ARC-L2":-6,"PG-N":4,"SG-N":4},"associations":["Laranite"],"risk":["Très faible","Faible"],"source":"https://scminer.rocks/data/mineral-directory/tungsten"},"agricium":{"locations":{"S":[{"name":"Aberdeen","index":28.5},{"name":"Cellin","index":28.5},{"name":"Daymar","index":28.5},{"name":"Ita","index":28.5},{"name":"Yela","index":28.5},{"name":"Ceinture d’astéroïdes de Yela","index":28.5},{"name":"Aaron Halo","index":14.2},{"name":"Magda","index":14.2},{"name":"Arial","index":10.0},{"name":"Hurston","index":10.0},{"name":"ARC-L3","index":9.0},{"name":"CRU-L5","index":9.0},{"name":"MIC-L4","index":9.0}],"P":[{"name":"Pyro V-e (Fuego)","index":28.5},{"name":"Pyro V-f (Vuur)","index":14.2},{"name":"Pyro VI (Terminus)","index":14.2}]},"bonuses":{"MIC-L1":8,"LEV-N":8,"TG-S":8,"HUR-L2":-2,"ARC-L4":-4,"HUR-L1":-8,"RUIN-P":-8,"CHECK-P":-8,"ORBIT-P":-8,"NG-P":-8,"SG-P":-8,"PG-N":-8,"SG-N":-8},"associations":["Aslarite","Titane"],"risk":["Moyenne","Élevée"],"source":"https://scminer.rocks/data/mineral-directory/agricium"},"torite":{"locations":{"S":[{"name":"HUR-L5","index":11.2},{"name":"CRU-L3","index":11.2},{"name":"MIC-L1","index":11.2},{"name":"MIC-L2","index":11.2},{"name":"MIC-L5","index":11.2}],"P":[{"name":"Akiro Cluster","index":28.5}],"N":[{"name":"Breaker Stations — grandes géodes","index":100.0},{"name":"Glaciem Ring","index":28.5},{"name":"Keeger Belt","index":28.5}]},"bonuses":{"MIC-L5":8,"LEV-N":1},"associations":[],"risk":["Élevée","Moyenne"],"source":"https://scminer.rocks/data/mineral-directory/torite"},"hephaestanite":{"locations":{"S":[{"name":"Daymar","index":34.8},{"name":"microTech","index":32.7},{"name":"Calliope","index":32.6},{"name":"Cellin","index":25.8},{"name":"Yela","index":25.8},{"name":"Arial","index":22.0},{"name":"HUR-L2","index":12.4},{"name":"ARC-L1","index":12.4},{"name":"ARC-L2","index":12.4},{"name":"ARC-L4","index":12.4},{"name":"Aaron Halo","index":10.3},{"name":"HUR-L5","index":9.4},{"name":"CRU-L3","index":9.4},{"name":"MIC-L1","index":9.4},{"name":"MIC-L2","index":9.4},{"name":"MIC-L5","index":9.4},{"name":"HUR-L1","index":8.2},{"name":"HUR-L4","index":8.2}],"P":[{"name":"Pyro V-a (Ignis)","index":36.0},{"name":"Pyro V-b (Vatra)","index":36.0},{"name":"Pyro III (Bloom)","index":35.0},{"name":"Pyro II (Monox)","index":32.7},{"name":"Pyro V-d (Fairo)","index":26.8},{"name":"Pyro V-f (Vuur)","index":26.8},{"name":"Pyro V-e (Fuego)","index":26.7},{"name":"Akiro Cluster","index":14.9}]},"bonuses":{"MIC-L5":8,"LEV-N":8,"CRU-L1":-2,"PG-S":-2,"ARC-L1":-4,"NG-S":-4,"ARC-L4":-5,"ARC-L2":-8},"associations":["Silicium","Quartz"],"risk":["Moyenne","Faible"],"source":"https://scminer.rocks/data/mineral-directory/hephaestanite"},"tin":{"locations":{"S":[{"name":"Hurston","index":44.0},{"name":"Clio","index":40.0},{"name":"Euterpe","index":40.0},{"name":"Ita","index":34.8},{"name":"Lyria","index":34.8},{"name":"Wala","index":25.8},{"name":"Arial","index":22.0},{"name":"Ceinture d’astéroïdes de Yela","index":20.5},{"name":"Aaron Halo","index":10.3}],"P":[{"name":"Pyro V-a (Ignis)","index":36.0},{"name":"Pyro I","index":32.6},{"name":"Pyro II (Monox)","index":32.6},{"name":"Pyro IV","index":25.7},{"name":"Pyro VI (Terminus)","index":20.8},{"name":"Akiro Cluster","index":14.9}]},"bonuses":{"LEV-N":9},"associations":["Cuivre"],"risk":["Très faible","Faible"],"source":"https://scminer.rocks/data/mineral-directory/tin"},"quartz":{"locations":{"S":[{"name":"Daymar","index":34.7},{"name":"microTech","index":32.7},{"name":"Calliope","index":32.6},{"name":"Cellin","index":25.7},{"name":"Yela","index":25.7},{"name":"Arial","index":22.0}],"P":[{"name":"Pyro III (Bloom)","index":35.0},{"name":"Pyro II (Monox)","index":32.7},{"name":"Pyro V-f (Vuur)","index":26.8},{"name":"Pyro V-e (Fuego)","index":26.7}]},"bonuses":{"ARC-L1":11,"NG-S":11,"LEV-N":8,"ARC-L4":-2,"MIC-L1":-3,"TG-S":-3,"MIC-L2":-5},"associations":["Hephaestanite","Silicium"],"risk":["Faible","Faible"],"source":"https://scminer.rocks/data/mineral-directory/quartz"},"corundum":{"locations":{"S":[{"name":"Hurston","index":44.0},{"name":"Magda","index":34.8},{"name":"Ita","index":34.7},{"name":"Aberdeen","index":29.8},{"name":"Arial","index":22.0},{"name":"HUR-L2","index":12.4},{"name":"ARC-L1","index":12.4},{"name":"ARC-L2","index":12.4},{"name":"ARC-L4","index":12.4},{"name":"Aaron Halo","index":10.3},{"name":"HUR-L5","index":9.4},{"name":"CRU-L3","index":9.4},{"name":"MIC-L1","index":9.4},{"name":"MIC-L2","index":9.4},{"name":"MIC-L5","index":9.4},{"name":"HUR-L1","index":8.2},{"name":"HUR-L4","index":8.2}],"N":[{"name":"Keeger Belt","index":20.8}]},"bonuses":{"LEV-N":8,"CRU-L1":7,"PG-S":7,"MIC-L2":6,"MIC-L1":2,"TG-S":2,"HUR-L2":1,"ARC-L2":-3,"ARC-L1":-4,"NG-S":-4,"HUR-L1":-5,"RUIN-P":-5,"CHECK-P":-5,"ORBIT-P":-5,"NG-P":-5,"SG-P":-5,"ARC-L4":-9,"PG-N":-5,"SG-N":-5},"associations":["Aluminium"],"risk":["Faible","Moyenne"],"source":"https://scminer.rocks/data/mineral-directory/corundum"},"copper":{"locations":{"S":[{"name":"Hurston","index":44.0},{"name":"Clio","index":40.0},{"name":"Euterpe","index":40.0},{"name":"Ita","index":34.8},{"name":"Lyria","index":34.8},{"name":"Wala","index":25.8},{"name":"Arial","index":22.0},{"name":"Ceinture d’astéroïdes de Yela","index":20.5},{"name":"Aaron Halo","index":10.3},{"name":"ARC-L5","index":10.0},{"name":"CRU-L4","index":10.0},{"name":"MIC-L3","index":10.0},{"name":"CRU-L1","index":9.4},{"name":"CRU-L2","index":9.4},{"name":"HUR-L3","index":9.4},{"name":"ARC-L3","index":5.6},{"name":"CRU-L5","index":5.6},{"name":"MIC-L4","index":5.6}],"P":[{"name":"Pyro V-a (Ignis)","index":36.0},{"name":"Pyro I","index":32.6},{"name":"Pyro II (Monox)","index":32.6},{"name":"Pyro IV","index":25.7},{"name":"Pyro VI (Terminus)","index":20.8},{"name":"Akiro Cluster","index":14.9}]},"bonuses":{"MIC-L5":9,"LEV-N":8,"ARC-L2":6,"MIC-L1":4,"TG-S":4,"MIC-L2":2,"HUR-L2":-3,"ARC-L4":-4,"HUR-L1":-5,"RUIN-P":-5,"CHECK-P":-5,"ORBIT-P":-5,"NG-P":-5,"SG-P":-5,"PG-N":-5,"SG-N":-5},"associations":["Étain"],"risk":["Faible","Faible"],"source":"https://scminer.rocks/data/mineral-directory/copper"},"silicon":{"locations":{"S":[{"name":"Daymar","index":34.8},{"name":"microTech","index":32.7},{"name":"Calliope","index":32.6},{"name":"Cellin","index":25.8},{"name":"Yela","index":25.8},{"name":"Arial","index":22.0},{"name":"Aaron Halo","index":10.3}],"P":[{"name":"Pyro V-a (Ignis)","index":36.0},{"name":"Pyro V-b (Vatra)","index":36.0},{"name":"Pyro III (Bloom)","index":35.0},{"name":"Pyro II (Monox)","index":32.7},{"name":"Pyro V-d (Fairo)","index":26.8},{"name":"Pyro V-f (Vuur)","index":26.8},{"name":"Pyro V-e (Fuego)","index":26.7},{"name":"Akiro Cluster","index":14.9}]},"bonuses":{"LEV-N":8},"associations":["Hephaestanite","Quartz"],"risk":["Faible","Faible"],"source":"https://scminer.rocks/data/mineral-directory/silicon"},"iron":{"locations":{"S":[{"name":"Magda","index":34.8},{"name":"Lyria","index":34.8},{"name":"Calliope","index":32.7},{"name":"microTech","index":32.6},{"name":"Wala","index":25.7},{"name":"Ceinture d’astéroïdes de Yela","index":20.5},{"name":"Aaron Halo","index":10.3},{"name":"ARC-L5","index":10.1},{"name":"CRU-L4","index":10.1},{"name":"MIC-L3","index":10.1},{"name":"CRU-L1","index":9.5},{"name":"CRU-L2","index":9.5},{"name":"HUR-L3","index":9.5},{"name":"ARC-L3","index":5.7},{"name":"CRU-L5","index":5.7},{"name":"MIC-L4","index":5.7}],"P":[{"name":"Pyro V-c (Adir)","index":43.5},{"name":"Pyro V-b (Vatra)","index":36.0},{"name":"Pyro III (Bloom)","index":35.0},{"name":"Pyro I","index":32.7},{"name":"Pyro II (Monox)","index":32.6},{"name":"Pyro V-e (Fuego)","index":26.8},{"name":"Pyro V-f (Vuur)","index":26.8},{"name":"Pyro V-d (Fairo)","index":26.7},{"name":"Pyro IV","index":25.7},{"name":"Akiro Cluster","index":14.8}],"N":[{"name":"Glaciem Ring","index":20.8}]},"bonuses":{"MIC-L5":8,"LEV-N":8,"CRU-L1":2,"PG-S":2,"ARC-L1":1,"NG-S":1,"HUR-L1":-5,"RUIN-P":-5,"CHECK-P":-5,"ORBIT-P":-5,"NG-P":-5,"SG-P":-5,"PG-N":-5,"SG-N":-5},"associations":[],"risk":["Faible","Faible"],"source":"https://scminer.rocks/data/mineral-directory/iron"},"aluminum":{"locations":{"S":[{"name":"Hurston","index":44.0},{"name":"Magda","index":34.8},{"name":"Ita","index":34.7},{"name":"Aberdeen","index":29.8},{"name":"Arial","index":22.0},{"name":"HUR-L2","index":12.4},{"name":"ARC-L1","index":12.4},{"name":"ARC-L2","index":12.4},{"name":"ARC-L4","index":12.4},{"name":"Aaron Halo","index":10.3},{"name":"HUR-L5","index":9.4},{"name":"CRU-L3","index":9.4},{"name":"MIC-L1","index":9.4},{"name":"MIC-L2","index":9.4},{"name":"MIC-L5","index":9.4},{"name":"HUR-L1","index":8.3},{"name":"HUR-L4","index":8.3}],"N":[{"name":"Keeger Belt","index":20.8}]},"bonuses":{"LEV-N":8,"MIC-L1":7,"TG-S":7,"ARC-L4":-3,"HUR-L1":-4,"RUIN-P":-4,"CHECK-P":-4,"ORBIT-P":-4,"NG-P":-4,"SG-P":-4,"ARC-L1":-5,"NG-S":-5,"PG-N":-4,"SG-N":-4},"associations":["Corindon"],"risk":["Très faible","Faible"],"source":"https://scminer.rocks/data/mineral-directory/aluminium"},"ice":{"locations":{"S":[{"name":"Clio","index":40.0},{"name":"Euterpe","index":40.0},{"name":"microTech","index":32.7},{"name":"Calliope","index":32.6},{"name":"Ceinture d’astéroïdes de Yela","index":20.5},{"name":"Aaron Halo","index":10.4},{"name":"ARC-L5","index":10.0},{"name":"CRU-L4","index":10.0},{"name":"MIC-L3","index":10.0},{"name":"CRU-L1","index":9.4},{"name":"CRU-L2","index":9.4},{"name":"HUR-L3","index":9.4},{"name":"ARC-L3","index":5.6},{"name":"CRU-L5","index":5.6},{"name":"MIC-L4","index":5.6}],"P":[{"name":"Pyro VI (Terminus)","index":20.8},{"name":"Akiro Cluster","index":14.9}],"N":[{"name":"Glaciem Ring","index":20.8},{"name":"Keeger Belt","index":20.8}]},"bonuses":{},"associations":[],"risk":["Très faible","Faible"],"source":"https://scminer.rocks/data/mineral-directory/ice"}};

;
const ORES=[{"id":"quantainium","name":"Quantainium","alias":"Quantainium","rs":3170,"tier":"Très rare","max":2,"systems":["S"],"spots":"Aaron Halo · Aberdeen · Arial · Calliope","refineries":[{"name":"ARC-L1","bonus":3},{"name":"ARC-L2","bonus":3},{"name":"Nyx Gateway (Stanton)","bonus":3}],"tip":"Fortement volatil après extraction. Lance le retour dès la première collecte ; respecte en priorité le compte à rebours du jeu.","volatile":1},{"id":"stileron","name":"Stileron","alias":"Stileron","rs":3185,"tier":"Très rare","max":2,"systems":["P"],"spots":"Akiro Cluster · Pyro I · Pyro II (Monox) · Pyro III (Bloom)","refineries":[],"tip":"Minerai de Pyro très recherché. Risque logistique élevé : prévoir escorte et point de dépôt.","volatile":0},{"id":"savrilium","name":"Savrilium","alias":"Savrilium","rs":3200,"tier":"Très rare","max":2,"systems":["N"],"spots":"Glaciem Ring · Keeger Belt · Breaker Stations (géodes)","refineries":[],"tip":"Minerai associé à Nyx. Signalé comme volatil dans des bases communautaires : vérifier l’alerte de cargaison en jeu.","volatile":1},{"id":"ouratite","name":"Ouratite","alias":"Ouratite","rs":3370,"tier":"Rare","max":3,"systems":["S"],"spots":"Aberdeen · Arial · Hurston · ceinture de Yela","refineries":[],"tip":"Minerai de haute valeur potentielle ; confirmer la composition réelle après approche.","volatile":0},{"id":"riccite","name":"Riccite","alias":"Riccite","rs":3385,"tier":"Rare","max":3,"systems":["P"],"spots":"Akiro Cluster · Pyro III (Bloom) · Ignis · Vatra","refineries":[],"tip":"Cible rare de Pyro ; sécuriser la zone avant une fracture longue.","volatile":0},{"id":"lindinium","name":"Lindinium","alias":"Lindinium","rs":3400,"tier":"Rare","max":3,"systems":["N"],"spots":"Glaciem Ring · Keeger Belt","refineries":[],"tip":"Présent dans Nyx selon les relevés de gisements 4.10.3 ; extraction exigeante.","volatile":0},{"id":"beryl","name":"Béryl","alias":"Beryl","rs":3540,"tier":"Assez rare","max":4,"systems":["S"],"spots":"Aaron Halo · Wala · ARC-L3 · CRU-L5","refineries":[{"name":"ARC-L1","bonus":7},{"name":"CRU-L1","bonus":7},{"name":"Pyro Gateway (Stanton)","bonus":7}],"tip":"Rentabilité variable : comparer densité, trajet et prix final.","volatile":0},{"id":"taranite","name":"Taranite","alias":"Taranite","rs":3555,"tier":"Assez rare","max":4,"systems":["S","P"],"spots":"Cellin · Clio · Euterpe · Yela","refineries":[{"name":"Levski","bonus":8},{"name":"ARC-L4","bonus":5}],"tip":"Minerai de qualité ; comparer les trajets vers les raffineries et les conditions de sécurité.","volatile":0},{"id":"borase","name":"Borase","alias":"Borase","rs":3570,"tier":"Assez rare","max":4,"systems":["S","P"],"spots":"Pyro III (Bloom) · Pyro IV · Ignis · Vatra","refineries":[{"name":"MIC-L5","bonus":9}],"tip":"La concentration réelle varie : une signature seule ne donne pas la pureté.","volatile":0},{"id":"gold","name":"Or","alias":"Gold","rs":3585,"tier":"Assez rare","max":4,"systems":["S","P"],"spots":"Pyro III (Bloom) · Pyro IV · Ignis · Vatra","refineries":[{"name":"MIC-L2","bonus":9},{"name":"ARC-L2","bonus":7}],"tip":"Privilégier les roches riches et faciles à fracturer ; ne pas raisonner sur le RS seul.","volatile":0},{"id":"bexalite","name":"Bexalite","alias":"Bexalite","rs":3600,"tier":"Assez rare","max":4,"systems":["S","P","N"],"spots":"Pyro III (Bloom) · Pyro IV · Ignis · Vatra","refineries":[{"name":"MIC-L5","bonus":12},{"name":"MIC-L2","bonus":9}],"tip":"Bonne valeur, résistance élevée ; vérifier la capacité réelle du laser et les modules.","volatile":0},{"id":"laranite","name":"Laranite","alias":"Laranite","rs":3825,"tier":"Peu commun","max":5,"systems":["S","P"],"spots":"Wala · Pyro IV · Adir · Fairo","refineries":[{"name":"HUR-L1","bonus":2},{"name":"Terra Gateway (Stanton)","bonus":2}],"tip":"Rendement final dépendant du % de minerai dans les roches et de la raffinerie.","volatile":0},{"id":"aslarite","name":"Aslarite","alias":"Aslarite","rs":3840,"tier":"Peu commun","max":5,"systems":["S","P"],"spots":"Aberdeen · Cellin · Daymar · Ita","refineries":[],"tip":"Ne pas présumer d’une bonne valeur marchande sans vérifier un terminal.","volatile":0},{"id":"titanium","name":"Titane","alias":"Titanium","rs":3855,"tier":"Peu commun","max":5,"systems":["S","P"],"spots":"Aberdeen · Cellin · Daymar · Ita","refineries":[{"name":"MIC-L5","bonus":13},{"name":"MIC-L2","bonus":6}],"tip":"Minerai courant des opérations de remplissage ; attention à la valeur nette par trajet.","volatile":0},{"id":"tungsten","name":"Tungstène","alias":"Tungsten","rs":3870,"tier":"Peu commun","max":5,"systems":["S","P"],"spots":"Pyro IV · Wala · Adir · Fairo","refineries":[{"name":"MIC-L2","bonus":9},{"name":"HUR-L1","bonus":4}],"tip":"Résistance variable selon le gisement ; toujours lire la masse et la stabilité réelles.","volatile":0},{"id":"agricium","name":"Agricium","alias":"Agricium","rs":3885,"tier":"Peu commun","max":5,"systems":["S","P"],"spots":"Aberdeen · Cellin · Daymar · Ita","refineries":[{"name":"MIC-L1","bonus":8},{"name":"Terra Gateway (Stanton)","bonus":8}],"tip":"Comparer le bonus de raffinage au coût d’un détour.","volatile":0},{"id":"torite","name":"Torite","alias":"Torite","rs":3900,"tier":"Peu commun","max":5,"systems":["S","P","N"],"spots":"Glaciem Ring · Keeger Belt · Akiro Cluster","refineries":[],"tip":"Dans Nyx, certains gisements spéciaux se trouvent près des Breaker Stations.","volatile":0},{"id":"hephaestanite","name":"Hephaestanite","alias":"Hephaestanite","rs":4180,"tier":"Commun","max":6,"systems":["S","P"],"spots":"Ignis · Vatra · Bloom · Daymar","refineries":[{"name":"MIC-L5","bonus":8}],"tip":"Volume fréquent, intérêt économique souvent plus faible que les minerais rares.","volatile":0},{"id":"tin","name":"Étain","alias":"Tin","rs":4195,"tier":"Commun","max":6,"systems":["S","P"],"spots":"Hurston · Clio · Euterpe · Ignis","refineries":[{"name":"Levski","bonus":9}],"tip":"Des minerais secondaires peuvent coexister, mais ne sont pas identifiables par le seul RS.","volatile":0},{"id":"quartz","name":"Quartz","alias":"Quartz","rs":4210,"tier":"Commun","max":6,"systems":["S","P"],"spots":"Daymar · Pyro III (Bloom) · Monox · microTech","refineries":[{"name":"ARC-L1","bonus":11},{"name":"Nyx Gateway (Stanton)","bonus":11}],"tip":"Généralement plus facile à exploiter ; pertinent pour l’entraînement.","volatile":0},{"id":"corundum","name":"Corindon","alias":"Corundum","rs":4225,"tier":"Commun","max":6,"systems":["S","P"],"spots":"Aberdeen · Arial · Hurston · Magda","refineries":[{"name":"CRU-L1","bonus":7},{"name":"Pyro Gateway (Stanton)","bonus":7}],"tip":"Ne pas confondre avec les gemmes au sol (RS par catégorie de dépôt).","volatile":0},{"id":"copper","name":"Cuivre","alias":"Copper","rs":4240,"tier":"Commun","max":6,"systems":["S","P"],"spots":"Wala · Aberdeen · Magda · Hurston","refineries":[{"name":"MIC-L5","bonus":9},{"name":"ARC-L2","bonus":6}],"tip":"Souvent peu rémunérateur : tenir compte du temps d’extraction et du transport.","volatile":0},{"id":"silicon","name":"Silicium","alias":"Silicon","rs":4255,"tier":"Commun","max":6,"systems":["S","P"],"spots":"Ignis · Vatra · Bloom · Daymar","refineries":[],"tip":"Les composants secondaires éventuels ne sont connus qu’après scan détaillé.","volatile":0},{"id":"iron","name":"Fer","alias":"Iron","rs":4270,"tier":"Commun","max":6,"systems":["S","P","N"],"spots":"Adir · Vatra · Bloom · Magda","refineries":[{"name":"Levski","bonus":8}],"tip":"Très répandu : préférer les volumes faciles seulement si le trajet est rentable.","volatile":0},{"id":"aluminum","name":"Aluminium","alias":"Aluminum","rs":4285,"tier":"Commun","max":6,"systems":["S","P","N"],"spots":"Hurston · Magda · Ita · Aberdeen","refineries":[{"name":"MIC-L1","bonus":7},{"name":"Terra Gateway (Stanton)","bonus":7}],"tip":"Roche de faible valeur relative ; vérifier le prix final.","volatile":0},{"id":"ice","name":"Glace","alias":"Ice","rs":4300,"tier":"Commun","max":6,"systems":["S","P","N"],"spots":"Clio · Euterpe · microTech · Calliope","refineries":[{"name":"Levski","bonus":10}],"tip":"Matière commercialisable sous forme de glace pressurisée ; vérifier sa transformation et son prix au terminal.","volatile":0}];
'use strict';
(() => {
  const $ = (id) => document.getElementById(id);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  const fmt = (v, opts={}) => new Intl.NumberFormat('fr-BE',opts).format(v);
  const escape = (s) => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const SYSTEMS = {S:'Stanton', P:'Pyro', N:'Nyx'};
  const TIERS = ['Très rare','Rare','Assez rare','Peu commun','Commun'];
  const tierClass = t => ({'Très rare':'legend','Rare':'epic','Assez rare':'rare','Peu commun':'uncommon','Commun':'common'}[t]||'common');
  const badge = t => `<span class="badge ${tierClass(t)}">${escape(t)}</span>`;
  // Fixed RS rock-count limits from cross-checked 4.10 community tables.
  // For debated clusters, retain the conservative range supported by both.
  const CONFIRMED_MAX = {bexalite:4,corundum:4};
  ORES.forEach(o=>{if(Object.hasOwn(CONFIRMED_MAX,o.id))o.max=CONFIRMED_MAX[o.id];});
  const lookup = new Map(ORES.map(o=>[o.id,o]));
  const chronoDuration=15*60*1000;
  const safeLocal = {
    get(key, fallback) { try {const t=localStorage.getItem('ztm_'+key);return t===null?fallback:JSON.parse(t);} catch(e) {return fallback;} },
    set(key,value) {try {localStorage.setItem('ztm_'+key,JSON.stringify(value));}catch(e) {/* disabled/private storage */} }
  };
  const SALVAGE_MATERIALS=[
    {id:'salvage:rmc',name:'RMC — Recycled Material Composite',unit:'SCU'},
    {id:'salvage:rubble',name:'Rubble — matière brute légère',unit:'SCU'},
    {id:'salvage:pieces',name:'Pieces — matière brute intermédiaire',unit:'SCU'},
    {id:'salvage:structural',name:'Salvage — matière brute lourde',unit:'SCU'},
    {id:'salvage:cm',name:'Construction Materials (CM)',unit:'SCU'}
  ];
  const SALVAGE_SHIPS={
    salvation:{name:'RSI Salvation',cargo:6,buffer:8,raw:'rubble',material:'Rubble',detail:'Solo · sortie automatique des caisses · 6 SCU de soute.'},
    vulture:{name:'Drake Vulture',cargo:12,buffer:16,raw:'rubble',material:'Rubble',detail:'Solo · impression et déplacement manuel des caisses vers la soute.'},
    fortune:{name:'MISC Fortune',cargo:16,buffer:14,raw:'rubble',material:'Rubble',detail:'Solo · impression automatique · 12 SCU de grilles extérieures + 4 SCU sur le monte-charge.'},
    moth:{name:'ARGO MOTH',cargo:224,buffer:240,raw:'pieces',material:'Pieces',detail:'Équipage · grilles extérieures 2 × 96 SCU + monte-charge 32 SCU.'},
    reclaimer:{name:'Aegis Reclaimer',cargo:420,buffer:448,raw:'structural',material:'Salvage',detail:'Équipage · soute 420 SCU · deux unités d’emballage · caisses jusqu’à 16 SCU.'}
  };
  // Stations avec centre de raffinage confirmé ; liste volontairement non exhaustive.
  // Aucun multiplicateur spécifique de salvage n'est appliqué sans valeur vérifiée.
  const SALVAGE_REFINERIES={
    S:['ARC-L1 · Wide Forest','CRU-L1 · Ambitious Dream','HUR-L1 · Green Glade','HUR-L2 · Faithful Dream','MIC-L1 · Shallow Frontier'],
    P:['Checkmate Station','Orbituary','Ruin Station'],
    N:['Levski']
  };
  let currentDivision=null;
  const savedCollection=safeLocal.get('collection',[]);
  let collection=Array.isArray(savedCollection)?savedCollection.filter(e=>e&&typeof e.id==='string'&&typeof e.name==='string'&&['SCU','cSCU','unités'].includes(e.unit)&&Number.isFinite(e.target)&&e.target>0&&Number.isFinite(e.have)&&e.have>=0).map(e=>({
    id:e.id.slice(0,75),key:String(e.key||'custom').slice(0,85),name:e.name.slice(0,80),unit:e.unit,source:e.source==='salvage'?'salvage':e.source==='mining'?'mining':'other',project:String(e.project||'').slice(0,70),target:Math.min(e.target,1e6),have:Math.min(e.have,1e6)
  })).slice(0,500):[];
  let history = safeLocal.get('history',[]);
  const savedFavorites = safeLocal.get('favorites',[]);
  let favorites = new Set(Array.isArray(savedFavorites)?savedFavorites.filter(id=>typeof id==='string'&&lookup.has(id)):[]);
  let timerStart = safeLocal.get('timerStart',null);

  if(!Array.isArray(history)) history=[];
  history=history.filter(rs=>Number.isInteger(rs)&&rs>0&&rs<=100000000).slice(0,7);
  if(!Number.isFinite(timerStart)) timerStart=null;
  if(!(favorites instanceof Set)) favorites=new Set();

  function parseRS(value) {
    const s=String(value??'').trim();
    if(!s) return null;
    if(!/^[\d\s.,'’\u00a0\u202f]+$/.test(s)) return NaN;
    if(/[.,'’]/.test(s) && !/^\d{1,3}(?:[.,'’]\d{3})+(?:\s*)?$/.test(s.replace(/[\u00a0\u202f]/g,' '))) return NaN;
    const digits=s.replace(/[\s.,'’\u00a0\u202f]/g,'');
    if(!/^\d{1,9}$/.test(digits)) return NaN;
    const n=Number(digits);
    return n>0 && n<=100000000 ? n : NaN;
  }
  const sysLabel = ids => ids.map(id=>SYSTEMS[id]).join(' · ');
  function chooseView(name) {
    if(!['prospect','scanner','catalogue','calcul','chrono','salvage','collecte','crafting','dismantle','revente'].includes(name)) return;
    $$('.view').forEach(el=>el.classList.toggle('active',el.id==='view-'+name));
    $$('.nav-btn').forEach(btn=>{
      const yes=btn.dataset.view===name;
      btn.classList.toggle('active',yes);
      if(yes) btn.setAttribute('aria-current','page'); else btn.removeAttribute('aria-current');
    });
    $('breadcrumbView').textContent=({prospect:'PROSPECTION',scanner:'DÉCODEUR RS',catalogue:'MINERAIS',calcul:'RAFFINAGE',salvage:'RÉCUPÉRATION',collecte:'BESOINS EN RESSOURCES',chrono:'CHRONO',crafting:'BLUEPRINTS',revente:'REVENTE'})[name];
    if(name==='prospect') renderProspect();
    if(name==='catalogue') renderCatalog();
    if(name==='collecte') {renderCollection();if(typeof renderCraftNeeds==='function')renderCraftNeeds();}
    if(name==='crafting'&&typeof renderCrafting==='function'){renderCrafting();if(typeof loadCraftCatalog==='function')loadCraftCatalog();}
    if(name==='dismantle'&&typeof renderDismantle==='function'){renderDismantle();if(typeof loadCraftCatalog==='function')loadCraftCatalog();}
    if(name==='calcul') updateEstimate();
    if(name==='revente') renderSales();
    if(name==='chrono') updateClock();
    window.scrollTo({top:0,behavior:'instant'});
  }
  function enterDivision(division){
    if(!['mining','salvage','crafting','dismantle'].includes(division))return;
    currentDivision=division;
    document.body.classList.remove('home-mode');
    const mining=division==='mining';
    $('navMining').classList.toggle('is-hidden',!mining);
    $('navSalvage').classList.toggle('is-hidden',division!=='salvage');
    $('navCrafting').classList.toggle('is-hidden',division!=='crafting');
    $('navDismantle').classList.toggle('is-hidden',division!=='dismantle');
    $('divisionName').textContent=mining?'Mining Division':division==='salvage'?'Salvage Division':division==='crafting'?'Crafting Division':'Démontage Division';
    $('switchDivision').textContent='↔ Divisions';
    chooseView(mining?'prospect':division==='salvage'?'salvage':division==='crafting'?'crafting':'dismantle');
  }
  function goHome(){currentDivision=null;document.body.classList.add('home-mode');window.scrollTo({top:0,behavior:'instant'});}
  $('homeLogo').src=document.querySelector('.brand-logo').src;
  $$('[data-enter-division]').forEach(b=>b.addEventListener('click',()=>enterDivision(b.dataset.enterDivision)));
  $('goHome').addEventListener('click',goHome);
  $('switchDivision').addEventListener('click',goHome);
  $$('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>chooseView(btn.dataset.view)));
  $('salvageToList').addEventListener('click',()=>chooseView('collecte'));
  const savedShip=safeLocal.get('salvageShip','vulture');
  $('salvageShip').value=Object.hasOwn(SALVAGE_SHIPS,savedShip)?savedShip:'vulture';
  const savedSalvageSystem=safeLocal.get('salvageSystem','S');
  $('salvageSystem').value=['S','P','N'].includes(savedSalvageSystem)?savedSalvageSystem:'S';
  function renderSalvageShip(){
    const id=$('salvageShip').value,ship=SALVAGE_SHIPS[id]||SALVAGE_SHIPS.vulture;
    $('salvageCargo').textContent=ship.cargo+' SCU';
    $('salvageBuffer').textContent=ship.buffer+' SCU';
    $('salvageShipMaterial').textContent=ship.material;
    $('salvageShipDetail').textContent=ship.detail;
    $$('[data-raw-for]').forEach(row=>{row.dataset.shipMatch=String(row.dataset.rawFor===ship.raw);});
    safeLocal.set('salvageShip',id);
  }
  function renderSalvageStations(){
    const sys=$('salvageSystem').value;
    const stations=SALVAGE_REFINERIES[sys]||[];
    $('salvageStationList').innerHTML=stations.map(station=>'<li>'+escape(station)+'</li>').join('');
    safeLocal.set('salvageSystem',sys);
  }
  $('salvageShip').addEventListener('change',renderSalvageShip);
  $('salvageSystem').addEventListener('change',renderSalvageStations);
  renderSalvageShip();renderSalvageStations();
  let toastHandle;
  function toast(message) {
    const el=$('toast');el.textContent=message;el.classList.add('show');
    clearTimeout(toastHandle);toastHandle=setTimeout(()=>el.classList.remove('show'),2600);
  }
  function saveHistory(rs){history=[rs,...history.filter(n=>n!==rs)].slice(0,7);safeLocal.set('history',history);renderHistory();}
  function renderHistory(){
    $('scanHistoryBlock').classList.toggle('hide',!history.length);
    $('scanHistory').innerHTML=history.map(rs=>`<button class="example" type="button" data-example="${rs}">${fmt(rs)}</button>`).join('');
  }

  // Offline intelligence from SCMINER. System-specific locations are never mixed.
  if(INTEL.savrilium?.locations?.N) INTEL.savrilium.locations.N=INTEL.savrilium.locations.N.filter(z=>z.name!=='Breaker Stations — grandes géodes');
  
  // V15.1 — Source locale Strata, récupérée par le lanceur et validée avant installation.
  // L'ancien référentiel est conservé pour navigation hors ligne, MAIS ses indices ne sont pas présentés comme vérifiés.
  const STRATA_CURRENT = window.ZTEAM_MINING_DATA || null;
  const STRATA_VERIFIED = !!(
    STRATA_CURRENT && STRATA_CURRENT.meta && /^4\.\d+(\.\d+)?$/.test(String(STRATA_CURRENT.meta.current_patch||'')) &&
    (function(p){const x=String(p||'').split('.').map(Number);return x[0]>4||(x[0]===4&&(x[1]>10||(x[1]===10&&(x[2]||0)>=3)));})(STRATA_CURRENT.meta.current_patch) &&
    STRATA_CURRENT.location_ores && Object.keys(STRATA_CURRENT.location_ores).length >= 35 &&
    STRATA_CURRENT.scanner_signals && Object.keys(STRATA_CURRENT.scanner_signals).length >= 45 &&
    STRATA_CURRENT.refineries && STRATA_CURRENT.refineries.stations &&
    Object.keys(STRATA_CURRENT.refineries.stations).length >= 12
  );
  function oreIdFromStrata(name){
    const id=String(name||'').toLowerCase();return id==='quantanium'?'quantainium':id;
  }
  if(STRATA_VERIFIED){
    const verifiedSites={};
    for(const [key,location] of Object.entries(STRATA_CURRENT.location_ores)){
      const sys=({Stanton:'S',Pyro:'P',Nyx:'N'})[location.system];
      if(!sys || !location.name || !Array.isArray(location.ores?.ship))continue;
      for(const item of location.ores.ship){
        if(item.relative_probability===null || item.relative_probability===undefined)continue;
        const id=oreIdFromStrata(item.ore),index=Number(item.relative_probability);
        if(!INTEL[id] || !Number.isFinite(index) || index<0 || index>100)continue;
        const bySys=verifiedSites[id] ||= {};
        (bySys[sys] ||= []).push({name:location.name,index,confirmed:item.panel_confirmed===true,from:'Strata'});
      }
    }
    for(const [id,intel] of Object.entries(INTEL)){
      intel.locations=verifiedSites[id] || {};intel.bonuses={};
    }
    // Current scanner values supersede the old cache if a unique hint maps to the ore.
    for(const ore of ORES){
      const signals=Object.values(STRATA_CURRENT.scanner_signals)
        .filter(v=>oreIdFromStrata(v.ore_hint)===ore.id)
        .map(v=>Number(v.signal_value)).filter(Number.isFinite);
      const unique=[...new Set(signals)];if(unique.length===1)ore.rs=unique[0];
    }
    const stationMap={
      'LEVSKI':'LEV-N','CHECKMATE':'CHECK-P','ORBITUARY':'ORBIT-P','RUIN STATION':'RUIN-P'
    };
    function stationIdFromStrata(name,system){
      const upper=String(name||'').toUpperCase();
      const lag=upper.match(/\b(?:ARC|CRU|HUR|MIC)-L\d\b/);
      if(lag && STATIONS[lag[0]])return lag[0];
      for(const [part,code] of Object.entries(stationMap))if(upper.includes(part))return code;
      const su=({Stanton:'S',Pyro:'P',Nyx:'N'})[system];
      for(const [text,prefix] of [['NYX GATEWAY','NG'],['PYRO GATEWAY','PG'],['STANTON GATEWAY','SG']]){
         if(upper.includes(text) && STATIONS[prefix+'-'+su])return prefix+'-'+su;
      }
      return null;
    }
    for(const [name,station] of Object.entries(STRATA_CURRENT.refineries.stations)){
      const code=stationIdFromStrata(name,station.system);
      if(!code || !station.yields)continue;
      for(const [oreKey,info] of Object.entries(station.yields)){
        if(info?.value===null || info?.value===undefined)continue;
        const id=oreIdFromStrata(oreKey),bonus=Number(info.value);
        if(INTEL[id] && Number.isFinite(bonus) && bonus>=-100 && bonus<=100)INTEL[id].bonuses[code]=bonus;
      }
    }
  } else {
    // Historical entries remain browseable, but hide unverified numeric indexes.
    for(const intel of Object.values(INTEL))for(const sites of Object.values(intel.locations||{}))
      for(const site of sites){delete site.index;site.from='archive V15';}
  }

  const profile = id=>INTEL[id];
  const bonusRows = id=>Object.entries(profile(id)?.bonuses||{}).map(([code,bonus])=>({code,bonus,name:STATIONS[code][0],system:STATIONS[code][1]})).sort((a,b)=>b.bonus-a.bonus||a.name.localeCompare(b.name,'fr'));
  // Replace outdated shared fields from the imported 1st-generation catalogue.
  ORES.forEach(o=>{const i=profile(o.id); if(!i) return;
    o.systems=Object.keys(i.locations);
    o.spots=Object.entries(i.locations).map(([sys,sites])=>`${SYSTEMS[sys]} : ${sites.map(z=>z.name).join(', ')}`).join(' | ');
    o.refineries=bonusRows(o.id).map(s=>({name:s.name,bonus:s.bonus,system:s.system}));
  });
  let prospectOre=safeLocal.get('prospectOre','gold');
  let prospectSystem=safeLocal.get('prospectSystem','S');
  if(!lookup.has(prospectOre)) prospectOre='gold';
  if(!['S','P','N','ALL'].includes(prospectSystem)) prospectSystem='S';
  const orePicker=$('prospectOre');
  [...ORES].sort((a,b)=>a.name.localeCompare(b.name,'fr')).forEach(o=>{
    const opt=document.createElement('option');opt.value=o.id;opt.textContent=o.name;orePicker.appendChild(opt);
  });
  orePicker.value=prospectOre;$('prospectSystem').value=prospectSystem;
  const signed=n=>`${n>0?'+':''}${n} %`;
  const indexText=n=>`${fmt(n,{maximumFractionDigits:1})} %`;
  const stationLabel=r=>r.name.replace(/\s*·\s*(?:Stanton|Pyro|Nyx)$/,'').replace(/\s*·\s*/g,' - ');
  const refHTML=r=>`<div class="ref-row"><span><strong>${escape(stationLabel(r))}</strong><small>sur ${escape(SYSTEMS[r.system])}</small></span><span class="ref-val ${r.bonus>=0?'plus':'minus'}">${signed(r.bonus)}</span></div>`;
  function sitesHTML(sites){
    return [...sites].sort((a,b)=>(Number(b.index)||0)-(Number(a.index)||0)||a.name.localeCompare(b.name,'fr')).map(z=>{
      const pct=Number(z.index),valid=STRATA_VERIFIED&&Number.isFinite(pct)&&pct>=0&&pct<=100;
      const label=valid?indexText(pct):'À vérifier';
      const bar=valid?Math.max(1,Math.min(100,pct)):0;
      const hint=valid?'Répartition RELATIVE parmi les ressources du gisement (Strata '+String(STRATA_CURRENT.meta.current_patch)+'). Ce n’est pas une probabilité absolue de découverte.':'Emplacement historique V15 non confirmé par un référentiel Strata local.';
      return `<div class="location-row"><strong>${escape(z.name)}</strong><span class="location-probability" title="${escape(hint)}"><strong>${label}</strong>${valid?`<span class="location-meter" aria-hidden="true"><span style="width:${bar}%"></span></span>`:''}</span></div>`;
    }).join('');
  }
  function renderProspect(){
    const id=orePicker.value,sys=$('prospectSystem').value,o=lookup.get(id),i=profile(id),out=$('prospectOutput');if(!o||!i)return;
    prospectOre=id;prospectSystem=sys;safeLocal.set('prospectOre',id);safeLocal.set('prospectSystem',sys);
    const systems=(sys==='ALL'?Object.keys(i.locations):[sys]);const local=systems.flatMap(code=>(i.locations[code]||[]).map(z=>({...z,system:code}))),present=local.length>0;
    const refs=bonusRows(id),near=(sys==='ALL'?refs:refs.filter(r=>r.system===sys)),far=(sys==='ALL'?[]:refs.filter(r=>r.system!==sys));
    const locHTML=present?(sys==='ALL'?systems.map(code=>i.locations[code]?.length?`<h4 class="prospect-subtitle">${SYSTEMS[code]} (${i.locations[code].length})</h4><div class="loc-list">${sitesHTML(i.locations[code])}</div>`:'').join(''):`<div class="loc-list">${sitesHTML(i.locations[sys])}</div>`):`<div class="notice warning">Aucun emplacement renseigné pour <strong>${escape(o.name)} · ${SYSTEMS[sys]}</strong>.</div>`;
    const refsHTML=near.length?near.map(refHTML).join(''):'<div class="notice">Aucun bonus ou malus renseigné pour cette sélection.</div>';
    const missingHTML='';
    const outsideHTML=far.length?`<details class="prospect-details"><summary>Raffineries hors système (${far.length})</summary><p class="ref-mini-note">Stations hors du système sélectionné.</p>${far.map(refHTML).join('')}</details>`:'';
    const rsHTML=Array.from({length:o.max},(_,n)=>{const count=n+1,v=o.rs*count;return `<button type="button" data-rs-to-scan="${v}" class="rs-card" title="Décoder ${fmt(v)} RS" aria-label="Décoder ${fmt(v)} RS, ${count} roche${count>1?'s':''}"><small>${count} roche${count>1?'s':''}</small><strong>${fmt(v)}</strong></button>`;}).join('');
    const content=`<div class="prospect-output">
      <div class="ore-strip"><div class="ore-identity"><h3>${escape(o.name)}</h3>${badge(o.tier)}${o.volatile?'<span class="badge warning">Volatile</span>':''}<span class="ore-system">${escape(sys==='ALL'?'Tous systèmes':SYSTEMS[sys])}</span></div><div class="prospect-actions"><button class="btn compact" type="button" id="prospectToCollection">+ Liste</button><button class="btn compact primary" type="button" id="prospectToCalc">Raffinage</button><button class="btn compact" type="button" id="prospectSaveFavorite">${favorites.has(id)?'★ Favori':'☆ Favori'}</button><button class="btn compact ghost" type="button" id="prospectCopy">Copier</button></div></div>
      <div class="panel prospect-card"><h3>Signatures RS</h3><div class="rs-grid">${rsHTML}</div><p class="prospect-notice">Minerai dominant et nombre de roches. Composition à confirmer au scan.</p></div>
      <div class="prospect-card-grid"><div class="panel prospect-card"><h3>Emplacements${sys==='ALL'?'':' · '+escape(SYSTEMS[sys])}</h3>${locHTML}<p class="location-chance-note">${STRATA_VERIFIED?`Répartition relative des minerais dans les gisements de type « ship » (Strata, patch ${escape(STRATA_CURRENT.meta.current_patch)} · données ${escape(STRATA_CURRENT.meta.data_updated)}). Ce n’est pas la probabilité absolue de trouver une roche à chaque scan.`:`Localisations historiques de la V15, NON vérifiées. Les données seront récupérées automatiquement par le site après publication et validation.`} <a href="https://github.com/SeekND/Strata" target="_blank" rel="noopener noreferrer">Source Strata ↗</a></p></div>
      <div class="panel prospect-card"><h3>Raffineries${sys==='ALL'?'':' · '+escape(SYSTEMS[sys])}</h3>${refsHTML}${outsideHTML}</div></div>
    </div>`;
    out.innerHTML=content;
    $('prospectToCollection').addEventListener('click',()=>openCollection('mining:'+id));
    $('prospectToCalc').addEventListener('click',()=>{
      $('calcOre').value=id;updateStationOptions();
      const selected=near.find(r=>r.bonus>0)||refs.find(r=>r.bonus>0);if(selected){const opt=Array.from($('calcStation').options).find(op=>op.dataset.station===selected.code);if(opt)$('calcStation').value=opt.value;}
      updateEstimate();chooseView('calcul');
    });
    $('prospectSaveFavorite').addEventListener('click',()=>{toggleFavorite(id);renderProspect();toast(favorites.has(id)?'Minerai ajouté aux favoris':'Favori retiré');});
    $('prospectCopy').addEventListener('click',()=>{
      const t=[`Z-TEAM | ${o.name} | ${sys==='ALL'?'Tous systèmes':SYSTEMS[sys]}`,`RS : ${Array.from({length:o.max},(_,j)=>fmt(o.rs*(j+1))+' (×'+(j+1)+')').join(' · ')}`,`Lieux : ${local.map(z=>z.name+' ('+(Number.isFinite(Number(z.index))?indexText(Number(z.index)):'N/D')+') ['+SYSTEMS[z.system]+']').join(', ')||'Aucun lieu documenté'}`,`Raffineries : ${near.map(r=>stationLabel(r)+' sur '+SYSTEMS[r.system]+' '+signed(r.bonus)).join(', ')||'Non renseigné'}`].join('\n');
      if(navigator.clipboard?.writeText)navigator.clipboard.writeText(t).then(()=>toast('Fiche copiée'),()=>fallbackCopy(t));else fallbackCopy(t);
    });
  }
  function fallbackCopy(t){const a=document.createElement('textarea');a.value=t;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();try{document.execCommand('copy');toast('Fiche copiée');}catch(e){toast('Copie indisponible.');}a.remove();}
  $('prospectOre').addEventListener('change',renderProspect);
  $('prospectSystem').addEventListener('change',renderProspect);
  $('prospectToScanner').addEventListener('click',()=>{chooseView('scanner');$('rsInput').focus();});
  document.addEventListener('click',ev=>{const v=ev.target.closest('[data-rs-to-scan]');if(v)setScan(Number(v.dataset.rsToScan));});

  renderHistory();

  function getMatches(rs, system) {
    const regular=[],elsewhere=[],ground=[];
    for(const ore of ORES){
      if(rs%ore.rs!==0)continue;
      const rocks=rs/ore.rs;
      if(rocks<1||rocks>ore.max)continue;
      const row={ore,rocks,rs,verified:true};
      if(system!=='ALL'&&!ore.systems.includes(system))elsewhere.push(row);
      else regular.push(row);
    }
    // Ground RS indicates deposit class, not the mineral's identity.
    if(rs%3000===0&&rs/3000>=1&&rs/3000<=7)ground.push({type:'FPS',rocks:rs/3000,base:3000});
    if(rs%4000===0&&rs/4000>=1&&rs/4000<=7)ground.push({type:'ROC / ATLS GEO',rocks:rs/4000,base:4000});
    const sort=(a,b)=>TIERS.indexOf(a.ore.tier)-TIERS.indexOf(b.ore.tier)||a.rocks-b.rocks;
    regular.sort(sort);elsewhere.sort(sort);
    return {regular,elsewhere,ground};
  }
  function candidateHTML(m,kind='verified') {
    const o=m.ore,isOutside=kind==='outside';
    return `<article class="result-card ${isOutside?'theory':''}"><div class="result-main"><div><h4>${escape(o.name)}</h4><small>Base : <span class="mono">${fmt(o.rs)} RS</span> · ${escape(sysLabel(o.systems))}</small></div><div class="result-n">×${m.rocks}</div></div><div class="result-meta">${badge(o.tier)}<span class="badge ${isOutside?'warning':'good'}">${isOutside?'Autre système':'Signature répertoriée'}</span>${o.volatile?'<span class="badge warning">Volatile</span>':''}</div><p class="result-description">${isOutside?'Signature répertoriée, mais minerai absent des relevés du système filtré.':'Signature de groupe compatible avec '+m.rocks+' roche'+(m.rocks>1?'s':'')+' et ce minerai dominant.'}</p><div class="mini-actions"><button type="button" class="btn compact ghost" data-show-prospect="${o.id}">Fiche complète</button><button type="button" class="btn compact" data-collect-prefill="mining:${o.id}">+ Liste</button></div></article>`;
  }
  function groundHTML(g,rs){return `<article class="result-card ground"><div class="result-main"><div><h4>Gisement ${escape(g.type)}</h4><small>Base de classe : <span class="mono">${fmt(g.base)} RS</span></small></div><div class="result-n">×${g.rocks}</div></div><div class="result-meta"><span class="badge warning">Espèce indéterminable</span><span class="badge">Gemme au sol</span></div><p class="result-description">${g.rocks} dépôt${g.rocks>1?'s':''} de catégorie ${escape(g.type)} compatible${g.rocks>1?'s':''}. Le RS seul ne permet pas d'identifier la gemme.</p><div class="mini-actions"><button class="btn compact" type="button" data-collect-prefill="custom">+ Liste</button></div></article>`;}
  function renderScan() {
    const input=$('rsInput').value,rs=parseRS(input),status=$('scanStatus'),out=$('scanOutput');
    if(rs===null){status.textContent='En attente';status.className='badge';out.innerHTML='<div class="empty-state"><h3>Scanner en attente</h3><p>Saisis une signature RS pour voir les correspondances de minerai et de taille de gisement.</p></div>';return;}
    if(!Number.isFinite(rs)){status.textContent='Entrée invalide';status.className='badge warning';out.innerHTML='<div class="empty-state"><h3>Signature non valide</h3><p>Entre un entier positif, par exemple 6340 ou 6 340. Les décimales ne sont pas utilisées pour les valeurs RS.</p></div>';return;}
    const system=$('systemFilter').value,res=getMatches(rs,system);
    const n=res.regular.length+res.ground.length;
    status.textContent=n?'Correspondance trouvée':'Aucun résultat vérifié';status.className='badge '+(n?'good':'warning');
    let h=`<div class="result-summary"><strong class="mono" style="color:#f8fafd;font-size:19px">${fmt(rs)} RS</strong> &nbsp;·&nbsp; ${n?`${n} piste${n>1?'s':''} dans la sélection`:'aucune correspondance exacte dans la sélection'}</div>`;
    if(res.regular.length)h+=`<p class="inline-title">Correspondances répertoriées (${res.regular.length})</p><div class="result-list">${res.regular.map(m=>candidateHTML(m)).join('')}</div>`;
    if(res.ground.length)h+=`<p class="inline-title" style="margin-top:17px">Signatures de catégorie · sol</p><div class="result-list">${res.ground.map(g=>groundHTML(g,rs)).join('')}</div>`;
    if(res.elsewhere.length)h+=`<div class="notice">${res.elsewhere.length} correspondance${res.elsewhere.length>1?'s':''} dans un autre système : le filtre de prospection ne correspond pas aux systèmes de référence.</div><div class="result-list" style="margin-top:10px">${res.elsewhere.map(m=>candidateHTML(m,'outside')).join('')}</div>`;
    if(n===0&&!res.elsewhere.length)h+='<div class="notice">Aucune correspondance répertoriée pour cette valeur et ce système.</div>';
    h+='<p class="smallprint" style="margin-top:14px">Les multiples sont des indices de groupe, pas un inventaire complet des matériaux présents dans la roche.</p>';
    out.innerHTML=h;
  }
  $('scanForm').addEventListener('submit',e=>{e.preventDefault();const rs=parseRS($('rsInput').value);renderScan();if(Number.isFinite(rs)&&rs!==null)saveHistory(rs);});
  $('rsInput').addEventListener('input',renderScan);
  $('systemFilter').addEventListener('change',renderScan);
  $('clearScan').addEventListener('click',()=>{$('rsInput').value='';renderScan();$('rsInput').focus();});
  function setScan(v){$('rsInput').value=String(v);renderScan();saveHistory(Number(v));chooseView('scanner');}
  document.addEventListener('click',e=>{
    const example=e.target.closest('[data-example]');if(example){setScan(example.dataset.example);return;}
    const open=e.target.closest('[data-open-ore]');if(open){openOre(open.dataset.openOre);return;}
    const collect=e.target.closest('[data-collect-prefill]');if(collect){openCollection(collect.dataset.collectPrefill);return;}
    const go=e.target.closest('[data-show-prospect]');if(go){$('prospectOre').value=go.dataset.showProspect;const scanIsActive=$('view-scanner').classList.contains('active');const sys=scanIsActive?$('systemFilter').value:$('catalogSystem').value;if(['S','P','N'].includes(sys))$('prospectSystem').value=sys;renderProspect();chooseView('prospect');return;}
    const fav=e.target.closest('[data-favorite]');if(fav){toggleFavorite(fav.dataset.favorite);return;}
  });

  function catalogFiltered() {
    const search=$('catalogSearch').value.trim().toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    const digitSearch=search.replace(/[\s.,]/g,'');
    const tier=$('catalogTier').value,system=$('catalogSystem').value,fav=$('onlyFavorites').checked;
    return ORES.filter(o=>(tier==='ALL'||o.tier===tier)&&(system==='ALL'||o.systems.includes(system))&&(!fav||favorites.has(o.id))&&(!search||[o.name,o.alias].some(v=>v.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(search))||o.rs.toString().includes(digitSearch))).sort((a,b)=>TIERS.indexOf(a.tier)-TIERS.indexOf(b.tier)||a.rs-b.rs);
  }
  function renderCatalog(){const ores=catalogFiltered();$('catalogCount').textContent=`${ores.length} minerai${ores.length>1?'s':''} affiché${ores.length>1?'s':''}`;
    $('catalogBody').innerHTML=ores.length?ores.map(o=>`<tr><td><div class="catalog-name"><button type="button" data-favorite="${o.id}" aria-label="${favorites.has(o.id)?'Retirer des favoris':'Ajouter aux favoris'} : ${escape(o.name)}" title="Favori" class="icon-btn ${favorites.has(o.id)?'active':''}">${favorites.has(o.id)?'★':'☆'}</button><span><strong>${escape(o.name)}</strong>${o.volatile?'<br><span class="high">Volatile</span>':''}</span></div></td><td>${badge(o.tier)}</td><td class="mono"><strong>${fmt(o.rs)}</strong></td><td>1–${o.max} roche${o.max>1?'s':''}</td><td><div class="system-tags">${o.systems.map(s=>`<span class="system-tag" title="${SYSTEMS[s]}">${s}</span>`).join('')}</div></td><td>${o.refineries.length?`<strong>${escape(stationLabel(o.refineries[0]))}</strong><small class="muted"> sur ${escape(SYSTEMS[o.refineries[0].system])}</small> <span class="ref-best">${signed(o.refineries[0].bonus)}</span>`:'<span class="muted">Non documenté</span>'}</td><td><button type="button" class="btn compact ghost" data-show-prospect="${o.id}">Fiche complète</button></td></tr>`).join(''):`<tr><td colspan="7" class="muted" style="text-align:center;padding:30px">Aucun minerai ne correspond aux filtres.</td></tr>`;
  }
  ['catalogSearch','catalogTier','catalogSystem','onlyFavorites'].forEach(id=>$(id).addEventListener('input',renderCatalog));
  $('resetCatalog').addEventListener('click',()=>{$('catalogSearch').value='';$('catalogTier').value='ALL';$('catalogSystem').value='ALL';$('onlyFavorites').checked=false;renderCatalog();});
  function toggleFavorite(id){if(favorites.has(id)) favorites.delete(id);else favorites.add(id);safeLocal.set('favorites',[...favorites]);renderCatalog();if($('oreDialog').open) openOre(id,true);}
  function openOre(id,refresh=false){const o=lookup.get(id);if(!o)return;
    $('dialogTitle').textContent=o.name;
    $('dialogBody').innerHTML=`<div class="line-items">${badge(o.tier)}${o.volatile?'<span class="badge warning">Volatile / précaution</span>':''}${o.systems.map(s=>`<span class="badge">${SYSTEMS[s]}</span>`).join('')}</div>
      <div class="dialog-row"><span>Signature d'une roche</span><strong class="mono">${fmt(o.rs)} RS</strong></div>
      <div class="dialog-row"><span>Groupes usuels</span><strong>1 à ${o.max} roche${o.max>1?'s':''}</strong></div>
      <div class="dialog-row"><span>Signatures (groupes usuels)</span><strong class="mono" style="text-align:right;line-height:1.8">${Array.from({length:o.max},(_,i)=>fmt(o.rs*(i+1))).join(' · ')}</strong></div>
       <div class="dialog-copy"><strong>Lieux de minage par système :</strong><br>${Object.entries(profile(o.id).locations).map(([sys,sites])=>`<strong>${SYSTEMS[sys]} :</strong> ${sites.map(s=>escape(s.name)).join(' · ')}`).join('<br>')}</div>
       <div class="dialog-copy"><strong>Raffineries / bonus et malus relevés :</strong><br>${bonusRows(o.id).length?bonusRows(o.id).map(r=>`${escape(stationLabel(r))} sur ${escape(SYSTEMS[r.system])} <span class="${r.bonus<0?'high':'ref-best'}">${signed(r.bonus)}</span>`).join(' · '):'<span class="muted">Aucun multiplicateur explicite référencé.</span>'}</div>
      <div class="notice info">Une signature RS ne suffit pas à connaître la composition exacte d’une roche ; lire le scan détaillé en jeu.</div>
      <div class="dialog-actions"><button class="btn primary compact" type="button" id="dialogToScanner">Utiliser RS ${fmt(o.rs)}</button><button class="btn compact ghost" type="button" id="dialogToCalc">Raffinage</button><button class="btn compact" type="button" data-favorite="${o.id}">${favorites.has(o.id)?'★ Retirer le favori':'☆ Ajouter en favori'}</button></div>`;
    $('dialogToScanner').addEventListener('click',()=>{$('oreDialog').close();setScan(o.rs)});
    $('dialogToCalc').addEventListener('click',()=>{$('oreDialog').close();$('calcOre').value=o.id;updateStationOptions();updateEstimate();chooseView('calcul');});
    $('dialogBody').querySelector('.dialog-actions')?.insertAdjacentHTML('beforeend','<button type="button" class="btn compact" id="dialogToSales">Comparer la revente</button>');
    $('dialogToSales')?.addEventListener('click',()=>{$('oreDialog').close();openSales('ore:refined',o.id);});
    if(!refresh&&!$('oreDialog').open)$('oreDialog').showModal();
  }
  $('closeDialog').addEventListener('click',()=>$('oreDialog').close());
  $('oreDialog').addEventListener('click',e=>{if(e.target===$('oreDialog'))$('oreDialog').close();});
  renderCatalog();
  function csvEscape(v){let s=String(v??'');if(/^[\s]*[+=@-]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';}
  function exportCSV(name,rows){const csv='\ufeff'+rows.map(row=>row.map(csvEscape).join(';')).join('\r\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  $('exportCatalogue').addEventListener('click',()=>{const rows=[['Minerai','Nom EN','Rareté','RS 1 roche','Nombre de roches documenté','Systèmes','Lieux référencés','Raffineries indicatives'],...catalogFiltered().map(o=>[o.name,o.alias,o.tier,o.rs,o.max,sysLabel(o.systems),o.spots,o.refineries.map(r=>r.name+' +'+r.bonus+'%').join(' | ')])];exportCSV('Z-Team_Catalogue_4.10.3.csv',rows);toast('Catalogue CSV exporté');});

  ORES.forEach(o=>{const opt=document.createElement('option');opt.value=o.id;opt.textContent=o.name;$('calcOre').appendChild(opt);});
  // Model: SCMINER 4.10.3 (community estimates, not CIG-confirmed job yields).
  // Formula: refined SCU ≈ raw SCU × base method recovery × (1 + station ore bonus/100).
  // Sources reviewed 2026-11-18: scminer.rocks/data/refineries, starcitizen.tools/Refining.
  const REFINING_METHODS = {
    dinyx:0.45, ferron:0.45, pyrometric:0.45,
    thermonatic:0.3825, electrostarolysis:0.3825, gaskin:0.3825,
    kazen:0.315, cormack:0.315, xcr:0.315
  };
  function updateStationOptions(){
    const selectedOre=$('calcOre').value,station=$('calcStation'),rows=bonusRows(selectedOre);
    const prior=station.value;
    station.innerHTML=rows.length ? rows.map(r=>`<option value="${escape(r.code)}">${escape(stationLabel(r))} · ${SYSTEMS[r.system]} (${signed(r.bonus)})</option>`).join('') : '<option value="">Aucun bonus vérifié pour ce minerai</option>';
    station.disabled=!rows.length;
    if(rows.some(r=>r.code===prior)) station.value=prior;
  }
  function numericInput(id){const field=$(id);if(!field||field.value.trim()==='')return null;return Number(field.value);}
  function updateEstimate(){
    const raw=numericInput('calcRaw'),stationCode=$('calcStation').value;
    const base=REFINING_METHODS[$('calcMethod').value];
    const bonus=bonusRows($('calcOre').value).find(r=>r.code===stationCode);
    const amount=$('outSCU'),formula=$('outFormula');
    if(raw===null){amount.textContent='—';formula.textContent='Saisis une quantité brute.';return;}
    if(!Number.isFinite(raw)||raw<0||raw>1000000){amount.textContent='—';formula.textContent='Quantité brute invalide.';return;}
    if(STRATA_VERIFIED && STRATA_CURRENT.meta.current_patch!=='4.10.3'){amount.textContent='—';formula.textContent='Méthodes chiffrées non vérifiées pour '+STRATA_CURRENT.meta.current_patch+' ; attendre un modèle du nouveau patch.';return;}
    if(!bonus){amount.textContent='—';formula.textContent='Pas de bonus de raffinerie documenté pour ce minerai.';return;}
    const multiplier=base*(1+bonus.bonus/100);
    if(!Number.isFinite(multiplier)||multiplier<0){amount.textContent='—';formula.textContent='Calcul indisponible.';return;}
    const refined=Math.round((raw*multiplier+Number.EPSILON)*100)/100;
    amount.textContent='≈ '+fmt(refined,{minimumFractionDigits:2,maximumFractionDigits:2})+' SCU';
    formula.textContent=`Estimation communautaire SCMINER 4.10.3, non contractuelle · Méthode : ${fmt(base*100,{maximumFractionDigits:2})} % · Bonus station ${STRATA_VERIFIED?'Strata':'local V15 non resynchronisé'} : ${signed(bonus.bonus)} · Rendement indicatif : ${fmt(multiplier*100,{maximumFractionDigits:2})} %`;
  }
  $('calcOre').value=prospectOre;
  $('calcOre').addEventListener('change',()=>{updateStationOptions();updateEstimate();});
  ['calcMethod','calcStation','calcRaw'].forEach(id=>$(id).addEventListener('input',updateEstimate));
  updateStationOptions();updateEstimate();

  // Farming list: manual targets/progress, shared across both divisions; no guessed blueprint needs.
  const resourcePicker=$('collectResource');
  [...ORES].sort((a,b)=>a.name.localeCompare(b.name,'fr')).forEach(o=>{
    const opt=document.createElement('option');opt.value='mining:'+o.id;opt.textContent=o.name;$('collectOreGroup').appendChild(opt);
  });
  SALVAGE_MATERIALS.forEach(r=>{const opt=document.createElement('option');opt.value=r.id;opt.textContent=r.name;$('collectSalvageGroup').appendChild(opt);});
  function onResourceChoice(){
    const custom=resourcePicker.value==='custom';
    $('customResourceField').classList.toggle('is-hidden',!custom);
    $('collectCustom').required=custom;
    $('collectUnit').value=custom?'unités':'SCU';
  }
  resourcePicker.addEventListener('change',onResourceChoice);
  function openCollection(key){
    if(key&&Array.from(resourcePicker.options).some(o=>o.value===key))resourcePicker.value=key;
    else resourcePicker.value='custom';
    onResourceChoice();
    chooseView('collecte');
    if(resourcePicker.value==='custom')$('collectCustom').focus();else $('collectTarget').focus();
  }
  function materialFromForm(){
    const id=resourcePicker.value;
    if(id==='custom'){
      const name=$('collectCustom').value.trim().replace(/\s+/g,' ').slice(0,80);
      return name?{name,key:'custom:'+name.toLocaleLowerCase('fr'),source:'other'}:null;
    }
    if(id.startsWith('mining:')){
      const ore=lookup.get(id.slice(7));return ore?{key:id,name:ore.name,source:'mining'}:null;
    }
    const mat=SALVAGE_MATERIALS.find(r=>r.id===id);
    return mat?{key:mat.id,name:mat.name,source:'salvage'}:null;
  }
  function validAmount(raw){
    if(String(raw).trim()==='')return null;
    const n=Number(raw);return Number.isFinite(n)&&n>=0&&n<=1000000?n:null;
  }
  function saveCollection(){
    safeLocal.set('collection',collection);
    $('collectionCount').textContent=String(collection.length);
    $('salvageCollectionCount').textContent=String(collection.length);
  }
  const collectionNumber=n=>fmt(n,{maximumFractionDigits:3});
  function renderCollection(){
    saveCollection();
    const done=collection.filter(e=>e.have>=e.target).length;
    $('collectionSummary').textContent=`${collection.length} ressource${collection.length>1?'s':''} · ${done} terminée${done>1?'s':''}`;
    $('collectionItems').innerHTML=collection.length?collection.map(e=>{
      const remaining=Math.max(0,e.target-e.have),finished=remaining<=0;
      const pct=Math.max(0,Math.min(100,e.have/e.target*100));
      const description=[e.project,e.source==='mining'?'Mining':e.source==='salvage'?'Salvage':'Autre'].filter(Boolean).map(escape).join(' · ');
      return `<article class="collection-row" data-item="${escape(e.id)}">
        <div class="collection-head"><div><h3>${escape(e.name)}</h3><small>${description}</small></div><span class="collection-status ${finished?'done':''}">${finished?'Terminé':'À récupérer'}</span></div>
        <div class="collection-progress" role="progressbar" aria-label="Progression ${escape(e.name)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(pct)}"><span class="${finished?'done':''}" style="width:${pct}%"></span></div>
        <div class="collection-controls">
          <div><label for="target-${escape(e.id)}">Objectif (${escape(e.unit)})</label><input id="target-${escape(e.id)}" data-edit-target="${escape(e.id)}" type="number" min="0.001" max="1000000" step="any" value="${e.target}"/></div>
          <div><label for="have-${escape(e.id)}">Récolté (${escape(e.unit)})</label><input id="have-${escape(e.id)}" data-edit-have="${escape(e.id)}" type="number" min="0" max="1000000" step="any" value="${e.have}"/></div>
          <div><label>Reste à récupérer</label><div class="collection-remaining">${collectionNumber(remaining)} ${escape(e.unit)}</div></div>
          <button class="btn compact" type="button" data-finish-item="${escape(e.id)}" ${finished?'disabled':''}>Terminer</button>
          <button class="btn compact ghost danger" type="button" data-remove-item="${escape(e.id)}" aria-label="Supprimer ${escape(e.name)}">Retirer</button>
        </div>
      </article>`;
    }).join(''):'<div class="collection-empty">Aucune demande manuelle.</div>';
  }
  $('collectionForm').addEventListener('submit',e=>{
    e.preventDefault();
    const item=materialFromForm(),target=validAmount($('collectTarget').value);
    if(!item){toast('Indique le nom de la ressource.');$('collectCustom').focus();return;}
    if(target===null||target<=0){toast('Indique une quantité supérieure à zéro.');$('collectTarget').focus();return;}
    const unit=$('collectUnit').value,project=$('collectProject').value.trim().slice(0,70);
    const existing=collection.find(x=>x.key===item.key&&x.unit===unit&&x.project.toLocaleLowerCase('fr')===project.toLocaleLowerCase('fr'));
    if(existing){existing.target=Math.min(1000000,Math.round((existing.target+target)*1000)/1000);toast('Objectif ajouté à la ressource existante');}
    else collection.push({...item,id:'r_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,7),unit,project,target,have:0});
    $('collectTarget').value='10';$('collectProject').value='';$('collectCustom').value='';
    renderCollection();
  });
  $('collectionItems').addEventListener('change',e=>{
    const field=e.target.closest('[data-edit-target],[data-edit-have]');if(!field)return;
    const id=field.dataset.editTarget||field.dataset.editHave;
    const item=collection.find(x=>x.id===id);if(!item)return;
    const n=validAmount(field.value);
    if(n===null||(field.dataset.editTarget&&n<=0)){toast('Quantité invalide.');renderCollection();return;}
    if(field.dataset.editTarget)item.target=n;else item.have=n;
    renderCollection();
  });
  $('collectionItems').addEventListener('click',e=>{
    const remove=e.target.closest('[data-remove-item]');if(remove){collection=collection.filter(x=>x.id!==remove.dataset.removeItem);renderCollection();return;}
    const finish=e.target.closest('[data-finish-item]');if(finish){const item=collection.find(x=>x.id===finish.dataset.finishItem);if(item){item.have=item.target;renderCollection();}}
  });
  $('exportCollection').addEventListener('click',()=>{
    if(!collection.length){toast('Liste vide');return;}
    exportCSV('Z-Team_Liste_Collecte.csv',[['Ressource','Division','Projet','Unité','Objectif','Récolté','Reste'],...collection.map(e=>[e.name,e.source,e.project,e.unit,e.target,e.have,Math.max(0,e.target-e.have)])]);
  });
  $('clearCollection').addEventListener('click',()=>{
    if(collection.length&&window.confirm('Effacer toute la liste de collecte de cet appareil ?')){collection=[];renderCollection();}
  });
  onResourceChoice();renderCollection();

  // Crafting Division · source: public game-file export from SeekND/Forge.
  // Entire catalog is downloaded on first connection and saved in IndexedDB.
  const CRAFT_DATA_URL='./data/crafting_data.json';
  const CRAFT_IMAGE_API='https://starcitizen.tools/api.php';
  let craftMetaStamp='';
  let craftThumbCache=safeLocal.get('craftThumbCache',{});
  if(!craftThumbCache||typeof craftThumbCache!=='object'||Array.isArray(craftThumbCache))craftThumbCache={};
  function craftMetaFrom(data){return [data?.meta?.data_updated||'',data?.meta?.current_patch||data?.meta?.patch||''].join('|');}
  function saveCraftThumbCache(){safeLocal.set('craftThumbCache',craftThumbCache);}
  async function fetchCraftThumb(name){const key=String(name||'').trim().toLowerCase();if(!key)return null; if(Object.prototype.hasOwnProperty.call(craftThumbCache,key))return craftThumbCache[key]||null; try{const u=CRAFT_IMAGE_API+'?origin=*&action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=480&titles='+encodeURIComponent(name); const ctrl=new AbortController();const stop=setTimeout(()=>ctrl.abort(),4500);let r;try{r=await fetch(u,{mode:'cors',cache:'force-cache',signal:ctrl.signal});}finally{clearTimeout(stop);} if(!r.ok)throw Error('HTTP '+r.status); const data=await r.json(); const pages=data&&data.query&&data.query.pages?Object.values(data.query.pages):[]; const src=(pages.find(p=>p&&p.thumbnail&&p.thumbnail.source)||{}).thumbnail?.source||''; craftThumbCache[key]=src; saveCraftThumbCache(); return src||null;}catch(e){return null;}}
  async function updateCraftThumb(){const b=craftMap.get(craftSelected); const wrap=$('craftThumb'); if(!wrap)return; const img=$('craftThumbImg'); const cap=$('craftThumbCaption'); if(!b){wrap.classList.add('empty'); if(img)img.removeAttribute('src'); if(cap)cap.textContent=''; return;} wrap.classList.add('empty');if(img)img.removeAttribute('src'); if(cap)cap.textContent='Aperçu en ligne'; const current=b.id; const src=await fetchCraftThumb(b.name); if(craftSelected!==current)return; if(src){img.onerror=()=>{wrap.classList.add('empty');if(cap)cap.textContent='Visuel indisponible';};img.src=src; img.alt='Illustration de '+b.name; wrap.classList.remove('empty'); if(cap)cap.textContent='Aperçu du blueprint';} else {img.removeAttribute('src'); wrap.classList.add('empty'); if(cap)cap.textContent='Aucun visuel trouvé';}}

  let craftEntries=[],craftMap=new Map(),craftSelected=null,craftShown=65;
  let craftLoading=null,craftReady=false,craftOrigin='';
  let craftSets=new Map(),craftQualityInput=new Map(),dismSelected=null,dismShown=65;
  let craftPlan=safeLocal.get('craftBlueprintPlan',[]);
  craftPlan=Array.isArray(craftPlan)?craftPlan.filter(x=>x&&typeof x.id==='string'&&Number.isFinite(x.qty)&&x.qty>0&&x.qty<=9999).slice(0,250):[];
  // Multi-project planner — each project stores blueprint ids only. Stock stays device-wide.
  const cleanPlan=items=>Array.isArray(items)?items.filter(x=>x&&typeof x.id==='string'&&x.id.length<240&&Number.isInteger(Number(x.qty))&&Number(x.qty)>0&&Number(x.qty)<=9999).slice(0,250).map(x=>({id:x.id,qty:Number(x.qty),name:String(x.name||'').slice(0,150)})):[];
  let craftProjects=safeLocal.get('craftProjectsV154',null);
  if(!Array.isArray(craftProjects)||!craftProjects.length)craftProjects=[{id:'principal',name:'Projet principal',items:cleanPlan(craftPlan)}];
  craftProjects=craftProjects.filter(x=>x&&typeof x.id==='string'&&typeof x.name==='string'&&Array.isArray(x.items)).slice(0,25).map(x=>({id:x.id.slice(0,60),name:x.name.slice(0,70),items:cleanPlan(x.items)}));
  if(!craftProjects.length)craftProjects=[{id:'principal',name:'Projet principal',items:[]}];
  let activeProjectId=safeLocal.get('craftActiveProjectV154','principal');
  if(!craftProjects.some(x=>x.id===activeProjectId))activeProjectId=craftProjects[0].id;
  craftPlan=cleanPlan(craftProjects.find(x=>x.id===activeProjectId).items);
  const procureOverrides=safeLocal.get('procureOverridesV154',{}),procureTracking=safeLocal.get('procureTrackingV154',{});
  const procOverrides=(procureOverrides&&typeof procureOverrides==='object'&&!Array.isArray(procureOverrides))?procureOverrides:{};
  const procTracking=(procureTracking&&typeof procureTracking==='object'&&!Array.isArray(procureTracking))?procureTracking:{};
  let procSystem=safeLocal.get('procureSystemV154','all');
  if(!['all','S','P','N'].includes(procSystem))procSystem='all';
  let craftStock=safeLocal.get('craftResourceStock',{});
  if(!craftStock||typeof craftStock!=='object'||Array.isArray(craftStock))craftStock={};
  let craftLots=safeLocal.get('craftQualityLots',[]);
  if(!Array.isArray(craftLots))craftLots=[];
  craftLots=craftLots.filter(x=>x&&typeof x.key==='string'&&Number.isFinite(x.qty)&&x.qty>0&&Number.isInteger(x.quality)&&x.quality>=0&&x.quality<=1000).slice(0,400);
  const craftKinds={armor_pieces:'Armures',weapons:'Armes FPS',ship_weapons:'Armes de vaisseau',ship_components:'Composants de vaisseau',backpacks:'Sacs à dos',undersuits:'Sous-combinaisons',undersuit_helmets:'Casques',flightsuits:'Combinaisons',flightsuit_helmets:'Casques de vol',armor_sets:'Ensembles'};
  const oreLexicon=new Set(ORES.flatMap(o=>[o.name,o.alias].filter(Boolean).map(x=>x.trim().toLowerCase())));
  const salvageLexicon=new Set(['rmc','recycled material composite','construction materials','construction material','cm','rubble','pieces','salvage']);
  const fmtCraft=n=>fmt(n,{maximumFractionDigits:3});
  const numCraft=(v)=>{const n=Number(v);return Number.isFinite(n)&&n>=0&&n<=1e9?n:0;};
  function craftKind(name){return craftKinds[name]||name;}
  function craftMaterialClass(name){const n=String(name).trim().toLowerCase();return oreLexicon.has(n)?'Mining':salvageLexicon.has(n)?'Salvage':'Autre';}
  function craftMaterialKey(name,unit){return unit+'|'+String(name).trim().toLowerCase();}
  // Stock qualifié : les lots sont consommés virtuellement, sans modifier les quantités enregistrées.
  // Priorité aux recettes les plus exigeantes, puis au lot de plus faible qualité admissible.
  function plannedRequirements(){
    const lines=[];
    for(const p of craftPlan){const b=craftMap.get(p.id);if(!b)continue;
      for(const r of b.recipe){lines.push({key:craftMaterialKey(r.name,r.unit),name:r.name,unit:r.unit,qty:r.qty*p.qty,quality:r.quality||0});}
    }
    return lines;
  }
  function allocateCraftStock(){
    const lines=plannedRequirements(),grouped=new Map();
    for(const r of lines){if(!grouped.has(r.key))grouped.set(r.key,[]);grouped.get(r.key).push(r);}
    const result=new Map();
    for(const [key,requirements] of grouped){
      const lots=craftLots.filter(x=>x.key===key).map(x=>({qty:x.qty,quality:x.quality})).sort((a,b)=>a.quality-b.quality);
      let unknown=numCraft(craftStock[key]),done=0,missing=0,unverified=0,total=0;
      const byQuality=new Map();
      for(const req of requirements){byQuality.set(req.quality,(byQuality.get(req.quality)||0)+req.qty);total+=req.qty;}
      for(const quality of [...byQuality.keys()].sort((a,b)=>b-a)){
        let remaining=byQuality.get(quality),provided=0;
        for(const lot of lots){if(remaining<=1e-8)break;if(lot.quality<quality)continue;const used=Math.min(remaining,lot.qty);lot.qty-=used;remaining-=used;provided+=used;}
        if(quality===0 && remaining>0){const used=Math.min(unknown,remaining);unknown-=used;remaining-=used;provided+=used;}
        if(quality>0&&remaining>0&&unknown>0){unverified+=Math.min(remaining,unknown);}
        done+=provided;missing+=remaining;
      }
      result.set(key,{key,total,done,missing:Math.max(0,missing),unverified});
    }
    return result;
  }
  function renderCraftLots(){
    if(!$('craftLotResource'))return;
    const all=[...new Map(craftEntries.flatMap(b=>b.recipe.filter(r=>r.unit==='cSCU').map(r=>[craftMaterialKey(r.name,r.unit),r.name]))).entries()].sort((a,b)=>a[1].localeCompare(b[1],'fr'));
    const selected=$('craftLotResource').value;
    $('craftLotResource').innerHTML='<option value="">Choisir un matériau</option>'+all.map(([key,name])=>`<option value="${escape(key)}">${escape(name)}</option>`).join('');
    if(all.some(([key])=>key===selected))$('craftLotResource').value=selected;
    $('craftLotList').innerHTML=craftLots.length?craftLots.map((l,i)=>`<div class="craft-lot-pill"><span>${escape(all.find(([k])=>k===l.key)?.[1]||l.key)} · ${fmtCraft(l.qty)} cSCU · Q${l.quality}</span><button class="btn compact ghost danger" type="button" data-remove-lot="${i}" aria-label="Retirer ce lot">✕</button></div>`).join(''):'<span class="muted">Aucun lot qualifié renseigné.</span>';
  }

  function craftRecipeEntries(recipe){
    const arr=Array.isArray(recipe)?recipe:[];
    return arr.map(r=>{
      const mat=String(r.material||'').trim(),item=String(r.item_name||'').trim();
      if(mat&&Number(r.amount_cscu)>0)return {name:mat,qty:Number(r.amount_cscu),unit:'cSCU',quality:Number(r.min_quality)||null,slot:String(r.slot||''),rawOre:String(r.raw_ore||''),catalyst:!!r.is_catalyst};
      if(item&&Number(r.item_quantity)>0)return {name:item,qty:Number(r.item_quantity),unit:'unités',quality:null,slot:String(r.slot||''),rawOre:'',catalyst:!!r.is_catalyst};
      return null;
    }).filter(Boolean);
  }
  function normalizeCraftData(data){
    if(!data||typeof data!=='object'||!Array.isArray(data.weapons))throw Error('Format de catalogue incompatible. Attendu : export Forge avec recettes et sources.');
    craftSets=new Map();
    for(const set of (Array.isArray(data.armor_sets)?data.armor_sets:[])){
      if(!set||!set.set_name)continue;
      craftSets.set(String(set.set_name),{name:String(set.set_name),pieces:(Array.isArray(set.pieces)?set.pieces:[]).map(p=>String(p.name||'')).filter(Boolean)});
    }
    const arr=[];
    for(const key of Object.keys(craftKinds)){
      if(key==='armor_sets')continue; // Sets are groupings of the individual, already counted blueprints.
      for(const b of Array.isArray(data[key])?data[key]:[]){
        const name=String(b.name||'').trim();
        if(!name||name.includes('[Unknown')||name.includes('PLACEHOLDER'))continue;
        const id=key+'|'+name;
        const rec=craftRecipeEntries(b.recipe);
        const sources=(Array.isArray(b.sources)?b.sources:[]).filter(x=>x&&typeof x==='object');
        arr.push({id,name,kind:key,category:craftKind(key),manufacturer:String(b.manufacturer||''),time:Number(b.craft_time_seconds)||0,recipe:rec,sources,obtainable:b.is_obtainable!==false,setName:String(b.set_name||''),raw:b});
      }
    }
    if(arr.length<100)throw Error('Le fichier ne contient pas un catalogue complet de blueprints.');
    const ids=new Set();craftEntries=arr.filter(b=>{if(ids.has(b.id))return false;ids.add(b.id);return true;}).sort((a,b)=>a.name.localeCompare(b.name,'fr'));
    craftMap=new Map(craftEntries.map(b=>[b.id,b]));
    if(craftSelected&&!craftMap.has(craftSelected))craftSelected=null;
    craftReady=true;
    const presentKinds=[...new Set(craftEntries.map(x=>x.category))].sort((a,b)=>a.localeCompare(b,'fr'));
    const old=$('craftCategory').value;
    $('craftCategory').innerHTML='<option value="all">Tous les types</option>'+presentKinds.map(c=>`<option value="${escape(c)}">${escape(c)}</option>`).join('');
    if(presentKinds.includes(old))$('craftCategory').value=old;
    $('craftPatchLabel').textContent=String(data.meta?.current_patch||data.meta?.patch||data.meta?.game_version||data.meta?.version||'Catalogue issu des données de jeu');
    $('craftDataStatus').textContent=`${fmt(craftEntries.length)} blueprints chargés · ${craftOrigin}`;
    renderCraftLots();renderCrafting();renderDismantle();
  }
  function craftStore(mode,value){
    return new Promise((resolve,reject)=>{
      if(!window.indexedDB){resolve(null);return;}
      try{
        const open=indexedDB.open('ZTeamCraftData',1);
        open.onupgradeneeded=()=>{if(!open.result.objectStoreNames.contains('cache'))open.result.createObjectStore('cache');};
        open.onerror=()=>reject(open.error);
        open.onsuccess=()=>{
          const db=open.result,tx=db.transaction('cache',mode==='get'?'readonly':'readwrite');
          const req=mode==='get'?tx.objectStore('cache').get('catalog'):tx.objectStore('cache').put(value,'catalog');
          req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>reject(req.error);
          tx.oncomplete=()=>db.close();
        };
      }catch(e){reject(e);}
    });
  }
  async function loadCraftCatalog(force=false){
    if(craftLoading)return craftLoading;
    if(craftReady&&!force)return;
    craftLoading=(async()=>{
      $('craftDataStatus').textContent=force?'Vérification de la version publiée…':'Chargement du catalogue…';
      try{
        const source='./data/crafting_data.json';
        const ctrl=new AbortController();
        const stop=setTimeout(()=>ctrl.abort(),14000);
        let response;
        try{response=await fetch(source,{cache:'no-store',signal:ctrl.signal});}
        finally{clearTimeout(stop);}
        if(!response.ok)throw Error('HTTP '+response.status);
        const data=await response.json();
        // The parser validates the full catalogue before it replaces the current state.
        craftOrigin='copie publiée Forge';normalizeCraftData(data);
        await craftStore('set',data).catch(()=>{});
        window.ZTEAM_CRAFT_READY=true;
        window.dispatchEvent(new Event('zteam-catalog-changed'));
        if(force)toast('Catalogue publié vérifié');
      }catch(e){
        try{
          const cached=await craftStore('get');
          if(cached){
            craftOrigin='copie navigateur (hors ligne)';normalizeCraftData(cached);
            window.ZTEAM_CRAFT_READY=true;
            window.dispatchEvent(new Event('zteam-catalog-changed'));
            if(force)toast('Site indisponible : copie locale conservée');
            return;
          }
        }catch(_cacheError){}
        if(craftReady){
          $('craftDataStatus').textContent=`${fmt(craftEntries.length)} blueprints · ${craftOrigin} · aucune nouvelle donnée validée`;
          return;
        }
        $('craftDataStatus').textContent='Catalogue non encore publié ou inaccessible. Réessayer plus tard.';
        $('craftList').innerHTML='<div class="muted">Le catalogue Forge sera installé automatiquement par le site. Si la publication est en cours, réessaye après sa fin.</div>';
      }
    })();
    try{await craftLoading;}finally{craftLoading=null;}
  }
  function craftFiltered(){
    const q=$('craftQuery').value.toLocaleLowerCase('fr').trim(),cat=$('craftCategory').value;
    return craftEntries.filter(b=>{
      if(cat!=='all'&&b.category!==cat)return false;
      if(!q)return true;
      return [b.name,b.manufacturer,b.category,...b.recipe.flatMap(r=>[r.name,r.rawOre]),...b.sources.map(s=>String(s.mission||s.name||s.contract||''))].some(v=>v.toLocaleLowerCase('fr').includes(q));
    });
  }
  function craftTime(t){if(!t)return '';if(t<60)return `${Math.round(t)} s`;return t>=3600?`${Math.floor(t/3600)} h ${Math.round(t%3600/60)} min`:`${Math.round(t/60)} min`;}
  function renderCrafting(){
    if(!craftReady){renderCraftPlan();renderCraftNeeds();return;}
    const arr=craftFiltered();
    $('craftResultCount').textContent=`${fmt(arr.length)} / ${fmt(craftEntries.length)}`;
    $('craftList').innerHTML=arr.slice(0,craftShown).map(b=>`<button class="craft-list-row ${craftSelected===b.id?'active':''}" type="button" data-craft-select="${escape(b.id)}"><span><strong>${escape(b.name)}</strong><small>${escape(b.category)}${b.manufacturer?' · '+escape(b.manufacturer):''}</small></span>${b.sources.length?'<span class="badge">Mission</span>':''}</button>`).join('')||'<div class="muted">Aucun blueprint trouvé.</div>';
    $('craftMore').classList.toggle('is-hidden',arr.length<=craftShown);
    renderCraftDetail();renderCraftPlan();renderCraftNeeds();
  }
  function craftSourceLabel(s){
    if(s.type==='DEFAULT')return 'Blueprint disponible par défaut';
    const m=String(s.mission||s.contract||s.name||s.mission_name||'').trim();
    const contractor=String(s.contractor||s.faction||s.giver||'').trim();
    const location=String(s.location||s.system||'').trim();
    const chance=Number(s.probability);
    const probability=s.probability!==null&&s.probability!==undefined&&Number.isFinite(chance)&&chance>0?` · ${fmtCraft(chance)} % de chance`:'';
    return ([m,contractor&&contractor!==m?contractor:'',location].filter(Boolean).join(' · ')||'Source non précisée')+probability;
  }
  function craftMaterialAction(name){
    const n=String(name||'').toLowerCase().trim(),actions=[];
    const found=ORES.find(o=>[o.name,o.alias].filter(Boolean).some(x=>String(x).toLowerCase()===n));
    if(found)actions.push(`<button class="btn compact" type="button" data-open-ore="${escape(found.id)}">Minage : ${escape(found.name)}</button>`);
    else if(salvageLexicon.has(n))actions.push('<button class="btn compact" type="button" data-open-salvage="1">Salvage</button>');
    const related=craftReady && craftEntries.some(b=>['armor_pieces','weapons','backpacks','undersuits','flightsuits'].includes(b.kind) && b.recipe.some(r=>String(r.name).toLowerCase()===n));
    if(related)actions.push(`<button class="btn compact ghost" type="button" data-open-dism-material="${escape(name)}">Recherche démontage</button>`);
    return actions.join('');
  }
  function craftQualityKey(id,idx){return id+'|'+idx;}
  function craftQualitySummary(b){
    const inputs=b.recipe.filter(r=>r.unit==='cSCU');
    if(!inputs.length)return 'Aucune qualité de matériau à renseigner.';
    const assigned=b.recipe.map((r,i)=>r.unit==='cSCU'?craftQualityInput.get(craftQualityKey(b.id,i)):null).filter(x=>Number.isFinite(x));
    const failing=b.recipe.some((r,i)=>r.unit==='cSCU'&&r.quality&&Number.isFinite(craftQualityInput.get(craftQualityKey(b.id,i)))&&craftQualityInput.get(craftQualityKey(b.id,i))<r.quality);
    if(!assigned.length)return 'Renseigne les qualités Q0–Q1000 pour vérifier les minimums de la recette. Les statistiques finales sont affichées par le fabricant dans le jeu.';
    return `${assigned.length}/${inputs.length} qualité(s) saisie(s) · ${failing?'Au moins une valeur sous le minimum requis.':'Minimums vérifiés pour les valeurs renseignées.'} Les caractéristiques de sortie dépendent de chaque emplacement ; aucune statistique non documentée n’est simulée.`;
  }
  function renderCraftDetail(){
    const b=craftMap.get(craftSelected);
    if(!b){$('craftDetail').innerHTML='<p class="muted">Sélectionne un blueprint dans la liste.</p>';return;}
    const sourceText=b.sources.length?`<ul class="craft-sources">${b.sources.map(s=>`<li>${escape(craftSourceLabel(s))}</li>`).join('')}</ul>`:
      `<p class="muted">${b.obtainable?'Aucune mission précise documentée dans ce catalogue.':'Aucun moyen d’obtention indiqué pour ce blueprint.'}</p>`;
    const slots=b.recipe.map((r,i)=>{
      const q=craftQualityInput.get(craftQualityKey(b.id,i));
      return `<div class="craft-slot"><div><strong>${escape(r.name)}</strong>${r.slot?`<small>Emplacement : ${escape(r.slot)}</small>`:''}${r.rawOre?`<small>Minerai brut : ${escape(r.rawOre)}</small>`:''}${r.quality?`<small>Qualité minimale : Q${r.quality}</small>`:''}</div><span class="qty">${fmtCraft(r.qty)} ${escape(r.unit)}</span>${r.unit==='cSCU'?`<label>Qualité prévue (Q0–1000)<input type="number" min="0" max="1000" step="1" value="${Number.isFinite(q)?q:''}" placeholder="Q…" data-craft-quality="${i}" aria-label="Qualité pour ${escape(r.name)}"/></label>`:''}</div>`;
    }).join('');
    let setHtml='';
    if(b.setName&&craftSets.has(b.setName)){
      const set=craftSets.get(b.setName),related=set.pieces.filter(name=>craftMap.has('armor_pieces|'+name));
      if(related.length>1){setHtml=`<div class="craft-set-panel"><strong>Ensemble ${escape(set.name)}</strong><ul>${related.map(name=>`<li>${escape(name)}</li>`).join('')}</ul><button class="btn compact" type="button" data-craft-add-set="${escape(set.name)}">Ajouter toutes les pièces au plan</button></div>`;}
    }
    const links=[...new Set(b.recipe.map(r=>r.name))].map(craftMaterialAction).filter(Boolean).join('');
    $('craftDetail').innerHTML=`<div class="craft-detail-showcase"><div class="craft-thumb empty" id="craftThumb"><img id="craftThumbImg" alt="" loading="lazy"/><div class="craft-thumb-fallback">Aperçu du blueprint</div><div class="craft-thumb-caption" id="craftThumbCaption">Aperçu en ligne</div></div><div class="craft-detail-summary"><div class="craft-detail-head"><div><h3>${escape(b.name)}</h3><span class="muted">${escape(b.category)}${b.manufacturer?' · '+escape(b.manufacturer):''}</span></div><span class="badge ${b.obtainable?'good':'warning'}">${b.obtainable?'Blueprint répertorié':'Obtention non confirmée'}</span></div><div class="craft-detail-meta">${b.time?`<span class="badge">Fabrication : ${craftTime(b.time)}</span>`:''}<span class="badge">${b.recipe.length} ingrédient${b.recipe.length>1?'s':''}</span></div></div></div>
      <h4 class="craft-detail-title">Recette et qualités</h4>
      ${slots?`<div class="craft-slot-table">${slots}</div>`:'<p class="muted">Recette non renseignée dans cet export.</p>'}
      <p class="craft-quality-summary" id="craftQualitySummary">${escape(craftQualitySummary(b))}</p>
      <p class="muted" style="font-size:12px">Les qualités indiquées servent à vérifier les seuils de la recette, pas à prédire des statistiques d’objet non documentées. Les lots de ressources se gèrent dans le Plan de fabrication.</p>
      ${links?`<div class="craft-link-actions">${links}</div>`:''}
      <h4 class="craft-detail-title">Missions et obtention du blueprint</h4>${sourceText}
      ${setHtml}
      ${b.recipe.length?`<div class="craft-add-row"><div class="field"><label class="field-label" for="craftAddQty">Exemplaires</label><input type="number" min="1" max="9999" step="1" value="1" id="craftAddQty"/></div><button class="btn primary" id="craftAdd" type="button">Ajouter au plan</button></div>`:''}`;
    updateCraftThumb();
  }
  function saveCraftPlan(){
    safeLocal.set('craftBlueprintPlan',craftPlan); // keeps legacy interoperability
    const p=craftProjects.find(x=>x.id===activeProjectId);
    if(p)p.items=cleanPlan(craftPlan);
    safeLocal.set('craftProjectsV154',craftProjects);
    safeLocal.set('craftActiveProjectV154',activeProjectId);
    renderProjectPicker();
  }
  function needTotals(){
    const totals=new Map();
    for(const p of craftPlan){
      const b=craftMap.get(p.id);if(!b)continue;
      for(const r of b.recipe){
        const key=craftMaterialKey(r.name,r.unit),target=r.qty*p.qty;
        if(!totals.has(key))totals.set(key,{key,name:r.name,unit:r.unit,target:0,quality:0,origin:craftMaterialClass(r.name),rawOre:r.rawOre||''});
        const e=totals.get(key);e.target+=target;e.quality=Math.max(e.quality,r.quality||0);if(!e.rawOre&&r.rawOre)e.rawOre=r.rawOre;
      }
    }
    return [...totals.values()].sort((a,b)=>a.origin.localeCompare(b.origin)||a.name.localeCompare(b.name,'fr'));
  }
  function renderCraftPlan(){
    saveCraftPlan();
    const estimatedSeconds=craftPlan.reduce((total,p)=>total+(craftMap.get(p.id)?.time||0)*p.qty,0);
    $('craftPlan').innerHTML=craftPlan.length?craftPlan.map(p=>{
      const b=craftMap.get(p.id),name=b?.name||p.name||p.id;
      return `<div class="craft-order-line"><div><strong>${escape(name)}</strong><small>${b?escape(b.category):'Recette absente du catalogue chargé'}</small></div><div><label class="field-label" for="cq-${escape(p.id)}">Nombre</label><input aria-label="Quantité de ${escape(name)}" id="cq-${escape(p.id)}" type="number" min="1" max="9999" step="1" data-craft-qty="${escape(p.id)}" value="${p.qty}"/></div><button type="button" class="btn compact ghost danger" data-craft-remove="${escape(p.id)}">Retirer</button></div>`;
    }).join('')+`<p class="muted">Durée totale indicative : ${estimatedSeconds?craftTime(estimatedSeconds):'non renseignée'} (les opérations en parallèle ne sont pas déduites).</p>`:'<p class="muted">Aucune fabrication prévue. Choisis un blueprint et ajoute-le au plan.</p>';
  }
  function needHtml(items){
    if(!craftPlan.length)return '<p class="muted">Aucun besoin calculé. Ajoute des blueprints dans la Crafting Division.</p>';
    if(!craftReady)return '<p class="muted">Charge le catalogue pour recalculer les ingrédients. Le plan de fabrication est conservé sur cet appareil.</p>';
    const allocation=allocateCraftStock();
    return items.map(x=>{
      const a=allocation.get(x.key)||{total:x.target,done:0,missing:x.target,unverified:0};
      const stock=numCraft(craftStock[x.key]);
      const source=x.origin==='Mining'?'À miner / raffiner':x.origin==='Salvage'?'À récupérer':'À obtenir';
      const state=a.missing<=1e-8?'Prêt pour la fabrication':a.unverified>0?'Qualité du stock à vérifier':'À récupérer';
      const cls=a.missing<=1e-8?'craft-chip-ok':'craft-chip-warn';
      return `<div class="craft-need-line"><div><strong>${escape(x.name)}</strong><small>${source}${x.quality?' · Q min. '+x.quality:''}</small><span class="craft-need-status ${cls}">${state}</span><div class="craft-link-actions">${craftMaterialAction(x.name)}</div></div><div class="craft-need-quantity">${fmtCraft(a.total)} ${escape(x.unit)}<b>${fmtCraft(a.missing)} restant${a.missing>1?'s':''}</b><span class="hint">${fmtCraft(a.done)} couvert par le stock compatible</span></div><label class="craft-stock"><span class="muted" style="font-size:11px">Stock sans qualité</span><input type="number" data-craft-stock="${escape(x.key)}" min="0" max="100000000" step="any" value="${stock}" aria-label="Stock sans qualité de ${escape(x.name)}"/><span class="stock-desc">Utilisable seulement si Q non exigée</span></label></div>`;
    }).join('')||'<p class="muted">Les blueprints sélectionnés n’ont aucune ressource chiffrée documentée.</p>';
  }
  function renderCraftNeeds(){
    const needs=needTotals();$('craftTotal').textContent=`${needs.length} ressource${needs.length>1?'s':''}`;
    const html=needHtml(needs);$('craftNeeds').innerHTML=html;$('craftNeedsShared').innerHTML=html;
    renderProcurement(needs);
  }

  // V15.4 — one craft plan, three collection activities, and an explicit unverified queue.
  const plannerKey=key=>`${activeProjectId}|${key}`;
  const flatName=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().toLowerCase();
  function renderProjectPicker(){
    const sel=$('ztProjectSelect');if(!sel)return;
    const old=sel.value;
    const codes=craftProjects.map(p=>p.id+'|'+p.name).join('~');
    if(sel.dataset.codes!==codes){sel.innerHTML=craftProjects.map(p=>`<option value="${escape(p.id)}">${escape(p.name)}</option>`).join('');sel.dataset.codes=codes;}
    if(sel.value!==activeProjectId)sel.value=activeProjectId;
  }
  function addProject(name,items=[]){
    if(craftProjects.length>=25){toast('Limite de 25 projets.');return;}
    const id='p_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,8);
    craftProjects.push({id,name:String(name||'Nouveau projet').slice(0,70),items:cleanPlan(items)});
    activeProjectId=id;craftPlan=cleanPlan(items);renderCraftPlan();renderCraftNeeds();toast('Projet sélectionné');
  }
  $('ztProjectSelect').addEventListener('change',e=>{
    const p=craftProjects.find(x=>x.id===e.target.value);if(!p)return;
    activeProjectId=p.id;craftPlan=cleanPlan(p.items);renderCraftPlan();renderCraftNeeds();
  });
  $('ztProjectNew').addEventListener('click',()=>{
    const name=prompt('Nom du nouveau projet (70 caractères maximum) :','Nouvelle opération');if(name===null)return;
    if(!name.trim())return toast('Indique un nom de projet.');addProject(name.trim());
  });
  $('ztProjectRename').addEventListener('click',()=>{
    const p=craftProjects.find(x=>x.id===activeProjectId);if(!p)return;
    const name=prompt('Renommer le projet :',p.name);if(!name?.trim())return;
    p.name=name.trim().slice(0,70);renderCraftPlan();renderCraftNeeds();
  });
  $('ztProjectDuplicate').addEventListener('click',()=>{
    const p=craftProjects.find(x=>x.id===activeProjectId);if(p)addProject(p.name+' (copie)',p.items);
  });
  $('ztProjectDelete').addEventListener('click',()=>{
    if(craftProjects.length===1)return toast('Conserve au moins un projet.');
    if(!confirm('Supprimer ce projet local et sa liste de blueprints ?'))return;
    craftProjects=craftProjects.filter(p=>p.id!==activeProjectId);
    activeProjectId=craftProjects[0].id;craftPlan=cleanPlan(craftProjects[0].items);renderCraftPlan();renderCraftNeeds();
  });
  function oreForRequirement(need){
    const names=[need.rawOre,need.name].filter(Boolean);
    for(const raw of names){
      const formatted=String(raw).replace(/\s*\((raw|ore)\)\s*$/i,'').trim();
      const id=oreIdFromStrata(formatted);
      const found=ORES.find(o=>o.id===id||[o.name,o.alias].filter(Boolean).some(x=>flatName(x)===flatName(formatted)));
      if(found)return found;
    }
    return null;
  }
  function inferredMethod(need){
    if(oreForRequirement(need))return 'mining';
    if(salvageLexicon.has(String(need.name).trim().toLowerCase()))return 'salvage';
    return 'unknown';
  }
  function methodForNeed(need){
    const override=procOverrides[plannerKey(need.key)];
    return ['mining','salvage','dismantle','unknown'].includes(override)?override:inferredMethod(need);
  }
  function destinationsFor(ore){
    if(!ore||!STRATA_VERIFIED)return [];
    const sites=[];
    const bySys=profile(ore.id)?.locations||{};
    for(const [sys,places] of Object.entries(bySys)){
      if(procSystem!=='all'&&sys!==procSystem)continue;
      for(const loc of places){
        if(!Number.isFinite(Number(loc.index)))continue;
        sites.push({system:sys,name:loc.name,abundance:Number(loc.index),confirmed:loc.confirmed===true});
      }
    }
    return sites.sort((a,b)=>b.abundance-a.abundance||a.name.localeCompare(b.name,'fr')).slice(0,3);
  }
  function refineryFor(ore){
    if(!ore||!STRATA_VERIFIED)return null;
    return bonusRows(ore.id).filter(x=>procSystem==='all'||x.system===procSystem)[0]||null;
  }
  function dismantleCandidates(name){
    if(!craftReady)return [];
    const lower=flatName(name);
    return craftEntries.filter(b=>['armor_pieces','weapons','backpacks','undersuits','flightsuits'].includes(b.kind)&&b.recipe.some(r=>flatName(r.name)===lower)).slice(0,3);
  }
  function procurementRows(needs=needTotals()){
    if(!craftReady)return [];
    const allocations=allocateCraftStock();
    return needs.map(need=>{
      const a=allocations.get(need.key)||{total:need.target,done:0,missing:need.target,unverified:0};
      const method=methodForNeed(need),ore=oreForRequirement(need);
      const info=procTracking[plannerKey(need.key)]||{};
      return {...need,method,detected:inferredMethod(need),ore,sites:method==='mining'?destinationsFor(ore):[],refinery:method==='mining'?refineryFor(ore):null,
        candidates:method==='dismantle'||method==='unknown'?dismantleCandidates(need.name):[],...a,
        owner:String(info.owner||'').slice(0,60),tracked:Number.isFinite(Number(info.tracked))?Math.max(0,Math.min(1e8,Number(info.tracked))):0};
    }).filter(r=>r.missing>1e-8).sort((a,b)=>a.method.localeCompare(b.method)||a.name.localeCompare(b.name,'fr'));
  }
  const methodLabels={mining:'À miner / raffiner',salvage:'À salvager',dismantle:'À démonter (à confirmer)',unknown:'Autres / à identifier'};
  function locationInfo(row){
    if(row.method==='mining'){
      if(!row.ore)return 'Matière brute non identifiée : lieu et méthode à vérifier.';
      if(!STRATA_VERIFIED)return 'Carte de minage indisponible : Strata non chargé ou non validé.';
      const places=row.sites.map(x=>`${x.name} (${SYSTEMS[x.system]}, abondance relative ${fmtCraft(x.abundance)} %${x.confirmed?' · confirmée':' · communautaire'})`);
      const refinery=row.refinery?` · Bonus de station ${stationLabel(row.refinery)} : ${signed(row.refinery.bonus)}`:'';
      return places.length?`Sites : ${places.join(' ; ')}${refinery}`:`Aucun emplacement renseigné pour ${procSystem==='all'?'les systèmes connus':SYSTEMS[procSystem]}.`;
    }
    if(row.method==='salvage')return 'Matériau associé au Salvage. Source exacte et rendement à confirmer sur place ; capacités de vaisseaux consultables dans Salvage.';
    if(row.method==='dismantle')return 'Piste de démontage non validée : la recette de fabrication ne prouve pas la quantité réellement récupérable.';
    return 'Origine à déterminer : aucune méthode fiable identifiée à partir des sources publiées.';
  }
  function candidateInfo(row){
    return row.candidates.length?`Objets possédant ce matériau dans leur <em>recette</em> (aucun rendement de démontage garanti) : ${row.candidates.map(c=>escape(c.name)).join(' · ')}`:'';
  }
  function renderProcurement(needs=needTotals()){
    const panel=$('ztProcList');if(!panel)return;
    $('ztProcSystem').value=procSystem;
    if(!craftPlan.length){$('ztProcSummary').innerHTML='';$('ztProcPrereq').innerHTML='';$('ztProcRoute').innerHTML='';panel.innerHTML='<p class="muted">Ajoute au moins un blueprint au plan pour calculer les sorties.</p>';return;}
    if(!craftReady){$('ztProcSummary').innerHTML='';$('ztProcPrereq').innerHTML='';$('ztProcRoute').innerHTML='';panel.innerHTML='<p class="muted">Catalogue Forge non disponible : plan sauvegardé, calcul des courses impossible.</p>';return;}
    const rows=procurementRows(needs);
    const missions=craftPlan.map(p=>({item:craftMap.get(p.id),quantity:p.qty,name:p.name||p.id})).filter(x=>x.item&&x.item.sources.length);
    $('ztProcPrereq').innerHTML=missions.length?`<div class="zt-proc-recap"><strong>Blueprints et missions à vérifier</strong><ul>${missions.slice(0,12).map(x=>`<li>${escape(x.item.name)} — ${escape(x.item.sources.slice(0,2).map(craftSourceLabel).join(' / '))}</li>`).join('')}</ul><small>Présence dans le catalogue ≠ blueprint déjà débloqué sur ton compte.</small></div>`:'';
    // Coverage is an operational grouping only, not a geographic shortest-route claim.
    const overlaps=new Map();
    for(const r of rows.filter(x=>x.method==='mining'))for(const z of r.sites){
      const key=z.system+'|'+z.name;const info=overlaps.get(key)||{system:z.system,name:z.name,ores:new Set()};
      info.ores.add(r.name);overlaps.set(key,info);
    }
    const shared=[...overlaps.values()].filter(x=>x.ores.size>1).sort((a,b)=>b.ores.size-a.ores.size||a.name.localeCompare(b.name,'fr')).slice(0,4);
    $('ztProcRoute').innerHTML=shared.length?`<div class="zt-proc-recap zt-proc-route"><strong>Zones communes pour plusieurs minerais</strong><ul>${shared.map(z=>`<li>${escape(z.name)} (${escape(SYSTEMS[z.system])}) — ${z.ores.size} minerais : ${[...z.ores].map(escape).join(', ')}</li>`).join('')}</ul><small>Regroupement par présence documentée. Aucun temps de trajet ni rendement de sortie calculé.</small></div>`:'';
    const total=needs.length, covered=needs.length-rows.length;
    $('ztProcSummary').innerHTML=`<div class="zt-proc-stat"><strong>${craftPlan.length}</strong><small>Blueprints distincts</small></div><div class="zt-proc-stat"><strong>${total}</strong><small>Matériaux distincts</small></div><div class="zt-proc-stat"><strong>${covered}</strong><small>Couverts par le stock</small></div><div class="zt-proc-stat"><strong>${rows.length}</strong><small>À récupérer / vérifier</small></div>`;
    const groups=['mining','salvage','dismantle','unknown'];
    panel.innerHTML=rows.length?groups.map(group=>{
      const items=rows.filter(x=>x.method===group);
      if(!items.length)return '';
      const entries=items.map(r=>{
        const info=locationInfo(r),candidate=candidateInfo(r);
        return `<div class="zt-proc-item" data-proc-key="${escape(r.key)}"><div><div class="zt-proc-top"><strong>${escape(r.name)}</strong><span class="zt-proc-pill">${escape(r.unit)}</span>${r.quality?`<span class="zt-proc-pill">Q min. ${r.quality}</span>`:''}</div>
          <div class="zt-proc-meta"><span class="zt-proc-amount">${fmtCraft(r.missing)} ${escape(r.unit)} à obtenir</span> · ${fmtCraft(r.done)} en stock compatible</div>
          <div class="zt-proc-meta">${escape(info)}</div>${candidate?`<div class="zt-proc-warning">${candidate}</div>`:''}
          ${r.unverified?`<div class="zt-proc-warning">${fmtCraft(r.unverified)} ${escape(r.unit)} de stock sans qualité suffisante à vérifier.</div>`:''}
          ${r.detected!==r.method?'<div class="zt-proc-warning">Méthode choisie manuellement, non vérifiée par la source.</div>':''}
          <div class="craft-link-actions">${craftMaterialAction(r.name)}</div>
        </div><div><div class="zt-proc-progress"><label>Responsable (facultatif)<input type="text" data-proc-owner="${escape(r.key)}" maxlength="60" value="${escape(r.owner)}" placeholder="Membre / équipe"/></label>
          <label>Récolté (suivi, hors stock)<input type="number" data-proc-tracked="${escape(r.key)}" min="0" max="100000000" step="any" value="${r.tracked}"/></label></div>
          <label class="field-label" style="margin:8px 0 4px;display:block">Méthode de collecte</label>
          <select aria-label="Méthode pour ${escape(r.name)}" data-proc-method="${escape(r.key)}">
            ${groups.map(m=>`<option value="${m}" ${m===r.method?'selected':''}>${escape(methodLabels[m])}</option>`).join('')}
          </select></div></div>`;
      }).join('');
      return `<section class="zt-proc-group"><h3>${escape(methodLabels[group])}<span class="zt-proc-count">${items.length} ressource(s)</span></h3>${entries}</section>`;
    }).join(''):'<p class="muted">Toutes les ressources chiffrées de ce projet sont couvertes par un stock compatible. Vérifie les qualités et les conditions du blueprint avant la fabrication.</p>';
  }
  $('ztProcSystem').addEventListener('change',e=>{procSystem=e.target.value;safeLocal.set('procureSystemV154',procSystem);renderProcurement();});
  $('ztProcList').addEventListener('change',e=>{
    const method=e.target.closest('[data-proc-method]');
    if(method){procOverrides[plannerKey(method.dataset.procMethod)]=method.value;safeLocal.set('procureOverridesV154',procOverrides);renderProcurement();return;}
    const owner=e.target.closest('[data-proc-owner]'),tracked=e.target.closest('[data-proc-tracked]');
    const el=owner||tracked;if(!el)return;
    const key=plannerKey(owner?owner.dataset.procOwner:tracked.dataset.procTracked),old=procTracking[key]||{};
    if(owner)old.owner=owner.value.trim().slice(0,60);
    else {const n=Number(tracked.value);if(!Number.isFinite(n)||n<0||n>1e8){toast('Quantité suivie invalide.');renderProcurement();return;}old.tracked=n;}
    procTracking[key]=old;safeLocal.set('procureTrackingV154',procTracking);
  });
  function projectExportRows(){return procurementRows();}
  function projectDiscord(){
    const p=craftProjects.find(x=>x.id===activeProjectId),rows=projectExportRows();
    const lines=[`Z-TEAM · OPÉRATION : ${p?.name||'Projet'}`,`Blueprints : ${craftPlan.map(x=>`${x.qty} × ${x.name||x.id}`).join(', ')}`,
      `Filtre de lieux : ${procSystem==='all'?'tous':SYSTEMS[procSystem]}`,`Sources : Forge + Strata ; rendement brut/démontage non estimé`];
    for(const method of ['mining','salvage','dismantle','unknown']){
      const items=rows.filter(x=>x.method===method);if(!items.length)continue;
      lines.push('','— '+methodLabels[method].toUpperCase()+' —');
      for(const x of items){lines.push(`• ${x.name} : ${fmtCraft(x.missing)} ${x.unit}${x.quality?' · Q min '+x.quality:''}${x.owner?' · '+x.owner:''} (suivi : ${fmtCraft(x.tracked)})`);
        if(x.method==='mining'&&x.sites.length)lines.push('  '+x.sites.map(z=>`${z.name} ${fmtCraft(z.abundance)}% (rel.)`).join(' / '));
      }
    }
    lines.push('','Note : les suivis manuels ne sont pas automatiquement déduits du stock.');
    return lines.join('\n');
  }
  async function procCopy(text){try{await navigator.clipboard.writeText(text);toast('Copié dans le presse-papiers');}catch(e){fallbackCopy(text);}}
  $('ztProcCopy').addEventListener('click',()=>{if(!craftPlan.length)return toast('Ajoute des blueprints au plan.');procCopy(projectDiscord());});
  $('ztProcCSV').addEventListener('click',()=>{
    if(!craftPlan.length)return toast('Ajoute des blueprints au plan.');
    const rows=projectExportRows();exportCSV('Z-Team_Operation_Courses.csv',[
      ['Projet','Méthode','Ressource','Unité','Besoin total','Stock compatible','Reste','Qualité minimum','Destinations vérifiées ou indicatives','Responsable','Suivi récolté','Précaution'],
      ...rows.map(x=>[craftProjects.find(p=>p.id===activeProjectId)?.name||'',methodLabels[x.method],x.name,x.unit,x.total,x.done,x.missing,x.quality,
        x.sites.map(z=>`${z.name} (${SYSTEMS[z.system]} : ${z.abundance}% relatif)`).join(' / '),x.owner,x.tracked,x.method==='dismantle'?'Rendement non vérifié':x.method==='unknown'?'Origine non identifiée':'Données communautaires'])]);
  });
  function sharePayload(){return {format:'ZTeamProject',version:1,name:craftProjects.find(p=>p.id===activeProjectId)?.name||'Projet',items:craftPlan.map(p=>({id:p.id,qty:p.qty,name:p.name||''}))};}
  function encodeProject(payload){const bytes=new TextEncoder().encode(JSON.stringify(payload));let text='';for(const b of bytes)text+=String.fromCharCode(b);return btoa(text).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');}
  function decodeProject(raw){if(raw.length>16000)throw Error('Lien trop long');const value=atob(raw.replace(/-/g,'+').replace(/_/g,'/'));const bytes=Uint8Array.from(value,c=>c.charCodeAt(0));const data=JSON.parse(new TextDecoder().decode(bytes));
    if(data.format!=='ZTeamProject'||data.version!==1||!Array.isArray(data.items)||data.items.length>250)throw Error('Format invalide');
    const items=cleanPlan(data.items);if(items.length!==data.items.length)throw Error('Liste incorrecte');return {name:String(data.name||'Projet partagé').slice(0,70),items};}
  $('ztProcShare').addEventListener('click',()=>{
    if(!craftPlan.length)return toast('Ajoute des blueprints au plan.');
    const hash=encodeProject(sharePayload());const url=location.href.split('#')[0]+'#ztplan='+hash;
    if(url.length>8000)return toast('Projet trop grand pour un lien : utilise l’export JSON.');
    procCopy(url);
  });
  let pendingShared=null;
  try{const h=location.hash.startsWith('#ztplan=')?location.hash.slice(8):'';if(h)pendingShared=decodeProject(h);}catch(e){/* bad links do not alter active project */}
  if(pendingShared){$('ztSharedProjectBanner').classList.remove('is-hidden');}
  $('ztProjectIgnoreShared').addEventListener('click',()=>{$('ztSharedProjectBanner').classList.add('is-hidden');pendingShared=null;});
  $('ztProjectAcceptShared').addEventListener('click',()=>{
    if(!pendingShared)return;addProject(pendingShared.name,pendingShared.items);
    pendingShared=null;$('ztSharedProjectBanner').classList.add('is-hidden');
    if(history.replaceState)history.replaceState(null,'',location.href.split('#')[0]);
  });
  $('ztStartPlanner').addEventListener('click',()=>{
    enterDivision('crafting');$('ztProjectsPanel').scrollIntoView({behavior:'smooth',block:'start'});
  });
  $('ztGoPlanner').addEventListener('click',()=>{
    $('ztProcurementPanel').scrollIntoView({behavior:'smooth',block:'start'});
  });
  renderProjectPicker();renderProcurement();

  function dismMatches(){
    const q=$('dismQuery').value.trim().toLocaleLowerCase('fr'),mat=$('dismMaterial').value;
    return craftEntries.filter(b=>['armor_pieces','weapons','backpacks','undersuits','flightsuits'].includes(b.kind)&&b.recipe.length&&(!q||[b.name,b.category,...b.recipe.map(r=>r.name)].some(t=>t.toLocaleLowerCase('fr').includes(q)))&&(mat==='all'||b.recipe.some(r=>r.name===mat))).sort((a,b)=>mat!=='all'?(b.recipe.filter(r=>r.name===mat).reduce((t,r)=>t+r.qty,0)-a.recipe.filter(r=>r.name===mat).reduce((t,r)=>t+r.qty,0))||a.name.localeCompare(b.name,'fr'):a.name.localeCompare(b.name,'fr'));
  }
  function renderDismantle(){
    if(!craftReady){$('dismList').innerHTML='<p class="muted">Chargement du catalogue…</p>';return;}
    const mats=[...new Set(craftEntries.filter(b=>['armor_pieces','weapons','backpacks','undersuits','flightsuits'].includes(b.kind)).flatMap(b=>b.recipe.map(r=>r.name)))].sort((a,b)=>a.localeCompare(b,'fr'));
    const old=$('dismMaterial').value;
    if($('dismMaterial').options.length<2){$('dismMaterial').innerHTML='<option value="all">Tous les matériaux</option>'+mats.map(m=>`<option value="${escape(m)}">${escape(m)}</option>`).join('');if(mats.includes(old))$('dismMaterial').value=old;}
    const arr=dismMatches();$('dismResultCount').textContent=`${fmt(arr.length)} objet${arr.length>1?'s':''}`;
    $('dismList').innerHTML=arr.slice(0,dismShown).map(b=>`<button class="craft-list-row ${dismSelected===b.id?'active':''}" type="button" data-dism-select="${escape(b.id)}"><span><strong>${escape(b.name)}</strong><small>${escape(b.category)}${$('dismMaterial').value!=='all'?' · Recette : '+fmtCraft(b.recipe.filter(r=>r.name===$('dismMaterial').value).reduce((t,r)=>t+r.qty,0))+' cSCU':''}</small></span></button>`).join('')||'<p class="muted">Aucun objet trouvé.</p>';
    $('dismMore').classList.toggle('is-hidden',arr.length<=dismShown);
    const b=craftMap.get(dismSelected);
    if(!b){$('dismDetail').innerHTML='<p class="muted">Sélectionne un objet à démonter.</p>';return;}
    $('dismDetail').innerHTML=`<h3>${escape(b.name)}</h3><p class="muted">${escape(b.category)}</p><h4 class="craft-detail-title">Matériaux de la recette</h4>
      <ul class="dism-materials">${b.recipe.map(r=>`<li><div><strong>${escape(r.name)}</strong>${r.slot?`<small class="muted"> · ${escape(r.slot)}</small>`:''}</div><span class="qty">Recette : ${fmtCraft(r.qty)} ${escape(r.unit)}</span></li>`).join('')}</ul>
      <div class="dism-tip">Les quantités indiquées correspondent à la <strong>recette de fabrication</strong>, pas aux matériaux garantis au démontage. Certaines ressources peuvent ne pas être récupérables ; le terminal du jeu fait foi. Pour un objet acheté ou trouvé : qualité Q500 par défaut. Pour un objet fabriqué : qualité d’origine, avec perte de quantité.</div>
      <div class="craft-link-actions"><button class="btn compact" type="button" data-dism-go-blueprint="${escape(b.id)}">Ouvrir le blueprint complet</button></div>`;
  }
  $('dismQuery').addEventListener('input',()=>{dismShown=65;renderDismantle();});
  $('dismMaterial').addEventListener('change',()=>{dismShown=65;renderDismantle();});
  $('dismMore').addEventListener('click',()=>{dismShown+=65;renderDismantle();});
  $('dismList').addEventListener('click',e=>{const el=e.target.closest('[data-dism-select]');if(!el)return;dismSelected=el.dataset.dismSelect;renderDismantle();});
  $('dismDetail').addEventListener('click',e=>{const el=e.target.closest('[data-dism-go-blueprint]');if(!el)return;craftSelected=el.dataset.dismGoBlueprint;enterDivision('crafting');renderCrafting();});
  $('craftQuery').addEventListener('input',()=>{craftShown=65;renderCrafting();});
  $('craftCategory').addEventListener('change',()=>{craftShown=65;renderCrafting();});
  $('craftMore').addEventListener('click',()=>{craftShown+=65;renderCrafting();});
  $('craftList').addEventListener('click',e=>{
    const btn=e.target.closest('[data-craft-select]');if(!btn)return;
    craftSelected=btn.dataset.craftSelect;renderCrafting();if(window.innerWidth<760)$('craftDetail').scrollIntoView({behavior:'smooth',block:'start'});
  });
  $('craftDetail').addEventListener('change',e=>{
    const inp=e.target.closest('[data-craft-quality]');if(!inp)return;
    const b=craftMap.get(craftSelected);if(!b)return;
    const i=Number(inp.dataset.craftQuality),q=Number(inp.value);
    const key=craftQualityKey(b.id,i);
    if(inp.value===''){craftQualityInput.delete(key);}else if(!Number.isInteger(q)||q<0||q>1000){toast('Qualité comprise entre 0 et 1000.');inp.value='';craftQualityInput.delete(key);}else craftQualityInput.set(key,q);
    $('craftQualitySummary').textContent=craftQualitySummary(b);
  });
  $('craftDetail').addEventListener('click',e=>{
    const ore=e.target.closest('[data-open-ore]');if(ore){enterDivision('mining');$('prospectOre').value=ore.dataset.openOre;renderProspect();return;}
    if(e.target.closest('[data-open-salvage]')){enterDivision('salvage');return;}
    const setBtn=e.target.closest('[data-craft-add-set]');if(setBtn){
      const set=craftSets.get(setBtn.dataset.craftAddSet);if(!set)return;
      let added=0;for(const name of set.pieces){const b=craftMap.get('armor_pieces|'+name);if(!b)continue;const p=craftPlan.find(x=>x.id===b.id);if(p)p.qty=Math.min(9999,p.qty+1);else craftPlan.push({id:b.id,name:b.name,qty:1});added++;}
      renderCraftPlan();renderCraftNeeds();toast(added+' pièce(s) ajoutée(s)');return;
    }
    if(!e.target.closest('#craftAdd'))return;
    const b=craftMap.get(craftSelected),n=Number($('craftAddQty')?.value);
    if(!b||!Number.isInteger(n)||n<1||n>9999){toast('Quantité invalide');return;}
    const current=craftPlan.find(p=>p.id===b.id);
    if(current)current.qty=Math.min(9999,current.qty+n);
    else craftPlan.push({id:b.id,name:b.name,qty:n});
    renderCraftPlan();renderCraftNeeds();toast('Blueprint ajouté au plan');
  });
  $('craftLotForm').addEventListener('submit',e=>{
    e.preventDefault();const key=$('craftLotResource').value,qty=Number($('craftLotQty').value),quality=Number($('craftLotQuality').value);
    if(!key||!Number.isFinite(qty)||qty<=0||qty>1e7||!Number.isInteger(quality)||quality<0||quality>1000){toast('Lot invalide : vérifier quantité et qualité.');return;}
    if(craftLots.length>=400){toast('Limite de 400 lots atteinte.');return;}
    craftLots.push({key,qty,quality});safeLocal.set('craftQualityLots',craftLots);renderCraftLots();renderCraftNeeds();toast('Lot enregistré');
  });
  $('craftLotList').addEventListener('click',e=>{const el=e.target.closest('[data-remove-lot]');if(!el)return;const i=Number(el.dataset.removeLot);if(!Number.isInteger(i)||i<0||i>=craftLots.length)return;craftLots.splice(i,1);safeLocal.set('craftQualityLots',craftLots);renderCraftLots();renderCraftNeeds();});
  $('craftPlan').addEventListener('change',e=>{
    const el=e.target.closest('[data-craft-qty]');if(!el)return;
    const p=craftPlan.find(x=>x.id===el.dataset.craftQty),qty=Number(el.value);
    if(!p||!Number.isInteger(qty)||qty<1||qty>9999){toast('Choisir de 1 à 9999 exemplaires.');renderCraftPlan();return;}
    p.qty=qty;renderCraftPlan();renderCraftNeeds();
  });
  $('craftPlan').addEventListener('click',e=>{
    const btn=e.target.closest('[data-craft-remove]');if(!btn)return;
    craftPlan=craftPlan.filter(p=>p.id!==btn.dataset.craftRemove);renderCraftPlan();renderCraftNeeds();
  });
  document.addEventListener('change',e=>{
    const field=e.target.closest('[data-craft-stock]');if(!field)return;
    const n=Number(field.value);
    if(!Number.isFinite(n)||n<0||n>1e8){toast('Stock invalide');renderCraftNeeds();return;}
    craftStock[field.dataset.craftStock]=n;safeLocal.set('craftResourceStock',craftStock);renderCraftNeeds();
  });
  document.addEventListener('click',e=>{const ore=e.target.closest('.craft-needs [data-open-ore]');if(ore){enterDivision('mining');$('prospectOre').value=ore.dataset.openOre;renderProspect();return;}if(e.target.closest('.craft-needs [data-open-salvage]')){enterDivision('salvage');return;}});
  document.addEventListener('click',e=>{const el=e.target.closest('[data-open-dism-material]');if(!el)return;
    enterDivision('dismantle');$('dismMaterial').value=el.dataset.openDismMaterial;dismShown=65;dismSelected=null;renderDismantle();
  });
  $('craftToNeeds').addEventListener('click',()=>chooseView('collecte'));
  $('needsToCraft').addEventListener('click',()=>{enterDivision('crafting');});
  if($('craftSync'))$('craftSync').addEventListener('click',()=>loadCraftCatalog(true));
  $('craftExportJSON').addEventListener('click',()=>{
    if(!craftPlan.length){toast('Ajoute un blueprint au plan avant le partage.');return;}
    const payload={format:'ZTeamCraftPlan',version:1,items:craftPlan.map(p=>({id:p.id,qty:p.qty,name:p.name||''}))};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download='Z-Team_Plan_Fabrication.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);
  });
  $('craftImportPlan').addEventListener('change',async e=>{
    const file=e.target.files?.[0];if(!file)return;
    try{
      if(file.size>1e6)throw Error('Fichier trop volumineux');
      const data=JSON.parse(await file.text());if(data.format!=='ZTeamCraftPlan'||data.version!==1||!Array.isArray(data.items))throw Error('Format de plan non reconnu');
      if(data.items.length>250)throw Error('Plan trop volumineux');
      const newItems=[];for(const p of data.items){if(!p||typeof p.id!=='string'||!Number.isInteger(p.qty)||p.qty<1||p.qty>9999)throw Error('Ligne de plan invalide');if(newItems.some(x=>x.id===p.id))continue;newItems.push({id:p.id,qty:p.qty,name:String(p.name||p.id).slice(0,150)});}
      craftPlan=newItems;renderCraftPlan();renderCraftNeeds();toast('Plan chargé : '+newItems.length+' blueprint(s)');
    }catch(err){toast('Import refusé : '+String(err.message||err));}finally{e.target.value='';}
  });
  $('craftExport').addEventListener('click',()=>{
    const rows=[['Blueprint','Exemplaires','Ressource','Besoin','Unité','Stock compatible (total)','Reste global (par ressource)','Origine']];
    const alloc=allocateCraftStock();for(const p of craftPlan){const b=craftMap.get(p.id);if(!b)continue;for(const r of b.recipe){const key=craftMaterialKey(r.name,r.unit),a=alloc.get(key);rows.push([b.name,p.qty,r.name,r.qty*p.qty,r.unit,a?.done??0,a?.missing??r.qty*p.qty,craftMaterialClass(r.name)]);}}
    if(rows.length===1){toast('Ajoute des blueprints avant l’export.');return;}
    rows.push([]);rows.push(['TOTALS CONSOLIDÉS (par matériau)','','','','','','','']);
    for(const x of needTotals()){const a=alloc.get(x.key);rows.push(['TOTAL','',x.name,x.target,x.unit,a?.done||0,a?.missing??x.target,x.origin]);}
    exportCSV('Z-Team_Plan_Fabrication.csv',rows);
  });
  renderCraftPlan();renderCraftNeeds();

  function updateClock(){const el=$('volatileClock'),caption=$('volatileCaption');if(timerStart===null){el.firstChild.textContent='15:00';el.classList.remove('urgent');caption.textContent='Repère communautaire, non synchronisé au jeu';$('startClock').textContent='Démarrer';return;}
    const remaining=Math.max(0,chronoDuration-(Date.now()-timerStart)),seconds=Math.ceil(remaining/1000),mm=Math.floor(seconds/60),ss=seconds%60;
    el.firstChild.textContent=String(mm).padStart(2,'0')+':'+String(ss).padStart(2,'0');el.classList.toggle('urgent',remaining<=5*60*1000);
    caption.textContent=remaining>0?'Depuis le premier prélèvement (local)':'Repère écoulé · HUD à consulter';$('startClock').textContent='Redémarrer';
  }
  $('startClock').addEventListener('click',()=>{timerStart=Date.now();safeLocal.set('timerStart',timerStart);updateClock();toast('Chrono local démarré — surveille aussi le HUD');});
  $('resetClock').addEventListener('click',()=>{timerStart=null;safeLocal.set('timerStart',null);updateClock();});

  // V15.3 — Recherche transversale dans les données déjà disponibles.
  // Les routes réutilisent les vrais écrans, elles ne créent aucun catalogue annexe.
  const quickSearch=$('ztGlobalSearch'),quickResults=$('ztGlobalSearchResults');
  let quickTargets=[];
  const searchFold=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('fr').trim();
  function searchAll(){
    if(!quickSearch||!quickResults)return;
    const q=searchFold(quickSearch.value);
    if(q.length<2){quickResults.hidden=true;quickSearch.setAttribute('aria-expanded','false');quickResults.replaceChildren();return;}
    const candidates=[];
    for(const ore of ORES){
      const names=[ore.name,ore.alias,ore.id];
      if(names.some(x=>searchFold(x).includes(q)))candidates.push({type:'ore',id:ore.id,label:ore.name,kind:'Mining · Prospection',sort:Math.min(...names.map(x=>searchFold(x).startsWith(q)?0:1))});
    }
    if(craftReady){
      for(const b of craftEntries){
        const name=searchFold(b.name),maker=searchFold(b.manufacturer);
        if(name.includes(q)||maker.includes(q))candidates.push({type:'craft',id:b.id,label:b.name,kind:'Crafting · '+b.category,sort:name.startsWith(q)?0:2});
      }
      const mats=new Set(craftEntries.flatMap(b=>b.recipe.map(r=>r.name)));
      for(const name of mats)if(searchFold(name).includes(q))candidates.push({type:'material',id:name,label:name,kind:'Ressource · Recettes',sort:searchFold(name).startsWith(q)?1:3});
    }
    candidates.sort((a,b)=>a.sort-b.sort||a.label.localeCompare(b.label,'fr'));
    quickTargets=candidates.slice(0,35);
    quickResults.innerHTML=quickTargets.length?quickTargets.slice(0,14).map((t,i)=>`<button type="button" data-zt-search="${i}"><strong>${escape(t.label)}</strong><small>${escape(t.kind)}</small></button>`).join(''):
      `<p>${craftReady?'Aucun résultat dans les référentiels chargés.':'Aucun minerai trouvé. Recherche des blueprints après chargement du catalogue…'}</p>`;
    quickResults.hidden=false;quickSearch.setAttribute('aria-expanded','true');
  }
  let quickDelay;
  quickSearch?.addEventListener('input',()=>{
    clearTimeout(quickDelay);quickDelay=setTimeout(()=>{
      searchAll();
      if(searchFold(quickSearch.value).length>=2&&!craftReady)loadCraftCatalog().then(searchAll);
    },125);
  });
  quickSearch?.addEventListener('keydown',e=>{
    if(e.key==='Escape'){quickSearch.value='';searchAll();quickSearch.blur();}
    if(e.key==='Enter'){const b=quickResults.querySelector('[data-zt-search]');if(b&&!quickResults.hidden){e.preventDefault();b.click();}}
  });
  window.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){
    e.preventDefault();goHome();quickSearch?.focus();
  }});
  window.addEventListener('zteam-catalog-changed',searchAll);
  quickResults?.addEventListener('click',e=>{
    const el=e.target.closest('[data-zt-search]');if(!el)return;
    const t=quickTargets[Number(el.dataset.ztSearch)];if(!t)return;
    quickSearch.value='';searchAll();
    if(t.type==='ore'){enterDivision('mining');$('prospectOre').value=t.id;renderProspect();}
    else if(t.type==='craft'){craftSelected=t.id;$('craftQuery').value='';enterDivision('crafting');renderCrafting();}
    else if(t.type==='material'){$('craftQuery').value=t.id;craftShown=65;enterDivision('crafting');renderCrafting();}
  });
  // Recherche d'usages dans Crafting depuis la prospection : aucun rendement inventé.
  const prospectPanel=$('prospectOutput');
  if(prospectPanel){
    const bridge=document.createElement('div');bridge.className='zt-bridge';bridge.id='ztMiningCraftBridge';
    bridge.innerHTML='<span>Besoin de ce minerai pour une fabrication ou une revente ?</span><button class="btn compact" type="button">Voir les recettes associées ↗</button><button class="btn compact ghost" type="button" data-zt-prospect-sale>Comparer les prix de revente</button>';
    prospectPanel.insertAdjacentElement('afterend',bridge);
    bridge.querySelector('button').addEventListener('click',()=>{
      const ore=lookup.get($('prospectOre').value);if(!ore)return;
      $('craftQuery').value=ore.alias||ore.name;craftShown=65;enterDivision('crafting');renderCrafting();
    });
    bridge.querySelector('[data-zt-prospect-sale]').addEventListener('click',()=>{const ore=lookup.get($('prospectOre').value);if(ore)openSales('ore:refined',ore.id);});
  }

  // Source: validated on the publishing server, never live calls or an API token in the browser.
  let saleCatalogue=null, saleLoadPromise=null, saleLoadSettled=false;
  const saleIds={salvage:[['salvage:rmc','RMC (Recycled Material Composite)'],['salvage:cm','Construction Materials (CM)']]};
  const saleKind={refined:'ore:refined',raw:'ore:raw',salvage:'salvage'};
  const saleDate=stamp=>{if(!Number.isFinite(stamp))return 'Date inconnue';const d=new Date(stamp*1000);return isNaN(+d)?'Date inconnue':d.toLocaleString('fr-BE',{dateStyle:'short',timeStyle:'short'});};
  const saleCapacity=v=>Number.isFinite(v)?fmt(v,{maximumFractionDigits:2})+' SCU':'Non communiqué';
  const validSales=d=>d&&typeof d==='object'&&d.meta&&d.commodities&&typeof d.commodities==='object'&&Object.keys(d.commodities).length>0;
  async function loadSaleData(){
    if(saleLoadPromise)return saleLoadPromise;
    saleLoadPromise=(async()=>{try{
      const res=await fetch('./data/uex_sales.json',{cache:'no-store'});if(!res.ok)throw Error('Cours non publiés');
      const value=await res.json();if(!validSales(value))throw Error('Données UEX non disponibles');
      saleCatalogue=value;
    }catch(e){saleCatalogue=null;}saleLoadSettled=true;return saleCatalogue;})();
    return saleLoadPromise;
  }
  function saleChoices(){
    const type=$('ztSaleType').value;
    const options=type==='salvage'?saleIds.salvage:ORES.map(o=>[type+':'+o.id,o.name]);
    const old=$('ztSaleCommodity').value;
    $('ztSaleCommodity').replaceChildren();
    for(const [key,label] of options){const o=document.createElement('option');o.value=key;o.textContent=label;$('ztSaleCommodity').appendChild(o);}
    if(options.some(x=>x[0]===old))$('ztSaleCommodity').value=old;
  }
  function openSales(type,id){
    $('ztSaleType').value=type;saleChoices();
    const key=type==='salvage'?id:type+':'+id;
    if([...$('ztSaleCommodity').options].some(x=>x.value===key))$('ztSaleCommodity').value=key;
    chooseView('revente');
  }
  function renderSales(){
    const result=$('ztSaleResults'),status=$('ztSaleStatus'),summary=$('ztSaleSummary');
    if(!result)return;
    if(!saleCatalogue){
      result.replaceChildren();summary.textContent='';
      if(saleLoadPromise){if(saleLoadSettled)status.classList.add('warn');status.textContent=saleLoadSettled?'Aucun cours UEX valide publié ou accessible pour l’instant. Les prix et capacités ne sont pas inventés.':'Chargement du référentiel UEX publié…';return;}
      status.textContent='Recherche de la dernière copie UEX publiée…';
      loadSaleData().then(()=>{if($('view-revente').classList.contains('active'))renderSales();});return;}
    const key=$('ztSaleCommodity').value,record=saleCatalogue.commodities[key];
    const system=$('ztSaleSystem').value,amount=Math.min(100000,Math.max(.01,Number($('ztSaleAmount').value)||32));
    const list=Array.isArray(record?.spots)?record.spots.filter(p=>!system||p.star_system_name===system):[];
    const order=$('ztSaleOrder').value;
    const score=p=>order==='capacity'?(Number.isFinite(p.demand_scu_est)?p.demand_scu_est:-1):order==='value'?(Number.isFinite(p.demand_scu_est)?Math.min(amount,p.demand_scu_est)*p.price_scu:-1):p.price_scu;
    list.sort((a,b)=>score(b)-score(a)||b.price_scu-a.price_scu);
    const fetched=Date.parse(saleCatalogue.meta.retrieved_at||'');
    status.classList.remove('warn');
    status.textContent=`Source : UEX communautaire · dernière collecte ${Number.isFinite(fetched)?new Date(fetched).toLocaleString('fr-BE'):'inconnue'} · ${list.length} terminal(s) relevé(s).`;
    summary.textContent=record?`Cours de ${record.commodity} — ${key.includes(':raw:')?'minerai brut':key.startsWith('salvage:')?'matériau de récupération':'minerai raffiné'}. Quantité envisagée : ${fmt(amount,{maximumFractionDigits:2})} SCU.`:'Aucun cours publié pour ce matériau et cette forme. Ne pas déduire qu’aucun terminal ne l’achète.';
    if(!list.length){result.innerHTML='<div class="notice">Aucun terminal documenté pour cette sélection dans la copie publiée. Vérifiez la source UEX ou changez le filtre.</div>';return;}
    result.innerHTML=list.slice(0,12).map(p=>{
      const ts=Number(p.report_timestamp),age=Number.isFinite(ts)?(Date.now()/1000-ts)/86400:Infinity;
      const old=age>7;
      const location=[p.star_system_name,p.planet_name,p.moon_name,p.space_station_name,p.outpost_name,p.city_name].filter(Boolean).filter((v,i,arr)=>arr.indexOf(v)===i).join(' · ')||'Système non communiqué';
      const forecast=Number.isFinite(p.demand_scu_est)?p.demand_scu_est:null;
      const max=Number.isFinite(p.max_scu_observed)?p.max_scu_observed:null;
      const est=forecast===null?'Vente possible non quantifiable':`Jusqu’à ${fmt(Math.min(amount,forecast)*p.price_scu,{maximumFractionDigits:0})} aUEC estimés pour ${saleCapacity(Math.min(amount,forecast))}`;
      return `<article class="zt-sale-spot"><div class="zt-sale-spot-top"><div><div class="zt-sale-spot-title">${escape(p.terminal)}</div><div class="zt-sale-location">${escape(location)}</div></div><div class="zt-sale-price">${fmt(p.price_scu,{maximumFractionDigits:2})}<small>aUEC / SCU · vente</small></div></div>
      <div class="zt-sale-stats"><div class="zt-sale-stat"><span>Demande SCU estimée</span><strong>${saleCapacity(forecast)}</strong></div><div class="zt-sale-stat"><span>SCU MAX observé</span><strong>${saleCapacity(max)}</strong></div><div class="zt-sale-stat"><span>Stock terminal relevé</span><strong>${saleCapacity(p.inventory_scu_reported)}</strong></div><div class="zt-sale-stat"><span>Caisse MAX connue</span><strong>${saleCapacity(p.max_container_scu)}</strong></div></div>
      <div class="zt-sale-foot"><span>${escape(est)}</span><span class="${old?'zt-sale-outdated':''}">Relevé : ${escape(saleDate(ts))}${old?' · ANCIEN':''} · patch ${escape(p.game_version||'non indiqué')}${Number.isFinite(p.quality)?' · Q'+fmt(p.quality):''}</span></div></article>`;
    }).join('');
  }
  ['ztSaleCommodity','ztSaleSystem','ztSaleAmount','ztSaleOrder'].forEach(id=>$(id).addEventListener('input',renderSales));
  $('ztSaleType').addEventListener('change',()=>{saleChoices();renderSales();});
  // Acces rapide aux marchandises de Salvage, quelle que soit la division active.
  $('ztSaleQuickCM').addEventListener('click',()=>openSales('salvage','salvage:cm'));
  $('ztSaleQuickRMC').addEventListener('click',()=>openSales('salvage','salvage:rmc'));
  $('ztSalvageSales').addEventListener('click',()=>openSales('salvage','salvage:rmc'));
  saleChoices();
  renderProspect();
  updateClock();setInterval(updateClock,1000);
  // Smoke-test hooks for the local audit; no network, no privileged capabilities.
  window.ZTeamTest={parseRS,getMatches,salvage:()=>({ship:$('salvageShip').value,cargo:$('salvageCargo').textContent,buffer:$('salvageBuffer').textContent,raw:$('salvageShipMaterial').textContent,stations:Array.from($('salvageStationList').children).map(n=>n.textContent)}),catalogCount:()=>ORES.length,calculator:()=>({scu:$('outSCU').textContent,formula:$('outFormula').textContent}),getCollection:()=>collection.map(e=>({name:e.name,target:e.target,have:e.have,unit:e.unit})),getDivision:()=>currentDivision};
})();

;

/* Une copie locale (si disponible) prime sur les URL officielles. Aucun élément inventé par IA. */
(function(){
  [['mining','--mining-ship-image','assets/arrastra_officiel.jpg'],['salvage','--salvage-ship-image','assets/moth_officiel.jpg'],['crafting','--crafting-official-image','assets/crafting_officiel.webp'],['dismantle','--dismantle-official-image','assets/demontage_officiel.webp']].forEach(function(x){
    var local=new Image();local.onload=function(){
      var button=document.querySelector('[data-enter-division="'+x[0]+'"]');
      if(button)button.style.setProperty(x[1], 'url("'+x[2]+'")');
    };local.src=x[2];
  });
})();

;

(function(){
  const box=document.getElementById('ztDataGrid');if(!box)return;
  const sync=window.ZTEAM_SYNC_STATUS||{};
  const strata=window.ZTEAM_MINING_DATA;
  const s=sync.sources||{};
  const runtime=window.ZTEAM_SOURCE_RUNTIME||{};
  const stpatch=strata?.meta?.current_patch||s.strata?.patch||'—';
  const craftpatch=s.forge?.patch||'—';
  function entry(label,msg,warn){
    const span=document.createElement('span'),strong=document.createElement('strong');
    span.append(document.createTextNode(label));strong.textContent=msg;
    if(warn)strong.className='warn';span.appendChild(strong);return span;
  }
  function stale(x){
    if(!x || x.last_attempt_ok!==true || x.review_required)return true;
    const last=x.last_success?Date.parse(x.last_success):NaN;
    const source=x.source_date?Date.parse(x.source_date+'T00:00:00Z'):NaN;
    const sourceOld=Number.isFinite(source)&&Date.now()-source>45*24*3600*1000;
    return !Number.isFinite(last)||Date.now()-last>8*24*3600*1000||sourceOld;
  }
  const hasStrata=!!(strata&&strata.location_ores&&Object.keys(strata.location_ores).length>=35);
  const hasForge=!!s.forge?.last_success;
  const mixed=hasStrata&&hasForge&&stpatch!=='—'&&craftpatch!=='—'&&stpatch!==craftpatch;
  const checked=sync.checked_at?new Date(sync.checked_at):null;
  const checkedTxt=(checked&&!isNaN(+checked))?checked.toLocaleString('fr-BE',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}):'première publication en attente';
  box.replaceChildren(
    entry('Mining',hasStrata?`Strata ${stpatch}${s.strata?.source_date?' · '+s.strata.source_date:''}${runtime.mining==='cache'?' · cache hors ligne':''}${stale(s.strata)?' · MAJ à vérifier':''}`:'Données historiques · sans taux validés',!hasStrata||stale(s.strata)),
    entry('Raffinage',hasStrata?'Bonus station Strata · méthodes estimées':'Estimations historiques',true),
    entry('Salvage','Valeurs manuelles · patch 4.10.3',true),
    entry('Revente (UEX)',s.uex?.last_success?`UEX · relevés communautaires · ${s.uex.last_attempt_ok?'dernier contrôle réussi':'dernière MAJ échouée'}${s.uex.partial?' · couverture partielle':''}`:'Prix SCU en attente de publication',!s.uex?.last_attempt_ok),
    entry('Crafting / Démontage',hasForge?`Forge ${craftpatch}${s.forge?.source_date?' · '+s.forge.source_date:''}${stale(s.forge)?' · MAJ à vérifier':''}`:'Catalogue en attente de publication',!hasForge||stale(s.forge)),
    entry('Contrôle du site',checkedTxt,!sync.checked_at)
  );
  if(mixed)box.appendChild(entry('ATTENTION','Patch Strata / Forge différent',true));
  if(s.strata?.review_required||s.forge?.review_required)box.appendChild(entry('VALIDATION REQUISE','Écarts importants détectés ; ancienne copie conservée',true));
  const detail=document.getElementById('ztDiagnostic');
  const content=document.getElementById('ztDiagnosticContent');
  let detailLoaded=false;
  if(detail&&content)detail.addEventListener('toggle',async()=>{
    if(!detail.open||detailLoaded)return;detailLoaded=true;content.replaceChildren();
    const h=document.createElement('p');h.textContent='Contrôle du site : '+checkedTxt;content.append(h);
    for(const [key,label] of [['strata','Mining / Raffinage — Strata'],['forge','Crafting / Démontage — Forge'],['uex','Revente / SCU — UEX']]){
      const x=s[key]||{};const line=document.createElement('p');
      line.textContent=`${label} · patch ${x.patch||'non disponible'} · données du ${x.source_date||'date non renseignée'} · dernière copie valide ${x.last_success||'non publiée'} · ${x.last_attempt_ok===true?'dernier contrôle réussi':'dernière mise à jour en échec'}`;
      if(x.error){line.textContent+=' · Cause : '+x.error;line.style.color='#ff9da8';}
      content.append(line);
    }
    const caution=document.createElement('p');caution.textContent='Salvage : vérification manuelle ; raffinage : méthodes estimatives. Les données communautaires ne garantissent pas l’état exact du jeu.';content.append(caution);
    try{
      const res=await fetch('./data/update_review.json',{cache:'no-store'});
      if(!res.ok)throw Error('Révision non publiée');
      const d=await res.json();
      for(const [key,x] of Object.entries(d.sources||{})){
        const p=document.createElement('p');
        p.textContent=`Comparaison ${key} : ${x.added||0} ajout(s), ${x.removed||0} suppression(s), ${x.modified||0} modification(s). ${x.review_required?'À vérifier avant publication.':'Aucun blocage automatique.'}`;
        content.append(p);
        if(x.reasons?.length){const ul=document.createElement('ul');for(const reason of x.reasons){const li=document.createElement('li');li.textContent=reason;ul.append(li);}content.append(ul);}
      }
    }catch(e){const p=document.createElement('p');p.textContent='Rapport de comparaison non encore disponible sur cette publication.';content.append(p);}
    for(const [label,href] of [['Référentiel Strata','https://github.com/SeekND/Strata'],['Référentiel Forge','https://github.com/SeekND/Forge']]){
      const a=document.createElement('a');a.textContent=label+' ↗';a.href=href;a.target='_blank';a.rel='noopener noreferrer';a.style.marginRight='14px';content.append(a);
    }
  });
  const btn=document.getElementById('ztRefreshSite');
  if(btn)btn.addEventListener('click',()=>window.location.reload());
})();
