var tipuesearch = {"pages": [{'title': 'About', 'text': '第 1 組成員: \xa0?\xa0 \xa0?\xa0 \xa0?\xa0 \xa0 \xa0\xa0 40523120 倉儲 \xa0 | \xa0 40523120 網站 \xa0 林昱秀\xa0 \xa0 40723102 倉儲 \xa0 | \xa0 40723102 網站 李正揚\xa0 \xa0 40723110 倉儲 \xa0 | \xa0 40723110 網站 李冠廷\xa0\xa0 \xa0\xa0 40723112 倉儲 \xa0 | \xa0 40723112 網站 林于哲\xa0 \xa0 40723115 倉儲 \xa0 | \xa0 40723115 網站 林靖浩\xa0 \xa0 40723120 倉儲 \xa0 | \xa0 40723120 網站 許嘉紘\xa0 \xa0 40723127 倉儲 \xa0 | \xa0 40723127 網站 彭少鍚\xa0 \xa0 40723136 倉儲 \xa0 | \xa0 40723136 網站 黃譯賢\xa0 \xa0 40723140 倉儲 \xa0 | \xa0 40723140 網站 詹益任\xa0 \xa0 40723143 倉儲 \xa0 | \xa0 40723143 網站 劉敬中\xa0 \xa0 40723146 倉儲 \xa0 | \xa0 40723146 網站 鄭博鴻\xa0 \xa0 40723148 倉儲 \xa0 | \xa0 40723148 網站 \n \n', 'tags': '', 'url': 'About.html'}, {'title': '每周任務', 'text': '', 'tags': '', 'url': '每周任務.html'}, {'title': 'Week10', 'text': '啟動分組程序 \n 分配組員工作 \n ---------------------------------------------- \n 1 . 以分組協同方式整理教科書內容 \n 2 .\xa0 處理 content.htm, reveal 簡報以及 pelican 網誌 markdown 中的改版衝突 \n 3 . NX及SolveSpace 繪圖\xa0 \n 4 . V-rep 與 Webots Tutorial, 分別利用 Solvespace 與 NX 建立零組件轉入 \n \n', 'tags': '', 'url': 'Week10.html'}, {'title': 'Week12 應力分析', 'text': '1.NX 零組件繪圖 \n 2.Webots 與 V-rep Tutorial \n ---------------------------------------------------- \n 1 . 分別用 Solvespace\xa0 \xa0和\xa0 NX 建立零組件，錄製繪圖過程並建構出零組件後與V-REP、Webots組做 結合。 \n 2 .\xa0 NX繪圖者匯出零件後分析零件應力分析，再和Webots的應力分析做比較，得出差異性。 \n', 'tags': '', 'url': 'Week12 應力分析.html'}, {'title': '第八章', 'text': '第八章 有限元素分析 \n 有限元素分析（ FEA ）是有限元素方法（ FEM ）的實際運用，他用於對結構或流體所施加的因素 ( 例如力、壓力、熱量和振動 ) 來做出反應行為。 \n 通常，開始的過程都會先從創建幾何模型開始，之後再將模型細分(網狀化)成許多在特定的節點上連結在一起的簡單幾何形狀的小塊(元素)，而材料的性質和限制條件也會應用在元素上。 \n 在最後，許多軟體像是NX12都能解決有限元素分析（ FEA ）的問題並將結果輸出且可視化。有限元素分析（ FEA ）能夠幫助工程師在製造和測試前，更加了解產品的性能。 \n 有限元素分析（ FEA ）的應用包括結構分析、熱分析、流體力學和電磁兼容性 \n 其中，有限元素分析（ FEA ）最常用於結構和固體力學，並應用於計算機械性能（例如應力和位移）。這些（應力和位移）的計算對機械部件的性能非常重要，甚至能夠預防故障。 \n 本章中，我們將處理實體零件的結構應力和應變分析。 \n', 'tags': '', 'url': '第八章.html'}, {'title': '模擬', 'text': '', 'tags': '', 'url': '模擬.html'}, {'title': 'Webots', 'text': 'Webots的開發始於1996年12月 在洛桑 的 瑞士聯邦技術學院（EPFL）， 當時Olivier Michel被Jean-Daniel Nicoud教授聘為博士後研究員。 \n 該公司成立於1998年，是從EPFL的MicroComputing and Interface Lab（LAMI）衍生出來的。 Cyberbotics的最初導師包括Jean-Daniel Nicoud教授，Francesco Mondada教授和Takashi Gomi博士。 \n 從一開始，Webots就被行業（Sony Corp.）和大學用於研究和教育目的。 \n 在2018年12月，Webots已成為根據 Apache 2.0許可 條款發行的免費開源軟件 \xa0 。 \n 如今，Webots已在全球成千上萬的組織中使用，包括行業和學術界。 \n Webots_2019b_rev1.7z \xa0 \n Webots 啟動條件: \n 1. 將start_mdecourse.bat 中加入執行路徑: \n set path_webots=%Disk%:\\Webots_2019b_rev1\\msys64\\mingw64\\bin;%Disk%:\\Webots_2019b_rev1\\msys64\\usr\\bin \n 並在 y:\\ 根目錄建立 start_webots.bat, 內容為: \n \n start Y:\\Webots_2019b_rev1\\msys64\\mingw64\\bin\\webots.exe \n \n 隨身程式系統納入上述兩個條件後, 可以直接在命令列輸入 start_webots.bat 啟動 \n \n', 'tags': '', 'url': 'Webots.html'}, {'title': 'Webots Tutorial', 'text': "Tutorial 1. \n \n 器人以其最大速度移動一段時間，然後在輪子旋轉10弧度後停止 \n from controller import Robot, Motor\n\nTIME_STEP = 64\n\n# create the Robot instance.\nrobot = Robot()\n\n# get the motor devices\nleftMotor = robot.getMotor('left wheel motor')\nrightMotor = robot.getMotor('right wheel motor')\n# set the target position of the motors\nleftMotor.setPosition(10.0)\nrightMotor.setPosition(10.0)\n\nwhile robot.step(TIME_STEP) != -1:\n   pass \n 輪子將以每秒1弧度的速度旋轉 \n from controller import Robot, Motor\n\nTIME_STEP = 64\n\nMAX_SPEED = 6.28\n\n# create the Robot instance.\nrobot = Robot()\n\n# get a handler to the motors and set target position to infinity (speed control)\nleftMotor = robot.getMotor('left wheel motor')\nrightMotor = robot.getMotor('right wheel motor')\nleftMotor.setPosition(float('inf'))\nrightMotor.setPosition(float('inf'))\n\n# set up the motor speeds at 10% of the MAX_SPEED.\nleftMotor.setVelocity(0.1 * MAX_SPEED)\nrightMotor.setVelocity(0.1 * MAX_SPEED)\n\nwhile robot.step(TIME_STEP) != -1:\n   pass \n \n", 'tags': '', 'url': 'Webots Tutorial.html'}, {'title': 'V-rep', 'text': 'solvespace 自走車繪製 \n \n', 'tags': '', 'url': 'V-rep.html'}, {'title': '繪圖程式類別', 'text': '\n', 'tags': '', 'url': '繪圖程式類別.html'}, {'title': 'Inventor 2019', 'text': 'CHAPTER 1 –History \n \xa0 \xa0Inventor在1999年發表， Jay Tedeschi在AUTODESk工作了23年，創建了AUTODESK許多主要的工作軟體。在Inventor出現之前，AUTODESk有一個３Ｄ參數工具叫作Designer，該軟體後來發展為機械設計的工具。在當時 Jay Tedeschi認為ＳＯＬＩＷＯＲＫＳ是當時最先進的機械設計軟體，後來Jay Tedeschi的團隊把ＳＯＬＩＷＯＲＫＳ併購及整合到ＡＵＴＯＤＥＳＫ設計軟體中。 Jay Tedeschi有一套方法論設計INVENTOR，甚至是塑造了現在的Autodesk，他的團隊設計的軟體與以往的軟體相較之下，對中端用戶更為值觀，他們也試著讓INVENTOR的容量變得比過去的設計軟體還小。Inventor是第一個實現幾何設計的軟體，ineventor會將圖形數據與實際模型數據分開，實質上就是將零件的圖形和較複雜材料和幾何數據分開加載。在INVENTOR引入設計領域後，在所有工程工作流程中最具革命性的軟體。 多年來，INVENTOR也有許多的變化，但AUTODESK的設計絲路依舊保持不變。工程師們一直致力於讓軟體直觀易用，這是 Jay Tedeschi所堅定的概念。 \n', 'tags': '', 'url': 'Inventor 2019.html'}, {'title': '繪圖認證-1', 'text': '\n >>>>>>> d9bbab3fc9613dfae3821bb1ae661ceda2472b6e \n \n', 'tags': '', 'url': '繪圖認證-1.html'}, {'title': 'NX 12', 'text': '<<<<<<< HEAD\n source :\xa0 NX-12-for-Engineering-Design.pdf  \n=======\n source :\xa0 NX-12-for-Engineering-Design.pdf \n', 'tags': '', 'url': 'NX 12.html'}, {'title': '繪圖認證-2', 'text': '\n \n ----------------------------------------------------------------------------------- \n \n \n ----------------------------------------------------------------------------------- \n \n \n ----------------------------------------------------------------------------------- \n \n \n ----------------------------------------------------------------------------------- \n \n \n ----------------------------------------------------------------------------------- \n \n \n ----------------------------------------------------------------------------------- \n \n \n ----------------------------------------------------------------------------------- \n \n \n ----------------------------------------------------------------------------------- \n \n \n ----------------------------------------------------------------------------------- \n \n \n>>>>>>> 9a179c3293eff2ae3e082b09dafdab68a68de3df\n', 'tags': '', 'url': '繪圖認證-2.html'}, {'title': 'CHAPTER 1 – INTRODUCTION', 'text': '\xa0 \xa0在全球競爭日益激烈的背景下，現代製造環境的特徵在於交付品種日益增多，並趨向於小批量和高質量的產品。 除非以高質量、低成本和在更短時間推出新產品，否則在全球競爭中生存是一件很難的事。隨著計算能力的巨大變化和用於設計和生產的軟件工具的廣泛可用性，工程師現在正在使用計算機輔助設計（CAD），計算機輔助製造（CAM）和計算機輔助工程（CAE）系統來自動化其設計和生產過程。 現在，這些技術每天都用於各種不同的工程任務。 以下是產品實現過程中如何使用CAD，CAM和CAE技術的簡要說明。 \n 1.1 PRODUCT REALIZATION PROCESS\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0產品實現過程可以大致分為兩個階段：設計和製造。 設計過程從識別新客戶需求和待改進的設計變量開始，這些營銷變量在獲得客戶反饋後由市場營銷人員進行識別。 一旦收集了相關的設計信息，就制定了設計規範。 根據相關設計信息進行可行性研究，並進行詳細設計和分析。 詳細設計包括設計概念化，預期產品圖紙，草圖和幾何建模。 分析包括應力分析，干涉檢查，運動學分析，質量特性計算和公差分析以及設計優化。 從這些活動中獲得的結果的質量與分析的質量以及進行分析的工具直接相關。 \n 製造過程始於從生產計劃開始的車間活動，該活動使用設計過程圖並以實際產品結束。 流程計劃包括生產計劃，材料採購和機器選擇等活動。 在生產過程的各個階段，需要完成各種任務，例如購買新工具，NC編程和質量檢查。 流程計劃包括對產品製造中使用的所有流程的計劃。 通過質量控制檢查的零件將經過功能測試，包裝，標記和運送給客戶。 \n \n \xa0 \xa0 \xa0 Product Realization Process (Mastering CAD/CAM, by Ibrahim Zeid, McGraw Hill, 2005). \n \n 1.2 BRIEF HISTORY OF CAD/CAM DEVELOPMENT \xa0 \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0當前的CAD / CAM技術的起源可以追溯到文明古代，當時古埃及的工程師意識到了圖形通信的存在。現今的正交投影技術是在1800年代左右發明的。，CAD / CAM系統的真正開發始於1950年代。 CAD / CAM在上個世紀經歷了四個主要的發展階段。 1950年代被稱為交互式計算機圖形時代，而當時計算機的缺點使這個時代的發展放慢了腳步。在1950年代後期，開始了自動編程工具（APT）的開發。 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa01960年代是交互式計算機圖形學最關鍵的研究時期。伊万·薩瑟蘭（Ivan Sutherland）開發了一個畫板系統，該系統演示了在陰極射線管（CRT）上交互式創建圖形和對象替換的可能性。 CAD一詞開始出現，“設計”一詞超越了基本的製圖概念。 \n \xa0 \xa0 \xa0 \xa0 \xa0 在1970年代，過去十年中計算機圖形學的研究工作開始富有成果，工業，政府和學術界都意識到了交互式計算機圖形學在提高生產率方面的潛力。 1970年代被譽為計算機製圖的黃金時代和專用儀器設計應用程序的開始。國家計算機圖形協會 成立 （NCGA），並啟動了初始圖形交換規範（IGES）。 \n \xa0 \xa0 \xa0 \xa0 \xa0 在1980年代，新的理論和算法得到了發展，並且設計和製造的各種要素都得到了發展。主要的研究和開發重點是將CAD / CAM系統擴展到三維幾何設計之外，並提供更多的工程應用。 \n \xa0 \xa0 \xa0 \xa0 \xa0 目前，CAD / CAM的開發側重於設計和製造中各種元素的高效、快速集成和自動化，以及新算法的開發。 有許多可用於直接使用的商業CAD / CAM軟件包，它們非常易於使用並且對外的態度非常友好。 \n 以下是當前市場中的一些商業軟件包。 \n ■\xa0 Solid Edge，AutoCAD，Inventor和TurboCAD是一些負擔得起的CAD軟件系統。 \n ■\xa0 NX，Pro-E，CATIA和SolidWorks是高端建模和設計軟件系統，它們成本更高但功能更強大。 這些軟件系統還具有計算機輔助的製造和工程分析功能。 ■\xa0 Onshape和Fusion 360是基於雲的CAD軟件，可通過用戶的瀏覽器提供CAD功能。 \n ■\xa0 ANSYS，ABAQUS，NASTRAN和COMSOL是主要用於CAE的軟件包。 \n \n 1.3 DEFINITION OF CAD/CAM/CAE\xa0 \n \xa0 \n 1.3.1 Computer Aided Design – CAD\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 CAD是與使用計算機系統來協助設計的「創建，修改，分析和優化有關的技術」。 任何體現計算機圖形的計算機程序和在設計過程中有助於工程功能的應用程序都可以歸類為CAD軟件。 \n \xa0 \xa0 \xa0 \xa0 \xa0 CAD的最基本作用是定義設計的幾何形狀-機械零件，產品組裝，建築結構，電子電路，建築物佈局等。CAD系統的最大好處是可以節省大量時間和精力， 減少因每次需要重新定義設計的幾何形狀而導致的錯誤。 \n Computer Aided Manufacturing – CAM \n CAM技術涉及計算機系統，該系統通過與工廠生產資源的計算機接口來計劃、管理和控制製造操作。  CAM最重要的領域之一是數控「（NC）」。 這是一種使用編程指令來控制機床的技術，該機床將切削，銑削，磨削，沖壓或將原料製成成品。 CAM的另一個重要功能是在機器人編程中。 流程計劃也是計算機自動化的目標。 \n Computer Aided Engineering – CAE \n CAE技術使用計算機系統來分析CAD創建的產品的功能，從而使設計人員可以模擬和研究產品的性能，從而可以優化和優化設計。 \n CAE工具可用於許多不同類型的分析。 例如，運動學分析程序可用於確定機構中的運動路徑和連桿速度。 動態分析程序可用於確定複雜組件（例如汽車）中的載荷和位移。 最受歡迎的分析方法之一是使用有限元方法（FEM）。 該方法可用於確定應力，變形，傳熱，磁場分佈，流體流動和其他連續場問題，而這些問題通常很難用任何其他方法解決。 \n \n 1.4. SCOPE OF THIS TUTORIAL\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 本教程是為有興趣學習如何使用NX 12設計機械零部件的學生和工程師編寫的。 學習使用NX 12對於學習如何使用其他CAD系統（例如PRO-E和CATIA）也將非常有價值。 本教程提供了學習NX 12的系統方法。 \n \xa0 \xa0 \xa0 \xa0 \xa0 第2章介紹了NX 12的基本知識，從開始會議到通過練習基本功能（如打印，保存和退出）來熟悉NX 12佈局。它還簡要介紹了坐標系，圖層，各種工具箱和其他重要命令，這些將在後面的章節中使用。 \xa0 \xa0 \xa0 \xa0 \xa0 第3章介紹了素描的概念。它描述瞭如何創建草圖以及給出幾何和尺寸約束。本章非常重要，因為當今的組件的幾何形狀非常複雜，並且僅憑基本特徵很難建模。 零件的實際設計和建模始於第4章。它描述了不同的特徵，例如參考特徵，後掠特徵和原始特徵，以及這些特徵如何用於創建設計。對特徵執行各種特徵操作。 \xa0 \xa0 \xa0 \xa0 \xa0 您將在第5章中學習如何從零件模型創建圖形。在本章中，我們將演示如何通過添加視圖，標註零件圖形的尺寸以及修改圖形中的各種屬性（例如文本大小，箭頭大小）來創建圖形。和寬容。 \xa0 \xa0 \xa0 \xa0 \xa0 第6章介紹了裝配建模的概念及其術語。它描述了TopDown建模和Bottom-Up建模。我們將使用自下而上的建模方法將組件組裝到產品中。 \xa0 \xa0 \xa0 \xa0 \xa0 第7章介紹了自由格式建模。將演示建模曲線和平滑表面的方法。 \xa0 \xa0 \xa0 \xa0 \xa0 第8章簡要介紹了NX 12中用於有限元分析的設計仿真 \n \xa0 \xa0 \xa0 \xa0 \xa0 第9章是將設計的模型實施到加工環境中進行加工的實時經驗。 本章介紹刀具路徑的生成，驗證和仿真，以創建CNC（計算機數字代碼），以從多軸甚至先進的CNC機床生產設計零件。 \n \xa0 \xa0 \xa0 \xa0 \xa0 每章中使用的示例和練習題經過精心設計，最終將在本章中進行匯總。 由於這一獨特功能，您應該保存在每一章中創建的所有模型。 \n \xa0NX歷史 \n \xa0 NX源自於美國麥道航太公司，近30年的資深CAD / CAM / CAE系統，再加上西門子在系統與設備，工程上的經驗與能力提供在加工與產品開發設計上更多的資源與整合。 \n 在CAM加工上智慧模型（MasterModel）的概念，至少包含3DCAD模型，與NC路徑的完整關聯性，並替換數據大小以及刀具路徑的管理，在高速切銷加工上提供穩定可靠與加工品質，同時針對複合銑削加工的領域提供完整的解決方案。 \n NX優點 \xa0 NX讓客戶增加新產品數量，減少30％以上的開發時間，縮短70％以上的設計分析重複作業，並減少高達90％的電腦數控（CNC）編程時間。 \n CAD   \xa0• 從零件設計資料輸入開始，通常是3D CAD模型，某些情況下也可能是2D圖面。通常會需要用到3D CAD軟體以準備或調整零件設計模型，進行後續的NC編程操作。 \n CAM   \xa0• NX CAM包含NC編程，後處理及工具機模擬。 \xa0• 功能完備的套件Siemens是進階工具機控制器技術及驅動設備領域的公認領導廠商。 \n NX CAD / CAM一體化的優勢 \xa0• 3D零件建模準備NX最新的CAD技術能夠NC程序設計師迅速準備零件模型，包括協力廠商的CAD模型。只要利用同步建模技術，就可以直接編輯零件模型，準備讓零件進入NC編程。 \n \xa0• NX提供一組專門的CAD功能，讓NC程序設計師能夠在建立NC操作之前快速進行分析。 \n \xa0•\xa0 建模，組立件與製圖-NX提供了當今市場上最強大的CAD功能組合。這些功能已替換NX CAM之中，且有需要的NC程序設計師使用建立零件，坯件形狀，夾治具或工具機模型以進行模擬 。 CAD-CAM-CNC流程鏈 \n \n \n', 'tags': '', 'url': 'CHAPTER 1 – INTRODUCTION.html'}, {'title': 'CHAPTER 2 – GETTING STARTED', 'text': '2.1啟動NX12 \n 2.1.1啟動NX12 \n 2.1.2 打開新的文件 \n a.點擊屏幕頂部的“新建”按鈕 \n b.瀏覽屏幕左上方的“文件”下拉菜單，然後單擊“新建”  c.按<Ctrl> + N \n 2.1.3 打開零件文件 \n a.單擊屏幕頂部的\xa0Open\xa0 或Open a Recent Part\xa0打開最近的零件按鈕 b. 瀏覽屏幕左上方的“File\xa0”下拉菜單，然後單擊“Open” c. 按<Ctrl> + O \n  這個快捷將顯示“打開零件文件”對話框。您可以在窗口右側看到文件的預覽。 您可以通過取消選中預覽按鈕前面的框來禁用預覽 d. 單擊Cancel退出窗口 2.2列印，儲存和關閉文件 \n \xa02.2.1打印NX 12圖像要從當前顯示器打印圖像 \n ➢點擊文件→打印 在這裡，您可以選擇要使用的影印機，或者指定要影印的份數，紙張尺寸等。您還可以為所有三個尺寸選擇比例。您還可以通過尺寸 輸出拖動菜單來選擇打印方法，即線框，實體模型， \n ➢點擊取消退出窗口 \n 2.2.2保存零件文件 必須經常儲存工作。 如果由於某些原因NX 12關閉並且未保存零件，則所有工作將丟失。 要保存零件文件， ➢單擊文件→保存，有五個選項可保存文件：保存：此選項將在創建零件文件時使用與先前相同的名稱將零件保存在屏幕上。 \n .a.僅保存工作零件：此選項僅將活動零件保存在屏幕上。 b.另存為：此選項允許您使用其他名稱和/或類型將零件保存在屏幕上。 默認類型是.prt。 但是，您可以將文件另存為IGES（.igs），STEP 203（.stp），STEP 214（.step），AutoCAD DXF（.dxf），AutoCAD DWG（.dwg），CATIA模型（.model）和CATIA V5（.catpart）。 c.全部保存：此選項將保存所有打開的零件文件及其現有名稱。 \n d.保存書籤：此選項會將屏幕上截圖和當前模型的上下文保存為.JPEG文件和書籤。 \n 2.2.3關閉零件文件 \n 您可以選擇關閉屏幕上可見的零件，方法是： ➢單擊文件→關閉。如果關閉文件，該文件將從工作存儲器中清除，所有未保存的更改將丟失。 因此，請記住選擇“保存並關閉”，“另存為並關閉”，“保存所有並關閉”或“保存所有並退出”。 對於前三個選項，將關閉所選的零件或所有零件，但NX 12會話將繼續運行。 \n 2.2.4退出NX 12 \n ➢單擊文件→退出 \xa0 如果您打開了文件並在未保存的情況下對其進行了更改，則該消息將詢問您是否確實要退出。 ➢選擇否，保存文件，然後退出 2.3\xa0 NX 12介面 通過使用不同的圖標，NX 12的用戶界面變得非常簡單。大多數命令可以通過在屏幕上導航鼠標並單擊圖標來執行。鍵盤輸入主要限於輸入值和命名文件。 \n 2.3.1鼠標功能 \n 2.3.1.1鼠標左鍵（MB1） \n 鼠標左鍵在NX中稱為鼠標鍵1（MB1），用於在圖形屏幕上選擇圖標，菜單和其他實體。在任何功能上雙擊MB1都會自動打開“編輯對話框”。單擊對像上的MB1，使用戶可以快速訪問下面顯示的幾個選項。這些選項將在下一章中討論。 \n 2.3.1.2鼠標中鍵（MB2） \n 鼠標中鍵（MB2）或滾動按鈕用於通過按住，拖動來旋轉對象。模型也可以繞單個軸旋轉。要繞水平於屏幕的軸旋轉，請將鼠標指針放在圖形屏幕的右邊緣附近並旋轉。同樣，對於垂直軸和垂直於屏幕的軸，分別單擊屏幕的底部邊緣和頂部邊緣並旋轉。如果在同一位置連續按住MB2幾秒鐘，它將固定旋轉點（出現橙色圓圈符號），並且可以在對象周圍拖動以查看。 如果是滾動按鈕，則可以通過滾動對象來放大和縮小。如果打開了任何彈出窗口或對話框，則單擊MB2還將執行OK命令。 \n \xa02.3.1.3鼠標右鍵（MB3） \n MB3或鼠標右鍵用於訪問用戶界面彈出菜單。您可以訪問隨後彈出的選項，具體取決於選擇模式和應用程序。下圖顯示在Sketch Application中。選擇功能後單擊MB3將提供與該功能相關的選項（對象/操作菜單）。單擊MB3並按住該按鈕將在功能周圍顯示一組圖標。這些圖標帶有可應用於功能的可能命令。 \n 2.3.1.4按鈕組合放大/縮小： \n ➢同時按住MB1和MB2並拖動 要么 ➢按住鍵盤上的<Ctrl>按鈕，然後按住並拖動MB2 要么 \xa0 泛： ➢同時按住MB2和MB3並拖動 要么 ➢按住鍵盤上的<Shift>按鈕並按住MB2 \xa0 菜單快捷方式： ➢按住<Ctrl> + <Shift>和MB1，MB2和MB3分別查看功能，直接草圖和同步建模組的快捷方式 \xa0 2.3.2NX 12介面 \n 2.3.3幾何選擇 \n 您可以過濾選擇方法，以便於在繁雜中輕鬆選擇幾何。 此外，您可以根據所選實體執行NX 12智能提供的任何功能操作選項。 項目的選擇可以基於實體的程度，例如，幾何實體，特徵和組件的選擇。 可以通過選擇選擇工具欄中的圖標之一來選擇選擇方法。 \n 2.3.3.1特徵選擇 \n 單擊任何圖標，可以選擇零件文件中的特徵。 它不會選擇諸如邊，面等基本實體。所選的特徵還可以根據需要應用於零件或整個裝配體。除此之外，可以通過在下拉菜單中選擇所需選項之一來進一步縮小特徵的過濾範圍，如圖所示。 例如，選擇“曲線”將僅在屏幕上突出顯示曲線。 默認值為“\xa0No Selection Filter無選擇過濾器”。 \n 2.3.3.2常規對象選擇 \n \xa0將鼠標光標導航到更靠近實體的位置，直到用洋紅色突出顯示該實體，然後單擊鼠標左鍵以選擇任何幾何實體，特徵或組件。 如果要選擇隱藏在顯示的幾何圖形後面的實體，請將鼠標光標放在屏幕上的該區域附近，以使光標球佔據投影在屏幕上的隱藏幾何圖形的一部分。幾秒鐘後，球形光標變為加號，如圖所示。單擊鼠標左鍵（MB1），將顯示“選擇確認”對話框，如下圖所示。此QuickPick菜單包含在光標球內捕獲的實體的列表。實體按其程度的升序排列。例如，為邊和頂點分配的數字較小，而為實體面分配的數字較大。通過在顯示的數字上移動光標，NX 12將在屏幕上以洋紅色突出顯示相應的實體。 \n \n \n 2.3.4用戶偏好 \n 2.3.5應用 \n 可以使用位於主窗口左上角的“文件”選項或功能區欄上方的“應用程序”選項卡來打開應用程序。 您可以選擇要運行的應用程序類型。 例如，您可以選擇“建模”，“製圖”，“裝配”等 \n 2.4圖層 \n “圖層”提供了一種永久的方式來組織和管理文件中對象的可見性和選擇性。 \n 2.4.1圖層控制 \n 使用NX 12，您可以使用“圖層”控制對像是可見還是可選。圖層是NX 12中所有對象必須具有的系統定義的屬性，例如顏色，字體和寬度。 NX 12中有256個可用圖層，其中一層始終是工作圖層。 256層中的任何一層都可以分配給四個狀態類別之一。 .a.工作 \xa0b.可選 \xa0c.僅可見 \xa0d.不可見 工作圖層是在其上創建對象的圖層，並且在保留工作 圖 層的同時始終可見且可以選擇。啟動新零件文件時，第1層是默認的工作 圖 層。當工作 圖 層更改為另一種類型的 圖 層時，先前的工作層將自動變為“可選”，然後可以分配為“僅可見”或“不可見”狀態。 可以在一 圖 層上的對象數量不受限制。您可以自由選擇要在其上創建對象的任何 圖 層以及該層的狀態。 要將狀態分配給一個或多個圖層， ➢選擇查看→圖層設置 但是，應該注意，關於 圖 層的標準的使用將有利於保持文件之間的一致性。 \n 2.4.2分層命令 \n 我們將按照簡單的步驟來練習“圖層”中的命令。首先，我們將通過以下方法創建兩個對象（實體）。實體建模的細節將在下一章中討論。我們在此處繪製的實體僅在本章中用於實踐。 ➢選擇文件→新建 命名文件並選擇要在其中保存文件的文件夾。確保在下拉菜單中選擇以毫米為單位。選擇文件類型作為模型 ➢選擇菜單→插入→設計特徵→圓錐體➢在類型下選擇直徑和高度 ➢點擊確定 ➢右鍵單擊屏幕，然後選擇“ Orient View”→“ Trimetric” ➢右鍵單擊屏幕，然後選擇“渲染樣式”→“陰影” 您將能夠看到類似於右圖的實心圓錐。 現在讓我們練習一些圖層命令。 ➢選擇查看→移動到圖層 系統將要求您選擇一個對象 ➢將光標移到圓錐上並單擊，使其突出顯示 ➢點擊確定 ➢在窗口頂部的“目標層”或“類別”空間中，輸入25，然後單擊“確定”。 圓錐現在已經到達第25層。在第1層中不再可見。 ➢要查看圓錐體，請單擊查看→圖層設置 ➢您可以看到第25層有對象，而默認的工作第1層沒有對象。 錐體將再次出現在屏幕上。保存該文件，因為我們將在本教程的後面部分中使用它。 \n 2.5座標系統 \n 2.6 工具列表 \n', 'tags': '', 'url': 'CHAPTER 2 – GETTING STARTED.html'}, {'title': 'CHAPTER 3 – TWO DIMENSIONAL SKETCHING', 'text': '第3章-二維草圖 \n 在本章中，您將學習如何在NX 12中創建和編輯草圖。您可以在“建模中的平面”應用程序中直接創建草圖。在大多數情況下，建模從2D草圖開始，然後拉伸，旋轉或掃掠草圖以創建實體。通過繪製草圖可以輕鬆地繪製許多本來很難建模的複雜形狀。在本章中，我們將看到一些草圖繪製概念，然後繼續對某些零件進行草圖繪製和建模。 \n 3.1概述 \n NX 12草圖是一組命名的曲線，這些曲線連接在一個字符串中，掃描後形成實體。草圖表示該零件的外邊界。曲線在草繪器中的平面上創建。首先，這些曲線的繪製沒有任何確切的尺寸。然後，應用尺寸約束和幾何約束來完全約束草圖。這些將在本章後面詳細討論。 繪製完成後，可以使用多種方法來生成3D零件： \n •草圖可以旋轉 \n •草圖可以拉伸 \xa0 •草圖可以沿參考線（線）進行掃掠： \xa0 \xa0 從草圖創建的特徵與之關聯；即，如果草圖發生變化，特徵也會發生變化。 \n 使用草圖創建零件的優點是： •用於創建輪廓輪廓的曲線非常靈活，可用於建立模型在非正規形狀上。 •曲線是參數化的，因此具有關聯性，可以輕鬆更改或刪除它們。 •如果更改了繪製草圖的平面，則草圖也會相應更改。 •當您想要控制功能的輪廓時，草圖很有用，尤其是將來可能需要更改時。草圖可以快速，輕鬆地進行編輯。 \n \n 3.2繪製草圖的情形 \n \n 在NX 12中，可以使用兩種方法創建草圖。第一種方法在當前環境和應用程序中創建Sketch。 ➢選擇菜單→插入→草圖 在另一種方法中，您可以使用 ➢在主工具欄中選擇草圖 無論哪種情況，都會彈出一個對話框，要求您定義草圖平面。屏幕將顯示草圖選項。您可以選擇“草繪平面”，草繪方向和草繪平面類型。使用“創建草圖”對話框創建草圖時，可以通過單擊所示的坐標係來選擇可以在其上創建草圖的平面。這將突出顯示您選擇的平面。選擇的默認平面為XC-YC。但是，您可以選擇在另一平面上繪製草圖。如果事先在模型中創建了任何實體特徵，則任何平面都可以用作草繪平面。 ➢選擇XC-YC平面並單擊確定 將顯示草圖平面，並標記X-Y方向。 \n \n 3.3草圖曲線工具欄 該工具欄包含用於創建常用類型的曲線和样條曲線，編輯，擴展，修剪，圓角等的圖標。每種類型的曲線都有不同的選擇方法和創建方法。 讓我們討論最常用的選項。 \n \xa0 輪廓 此選項會根據您在彈出工具欄中選擇的圖標創建直線和圓弧。 您可以通過使用坐標系或通過輸入線的長度和角度來拾取點。 \n \xa0 線 此選項將選擇性地僅創建直線。 \n \xa0 弧 此選項通過兩種方法之一創建弧。 第一個選項創建具有三個連續點的弧。 第二個選項創建具有中心點，半徑和後掠角的圓弧，或者創建具有起點和終點的圓弧。 \n \xa0 圈 創建圓類似於創建圓弧，不同之處在於，圓是封閉的。 \n 快速修剪 這將從曲線的交點修剪延伸的曲線。如果每個實體與另一個實體相交，則此選項通過拆分每個實體來讀取它們，並擦除所選部分。 \n 樣條(樣條函數)曲線 您可以創建具有極點或具有所需曲線度的點的基本樣條曲線。 \n \n 3.4約束工具欄 \n 所有曲線都是通過拾取點創建的。例如，一條直線有兩個點。在2D環境中，任何點都具有兩個自由度，一個沿X軸，另一個沿Y軸。點的數量取決於要創建的曲線的類型。因此，曲線實體的自由度數是其包含的點數的兩倍。這些自由度可以通過使用固定實體創建約束來消除。實際上，建議您通過直接或間接將實體與固定實體相關聯來刪除所有這些自由度（使草圖完全受約束）。可以通過提供尺寸或幾何屬性（如平行度，垂直度等）來完成。 在NX 12中，智能約束是自動應用的，即NX 12會解釋自動尺寸或幾何約束。您可以通過單擊“連續自動標註”來關閉此選項，如下所示。以下段落顯示瞭如何手動應用約束。 \n 尺寸約束 可以通過給尺寸賦予固定實體（例如軸，平面，坐標系或模型中創建的任何現有實體幾何形狀）來消除自由度。這些尺寸可以是線性，徑向，角度等。您可以在草繪過程中隨時通過雙擊尺寸來編輯尺寸值。 \n \xa0幾何約束 除了尺寸約束之外，還可以提供一些幾何約束以消除自由度。它們包括平行的，垂直的，共線的，同心的，水平的，垂直的，等長的，等等。該軟件能夠為所選實體找到可能的約束集。例如，在下圖中的線上施加一個約束，使其平行於矩形的左側（該線最初與矩形成一定角度）。 \n \xa0顯示草圖約束 單擊此圖標將以白色顯示與該特定草圖中的實體相關的所有選項。 \n 顯示/刪除約束 該窗口列出了與所選任何實體相關的所有約束和約束類型。您可以刪除任何列出的約束或更改約束的順序。 狀態行中顯示不受約束的自由度數。所有這些都應通過應用約束來遵循嚴格的模型來刪除。 \n \xa03.5範例 \n 3.6練習 \n 3.6.1圓形底座本手冊的幾章中將出於多種目的使用的一種模型是具有十多個組件的簡化的刀桿壓機。我們在本章的示例3.5.1中為這些組件之一建模。另一個組件是圓形底座，用於將工件固定在壓力機下。使用下面給出的尺寸對圓形底座進行建模（尺寸以毫米為單位）。 \n \n 3.6.2固定器的草圖在第4章的練習之一中，將要求您為固定器建模。建模3D支架需要多個2D草圖。作為該練習的起點，對下圖所示的2D草圖進行建模並保存文件（所有尺寸均以英寸為單位）。 \n \n \n \n', 'tags': '', 'url': 'CHAPTER 3 – TWO DIMENSIONAL SKETCHING.html'}, {'title': 'Stress Analysis', 'text': 'https://www.youtube.com/watch?v=fZe79_imPUQ \n \n \n', 'tags': '', 'url': 'Stress Analysis.html'}, {'title': 'Solidworks', 'text': 'solidworks\xa0 brief\xa0 history \n \xa0 \xa0 \xa0 \xa0 Solidworks是由Jon Hirschtick於1993年12月創立的，Jon Hirschtick用100萬美元成立了該公司。 之後Hirschtick招募了一組工程師，他們的目標是創建3D CAD軟件，並且希望這個軟體能夠讓Windows系統的介面成功運作並適合Windows去利用。 \n \xa0 \xa0 \xa0 \xa0 1995年11月，SolidWorks很快發布了。它是Windows的第一個而且也很重要的建模器。事實證明這是CAD後續發展的重要一步，雖然AutoCAD發行得比Solidworks早得多，但SolidWorks為也帶來了新的東西-「3D建模」。因此，3D CAD成為1990年代的焦點。在短短幾個月內，SolidWorks改變了工程師將「創造變為現實」的方式。 \n \xa0 \xa0 \xa0 \xa0 SolidWorks實在令人印象深刻，以至於1997年，它被達索系統公司（DassaultSystèmes）以3.2億美元的驚人股票收購，Jon Hirschtick在接下來的14年留任，在他的領導下，SolidWorks也成功的成長為收入達1億美元的公司。 赫希提克後來離開，創立了另一家我們熟悉的公司Onshape。 \n \xa0 \xa0 \xa0 \xa0\xa0\xa0當SolidWorks於1995年首次發佈時，它確實改變了遊戲規則，有了它，首選平台就從UNIX轉移到了PC， 軟件的成本也從18,000美元變到4,000美元，所需的培訓被大量壓縮為幾天。不用說，SolidWorks徹底改變了每個工程師的桌面。自成立以來，SolidWorks已有了26個版本，每個版本都提供更多功能和增強功能。 \n Solidworks practice \n https://www.youtube.com/watch?v=ZkHTpLE2LiQ \n \n \n \n \n \n', 'tags': '', 'url': 'Solidworks.html'}, {'title': 'Creo 6.0', 'text': '', 'tags': '', 'url': 'Creo 6.0.html'}, {'title': 'Onshape', 'text': '', 'tags': '', 'url': 'Onshape.html'}, {'title': 'W17協同任務', 'text': 'https://cyberbotics.com/doc/guide/tutorial-2-modification-of-the-environment \xa0 \n Hands-on #1:  Make sure the my_first_simulation.wbt world file is open, and that the simulation is paused and is at a virtual time of 0. Using the File / Save World As... menu, save the simulation as obstacles.wbt. \n 確保先前儲存的文件已經打開,並將模擬暫停及時間歸零,在另存成obstacles.wbt \n Hands-on #2:  To remove the RectangleArena, select it either in the 3D view or in the scene tree view with a left click and press the Delete key on your keyboard. Alternatively, you can right click on it in the 3D view and select Delete in the context menu (you can also use the context menu directly in the scene tree view). Select the TexturedBackroundLight node and click on the Add button. In the open dialog box, and choose PROTO nodes (Webots Projects) / objects / floors / Floor (Solid). \n 在3D試圖或場景樹中將 RectangleArenag 刪除並點選 TexturedBackroundLight 再點 add 並依路徑選擇 PROTO nodes (Webots Projects) / objects / floors / Floor (Solid) \n Hands-on #3:  In the scene tree view select and expand the Floor. Modify the size field and set it to {1, 1} to resize it to 1mx1m. \n 將 Floor 展開 將 size 字段修改成 1X1 \n The solid node (實體節點) \n A Solid node represents a rigid body,To define a rigid body, you will have to create a Solid node. Inside this node you will set up different sub-nodes corresponding to the characteristics of the rigid body. The following figure depicts a rigid body and its sub-nodes. The graphical representation of the Solid node is defined by the Shape nodes populating its children list. The collision bounds are defined in its boundingObject field. The graphical representation and the collision shape are often but not necessarily identical. Finally, the physics field defines if the object belongs to the dynamical or to the static environment. All these sub-nodes are optional, but the physics field needs the boundingObject to be defined. \n Solid節點代表一個剛體,在節點內可依缸體特性設置子節點,下圖描繪了剛體及子節點 下圖以 Shape 定義 Solid節點中的children。在 boundingObject 字段中定義碰撞範圍。圖形表示與碰撞形狀不一定相同。physics字段是定義屬於動態環境或靜態環境,但需要 boundingObject 定義該字段。 \n Create A Ball (創建一個球) \n Hands-on #4:  In the scene tree view, select the last node and press the Add button. In the dialog, open the Bases nodes section and select the Solid node. In the scene tree view, expand the Solid node and select its children field. Add a Shape node to it by using the Add button. Select the appearance field of the Shape node and use the Add button to add a PBRAppearance node. \n 1.Add a Sphere node as the geometry field of the newly created Shape node. 2.Expand the PBRAppearance node and change its metalness field to 0 and its roughness field to 1. 3.Add another Sphere node to the boundingObject field of the Solid. 4.Finally add a Physics node to the physics field of the Solid. 5.By modifying the translation field of the Solid node, place the ball in front of the robot (at {0, 0.2, -0.2} for example). 6.Save the simulation. 7.The result is depicted in this figure. \n \n 步驟#4:在場景視圖中，選擇最後一個節點並且按"ADD"鈕，在對話框裡打開"基礎"節點(Bases nodes)，接著選擇"實體"節點(Solid node)。 \n 在場景視圖中，展開"實體"節點(Solid node)，然後選擇子字段(children field)，按"ADD"新增一個"形狀"節點，選擇形狀節點中的外觀字段， 接著按"ADD" 鈕 新增一個"PBRAppearance"節點。 \n 1.新增一個球體節點(Sphere node)作為新建的形狀節點的幾何字段。 2.展開PBRAppearance節點，並且將金屬字段設定0，接著粗糙度字段設定1。 3.新建另一個球體節點(Sphere node)，並添加到實體的 boundingObject 字段。 4.最後，新增一個Physics節點到實體中的Physical字段。 5.修該時體節點的平移字段，把球放在機器人面前(例如:在座標[0,0.2,-0.2])。 6.儲存模擬。 7.結果如圖所示。 \n Geometries (幾何形狀) \n Hands-on #5:  For each Sphere node defining the ball, set its radius field to 0.05 and its subdivision field to 2. Refer to the Reference Manual to understand what the subdivision field stands for. \n 步驟#5:定義每個球體節點，將半徑字段設置為0.05，並且把細分(subdivision)字段設定為2，請查閱《參考手冊》了解細分字段的意義。 \n ======= \n DEF-USE Mechanism \n 定義使用原理 \n Hands-on #6: Select the first Sphere node (the child of the Shape) in the scene tree view. The field editor of the scene tree view allows you to enter the DEF string. \n 動手操作6 : 在左邊場景列中選擇第一個Sphere模型(Shape的次級模型)。  點選場景列中的 field editor，這裡可以讓你輸入指令。 \n \n 1.Enter BALL_GEOMETRY in this field. 第一步 : 輸入 BALL_GEOMETRY  2.Select the boundingObject field (containing the second Sphere node), and empty it by right clicking the field in the scene tree and choosing the Delete entry in the context menu that pops up. 第二步 : 選擇boundingObject(包含第二個的Sphere模型)，然後點擊右鍵選擇刪除 3.Then, select the boundingObject field and click on the Add button, and select the USE / BALL_GEOMETRY in the dialog box. 第三步 : 然後選擇 boundingObject ，點選添加後在對話中選擇 USE / BALL_GEOMETRY 4.The result is shown in this figure. \n \n Add Walls 添置牆壁 \n In order to verify your progression, implement by yourself four walls to surround the environment. 為了確認你的進度，請自己在環境中設置四道牆。 The walls have to be defined statically to the environment. Understand the difference between static and dynamic 必須根據環境的條件去定義牆壁，並區分動態與靜態的區別。 \n Hands-on #8: Add four walls without physics and using only one definition of the Shape node. 僅使用形狀的定義去添加牆壁 \n \n ======= \n \n \n Solution: World File 解決方案：世界文件 To compare your world with the solution, 為了將您的世界與解決方案進行比較，  go to your files and find the folder named "my_first_simulation" created in Tutorial 1, 轉到文件，找到在教程1中創建的名為“ my_first_simulation”的文件夾  then go to the "worlds" folder and open with a text editor the right world.  然後轉到“世界”文件夾，並使用文本編輯器打開正確的世界。 This solution as the others is located in the solution directory. 與其他解決方案一樣，該解決方案位於解決方案目錄中。 \n Efficiency /\xa0 效率 The simulation of rigid bodies is computationally expensive.  剛體的模擬在計算上是昂貴的。 The simulation speed can be increased by minimizing the number of bounding objects,  通過最小化邊界對象的數量可以提高仿真速度， minimizing the constraints between them (more information about the constraints in the next tutorials), 使它們之間的約束最小化（有關下一個約束的更多信息）， and maximizing the WorldInfo.basicTimeStep field.   並最大化WorldInfo.basicTimeStep字段。 On each simulation, 在每次模擬中 a trade-off has to be found between simulation speed and realism. 必須在仿真速度和真實性之間找到一個權衡。 \n Conclusion 結論 At the end of this tutorial, 在本教程的最後， you are able to create simple environments based on rigid bodies.  您能夠基於剛體創建簡單的環境。 You are able to add nodes from the scene tree view and to modify their fields. 您可以從場景樹視圖添加節點並修改其字段。 You have become acquainted with the Solid,Physics, Shape, Sphere and Box nodes. 您已經熟悉了實體，物理，形狀，球體和盒子節點。 You also saw the DEF-USE mechanism that allows to reduce node redundancy of the scene tree. 您還看到了DEF-USE機制，該機制可減少場景樹的節點冗餘。 \n >>>>>>> 9a179c3293eff2ae3e082b09dafdab68a68de3df \n \n \n', 'tags': '', 'url': 'W17協同任務.html'}]};