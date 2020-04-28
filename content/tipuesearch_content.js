var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'OBS串流使用方法及問題', 'text': '\n \n 使用方法: \n 1. 先到OBS官網下載最新版本並安裝 https://obsproject.com/download \n 2.找到資源案+號擷取螢幕和擷取視訊鏡頭 \n 3.開啟設定選擇串流平台YOUTUBE \n 4.案取得金鑰，並從網路上複製下來貼上 \n 5.案開啟串流 \n 無法擷取螢幕黑畫面解決方法: \n 1. WINDOWS設定，選擇顯示器拉到底 \n 2.選擇圖形設定 \n 3.瀏覽並找到OBS主程式 \n 4.設定成省點模式 \n', 'tags': '', 'url': 'OBS串流使用方法及問題.html'}, {'title': 'Python更新', 'text': '驗證影片 \n 1.先下載python3.8.2版 \n 2.安裝時先創建資料p382夾並選擇該資料夾 \n 3.安裝時將pip選項取消勾選 \n 4.將資料取代就資料夾 \n 5.將啟動當內舊的路徑改成新的p382 \n 6.安裝pip工具及完成 \n', 'tags': '', 'url': 'Python更新.html'}, {'title': '直播討論紀錄', 'text': '', 'tags': '', 'url': '直播討論紀錄.html'}, {'title': 'W2工作分配', 'text': '\n', 'tags': '', 'url': 'W2工作分配.html'}, {'title': 'W3小組討論工作方向', 'text': '\n', 'tags': '', 'url': 'W3小組討論工作方向.html'}, {'title': 'W5討論', 'text': '\n 討論內容 \n Webots toutorials 工作分配 \n 未來作業討論 \n', 'tags': '', 'url': 'W5討論.html'}, {'title': 'W6 OBS操作說明', 'text': '\n 開會內容 \n 說明OBS安裝及使用 \n 說明Webots工作方向 \n', 'tags': '', 'url': 'W6 OBS操作說明.html'}, {'title': 'W7線上課程操作說明與討論', 'text': '\n \n 討論內容 \n 說明線上課程操作流程 \n 分配四輪車零件繪製 \n 了解Remote API', 'tags': '', 'url': 'W7線上課程操作說明與討論.html'}, {'title': 'W8', 'text': '', 'tags': '', 'url': 'W8.html'}, {'title': '亂數分組', 'text': '要使用到隨機亂數抽取的功能就要使用到random套件 \n 在已知的數字清單中亂數抽取一個數字 \n import random \n x=random.choice([1,3,5,7,9]) \n print(x) \n >>1 \n 在已知的數字清單中亂數抽取兩個數字當作樣本 \n import random \n y=random.sample([1,3,5,7,9],2) \n print(y) \n >>[9,1] \n 將一組清單內的數字順序隨機調換 \n import random \n data=[1,3,5,7,9] \n z=random.shuffle(data) \n print(data) \n >>[3,7,1,5,9] \n 隨機取得介於0~1之前的數字 \n import random \n t=random.random() \n print(t) \n >>0.8883405366359395 \n 隨機取得介於指定數字間的非整數數字 \n import random \n c=random.uniform(0.0,20.0) \n print(c) \n >>16.102 \n 常態分配亂數，random.normalvariate(平均值,標準差) \n import random \n v=random.normalvariate(100,10) \n print(v) \n >>114.04193052665073 \n', 'tags': '', 'url': '亂數分組.html'}, {'title': 'Webots翻譯', 'text': '', 'tags': '', 'url': 'Webots翻譯.html'}, {'title': '傳感器', 'text': '\n', 'tags': '', 'url': '傳感器.html'}, {'title': '相機傳感器', 'text': '對於大多數應用程序而言，添加通用的Camera節點就足夠了。 通用相機是可自定義的（分辨率，視野，噪點等），默認情況下包括變焦和聚焦機制。 提供特殊效果，例如運動模糊，各種噪聲模型，鏡頭畸變和使用球形投影。除了添加通用的Camera節點外，Webot中還提供了一些預定義的Camera模型。 \n 智能相機 \n 如果將“識別”節點添加到相機，則相機不僅可以返回圖像，而且還可以返回相機圖像中檢測到的所有對象及其大小和位置。 因此，模擬像是Mobileye之類的智能相機非常容易。 \n \n MultiSense S21 \n MultiSense S21是基於立體相機的距離傳感器。我們的傳感器模型包括多個Webots設備。內部的IntertialUnit設備用於獲取設備的側傾角，俯仰角和偏航角。 可以使用Webots相機獨立檢索立體相機的左右RGB圖像。 或者，可以在MultiSense S21設備的中央啟用RGB相機和RangeFinder設備。 存在這兩個“元”設備以模仿由真實設備生成的3D彩色點的雲。 \n 可以使用下表從MultiSenseS21.name字段計算用於從控制器檢索設備的內部設備名稱： \n \n \n \n 名稱字段定義MultiSenseS21名稱，並用於計算內部設備名稱（請參閱此表）。 \n cameraWidth和cameraHeight字段指定所有內部渲染設備（即Cameras和RangeFinder）的分辨率。 \n cameraFieldOfView字段指定所有內部渲染設備的水平視場。 \n cameraNoise字段指定所有內部渲染設備的噪聲（請參閱Camera.noise）。 \n rangeFinderNoise字段指定內部元RangeFinder的噪聲（請參閱RangeFinder.noise）。 \n rangeFinderMaxRange字段指定內部元RangeFinder的最大範圍（請參閱RangeFinder.maxRange）。 \n leftCamera，rightCamera，metaCamera和metaRangeFinder字段允許啟用相應的內部渲染設備。 \n enablePhysics字段指定傳感器是否應該受到物理影響（質量= 1.5 [kg]）。 \n \n', 'tags': '', 'url': '相機傳感器.html'}, {'title': '距離傳感器', 'text': '對於大多數應用程序而言，添加通用的DistanceSensor節點就足夠了，因為它們是可自定義的（分辨率，lookupTable，光圈等）。此外，Webot中提供了一些預定義的商業化模型，例如某些紅外傳感器。 \n Sharp GP2D120 \n \n Sharp GP2D120是一款具有集成信號處理和模擬電壓輸出的測距傳感器。 該設備輸出與檢測距離相對應的電壓。該型號具有以下規格： \n 有效範圍： 4 to 30 [cm] \n 輸出類型：類比 \n 響應時間：39 [ms] \n 啟動延遲：44 [ms] \n 平均消耗：33 [mA] \n 原型SharpGP2D120 { \xa0\xa0 SFVec3f轉換0 0 0 \xa0\xa0 旋轉旋轉0 1 0 0 \xa0\xa0 SFString名稱“夏普的紅外傳感器GP2D120” \xa0\xa0 SFString模型“ GP2D120” \n 根據數據表中的特徵，DistanceSensor的lookupTable字段已經實現。 \n wb_distance_sensor_get_value函數返回測量的電壓/強度。 要轉換這些值，請使用以下公式： \n \n Convert meters to voltage: \xa0 y(x) = 0.5131*x^(-0.5735)-0.6143 \n Convert voltage to meters: \xa0 y(x) = 0.1594*x^(-0.8533)-0.02916 \n \n Sharp GP2Y0A02YK0F \n \n Sharp GP2Y0A02YK0F是一種測距傳感器單元，由PSD（位置敏感檢測器），IR-LED（紅外發光二極管）和信號處理電路的集成組合組成。 由於採用三角測量法，物體的反射率，環境溫度和工作持續時間的變化不容易影響距離檢測。 該設備輸出與檢測距離相對應的電壓。 因此，該傳感器也可以用作接近傳感器。 \n 該型號具有以下規格： \n 有效範圍：20至150 [cm] \n 輸出類型：類比 \n 響應時間：33 [ms] \n 啟動延遲：50 [ms] \n 平均消耗：33 [mA] \n 原型SharpGP2Y0A02YK0F { \xa0\xa0 SFVec3f轉換0 0 0 \xa0\xa0 旋轉旋轉0 1 0 0 \xa0\xa0 SFString名稱“夏普的紅外傳感器GP2Y0A02YK0F” \n 根據數據表中的特徵，DistanceSensor的lookupTable字段已經實現。wb_distance_sensor_get_value函數返回測量的電壓/強度。 要轉換這些值，請使用以下公式： \n \n Convert meters to voltage: \xa0 y(x) = 1.784*x^(-0.4215)-1.11 \n Convert voltage to meters: \xa0 y(x) = 0.7611*x^(-0.9313)-0.1252 \n \n Sharp GP2Y0A41SK0F \n \n Sharp GP2Y0A41SK0F是一種測距傳感器單元，由PSD（位置敏感檢測器），IR-LED（紅外發光二極管）和信號處理電路的集成組合組成。 由於採用三角測量法，物體的反射率，環境溫度和工作持續時間的變化不容易影響距離檢測。 該設備輸出與檢測距離相對應的電壓。 因此，該傳感器也可以用作接近傳感器。 \n 該型號具有以下規格： \n 有效範圍：4到30 [cm] 輸出類型：類比 響應時間：16.5 [ms] 啟動延遲：26 [ms] 平均消耗：12 [mA] \n 原型SharpGP2Y0A41SK0F { \xa0\xa0 SFVec3f轉換0 0 0 \xa0\xa0 旋轉旋轉0 1 0 0 \xa0\xa0 SFString名稱“夏普的紅外傳感器GP2Y0A41SK0F” \n 根據數據表中的特徵，DistanceSensor的lookupTable字段已經實現。wb_distance_sensor_get_value函數返回測量的電壓/強度。 要轉換這些值，請使用以下公式： \n \n Convert meters to voltage: \xa0 y(x) = 0.5131*x^(-0.5735)-0.6143 \n Convert voltage to meters: \xa0 y(x) = 0.1594*x^(-0.8533)-0.02916 \n \n Sharp GP2Y0A710K0F \n \n Sharp GP2Y0A710K0F是一種測距傳感器單元，由PSD（位置敏感檢測器），IR-LED（紅外發光二極管）和信號處理電路的集成組合組成。 由於採用三角測量法，物體的反射率，環境溫度和工作持續時間的變化不容易影響距離檢測。 該設備輸出與檢測距離相對應的電壓。 因此，該傳感器也可以用作接近傳感器。 \n 該型號具有以下規格： \n 有效範圍：100至550 [cm] 輸出類型：類比 響應時間：21 [ms] 啟動延遲：26 [ms] 平均消耗：30 [mA] \n 原型SharpGP2Y0A710K0F { \xa0\xa0 SFVec3f轉換0 0 0 \xa0\xa0 旋轉旋轉0 1 0 0 \xa0\xa0 SFString名稱“夏普的紅外傳感器GP2Y0A710K0F” \n 根據數據表中的特徵，DistanceSensor的lookupTable字段已經實現。wb_distance_sensor_get_value函數返回測量的電壓/強度。 要轉換這些值，請使用以下公式： \n \n Convert meters to voltage: \xa0 y(x) = 1.962*x^(-0.5214)+0.4926 \n Convert voltage to meters: \xa0 y(x) = 20.24*x^(-4.76)+0.6632 \n \n', 'tags': '', 'url': '距離傳感器.html'}, {'title': 'TOPIC 0', 'text': '今天，數位產品比以往任何時候都更加複雜。創建它們需要多個團隊 成員，每個成員都有自己的一套技能和專業知識。例如，在Savvy，我們的客戶 與以下人員緊密合作：產品經理，UX設計人員，視覺設計師，開發人員，內容 戰略家和成長專家。 我們使用設計協作來處理這種複雜性。正確完成，設計協作可助力 每個專家都有共同的心態，流程和工具，共同建立更好的 產品更快。 我們編寫了此資源，以幫助其他應用程序創建者採用協作文化和流程。 繼續學習為什麼設計協同對於創造吸引人的產品很重要，以及 經驗。我們還將深入探討設計協作心態和文化，工具的要素 進行有效的設計協作，以及實際工作中的設計協作示例。 \n 什麼是“設計”協同？ \n 在進入之前，我們需要在同一頁上了解什麼是設計協同…… 簡單來說，設計協同就是在設計優先的環境中進行協同。 由於設計的本質，特別是我們在Savvy所做的設計，設計協同趨向於超越人們通常認為的協作。 通常將協作定義為兩個或兩個以上的人共同完成一項任務 為了實現共同的目標，設計協作涉及更多。 設計協同包括更多具有不同技能，艱鉅挑戰和更大規模的人員,具有深遠影響的目標。 您可能將協同視為兩個人掛在一塊藝術品上。它只需要溝通，團隊合作和四隻手。設計協同是指一組策展人.精心設計訪問者的體驗。他們選擇藝術品，選擇在何處以及如何懸掛藝術品， 它所居住的房間（以及房間的照明，家具），甚至前面的房間和建築物 整個。為什麼設計協作很重要 您可以在沒有協同的情況下設計產品，但是需要一個協同設計過程才能完成 不錯的產品。這就是設計協作如此重要的原因。 我們不僅為客戶構建應用程序。精巧構建複雜且多平台的體驗 內部系統，在某些情況下還包括整個品牌和業務。為此，我們利用專業知識 跨多個核心學科：戰略，設計，開發和增長。每個項目都涉及 許多人都有各自的技能和專長。 設計協作將這些思想融合在一起，將他們各自的專業知識結合在一起 創建解決方案，以解決共同目標的所有方面。而不是一個人遇到問題 角度來看，設計協作將這個問題擺在所有專家面前，迫使他們考慮新 觀點和可能性。 \n 例如，我們在設計過程的早期就讓我們的開發人員參與進來，以確保我們 盡快解決技術機會和局限性。這使我們可以有好處並推動我們的技術能力，同時進一步消除了複雜的障礙處理。它還限制了一個人可以在筒倉中工作的數量，從而使工作保持公開狀態,並強調用戶需求和產品目標。 \n 培養設計協同心態 在設計過程中建立有效的協同時，正確的思維方式大有幫助。它規定了誰進行協同，如何進行以及達到何種目的的準則。 \n 合作適合每個人 \n 設計師有時會認為不是設計師的人沒有資格提供良好的產品 反之。但是出色的設計不只是視覺效果。它涵蓋了有關產品的所有內容，從 它的品牌，工程技術及其成長。 設計協同吸引了許多人，每個人都有自己的觀點和優勢。它給大家一個聲音。這些新鮮的觀點為設計師提供了更多信息。觀點 使設計師能夠針對其他設計有持久並有影響的選擇做出正確的決定。 \n 開發和營銷選擇 \n 與客戶的合作和其他設計師和團隊的合作一樣重要 成員。在Savvy，我們讓客戶參與產品的整個創作過程。我們 花些時間來解釋選項，並與客戶進行討論以確保我們了解他們的想法。 這使我們能夠及早獲得客戶的認可，並從明確的起點和終點開始工作。 更大的曝光量並不是什麼好事，沒有人知道他們正在與客戶第一次合作. 客戶合作意味著無需花費高昂成本就能更快地獲得更清晰的產品 後退和不必要的會議。 很容易陷入當下而忽略全局。通過更早地參與更多的人 而且，您正在與隊友建立更緊密的聯繫，並共同承擔責任， 對產品成功的興趣。您正在創建一個更加開放和透明的流程，因為更緊密聯繫和投入的團隊。 \n 合作是背景性的 \n 客戶向我們提出了複雜的挑戰和目標。更不用說，我們持續努力 與我們的客戶進行長達數月甚至好幾年的交流，並積累了過去的大量知識 決策，研究和其他有價值的地方。 通過採用上下文優先的方法，您可以確保每個人都處於最高水平知識。這樣，他們就可以在產品上做出最明智的決定。 為了做到這一點，我們通過引入所有團隊成員儘早，記錄和記錄會議，建立一些重疊的地方以及過程中的下一個團隊成員就像客戶一樣。 在個案協同的基礎上，上下文也同樣重要。請遵循以下準則以保持。 \n 協作中的上下文優先 \n 在顯示您的工作之前提供上下文。如果您正在工作，則您的工作是否出現在屏幕上 提供背景信息，您已經失去了聽眾的注意力。 描述您要解決的問題或要達到的目標。介紹與當前問題相關的工作。解釋您的想法以及為什麼要這麼做這些決定。請具體說明您要回饋的內容。 \n 合作是開放，誠實和無畏的 \n 將您的工作（和您自己）放在那裡並不容易。情緒會阻礙提供 開放和誠實的反饋，尤其是當您擔心會傷害他人的感受時。 這並不意味著在協同中沒有情感的位置。 \n 感覺如何在設計中很重要。我們為有情感， 在決策中使用情感的人。離開談話可能會縮短 潛在的想法或解決方案。其實，僅圍繞事實和數據進行實際的討論是不會的。 提供完整圖片。在最壞的情況下，它可能是不相關或提供虛假的敘述。 在Savvy，我們使我們的團隊對收到反饋“無所畏懼”。這意味著放手 關於我們為自己創造的東西而被批評的任何焦慮。這也意味著了解我們 在一起變得更強大，更有機會創造偉大的事物。無所畏懼，我們 更好地信任並相互授權，以提供誠實和周到的反饋。 我們的團隊還相信，不要害怕提供反饋。這意味著了解 需要解決的問題以及客戶的品牌和目標。這也意味著要問很多 提問以發現相關思想或幫助指導決策。 嘗試以探索性和指導性的方式提出反饋意見，以建立並改善工作而不是拆散。您的反饋意見應具有建設性。與其說你不喜歡什麼，不如說 反饋以指出您要幫助解決的問題。在以下方面提供可行的步驟 改善工作，或者至少改善您的思維背後的理由。而且不要忘記 表達您喜歡什麼以及為什麼。 \n 合作不僅僅是新的想法 \n 開放並接受協作反饋是一回事，解析這些想法是另一回事 並將它們用作激發自己的催化劑。這是一項發展起來的高級技能 時間。一種實踐方法是成為更好的聽眾。 通常，在與他人交談時，我們會更多地考慮接下來要說的內容 比別人說什麼這會影響反饋過程，尤其是在設計中，因為我們 在聽到其他意見或解決方案之前，通常都知道我們要說什麼。 當您選擇先聆聽然後再做出反應時，它可以讓您完全理解反饋 有人在介紹您，並讓您更深入-他們使用的觀點是什麼 他們來自哪裡？很有可能這是您在 創建過程。通過聽取並理解反饋的上下文和推理 您正在接受，正在向更多的視角，思維方式和體驗方式開放您的設計。然後，您可以針對挑戰，目標和舉例子測試這些新觀點。 您正在設計用於查看是否更適合用戶。 當所有協作者都在積極聆聽時，更容易接受反饋。 最終，提供良好反饋的技能來自學習如何獲得反饋。當我們做一個 努力成為更好的聽眾，我們也發現自己變得更加謙虛，我們認為，更好的設計師。 尋找和使用正確的設計協作工具 正確的工具在增強團隊的設計協作思維方面大有幫助。 在這 部分，您將了解在協作工具中尋找什麼。 我們還建議我們的工具及自己的經驗。 \n 選擇合適的工具 \n 有效的協作工具為協作者消除了所有障礙，使他們能夠快速輕鬆地訪問和 與工作互動。 這將重點放在提供反饋上。 他們還允許其他人 在不破壞原始設計的情況下進行協作。 過去，我們使用依賴於提供基本版本控制的工具，而不是真正的 協作功能。 例如，設計人員將保存一個Sketch文件並將其上傳到Dropbox。 然後，另一個團隊成員將下載它，進行處理，然後重新上傳。 沒有簡單的方法 在文件移交給他人的情況下進行更改。 我們嘗試了與Github類似的方法， 實踐證明，該工具非常適合管理代碼庫，但在迭代設計工作中卻不那麼重要。 不用說，這些版本控制流程使我們的協作更加耗時， 令人困惑，而且非常不合作。 現在，我們根據協作類型從多種更高級的工具中進行選擇,並且想要實現。 \n FIGMA \n 這是一個協作優先的共享工作區工具。 Figma非常適合在其中有多個人 設計文件的相同區域。 您可以觀看隊友設計或在同一個設計上一起即時工作 。 \n 好處: \n Figma降低了某人在筒倉中工作的能力。 無需添加不必要的修飾或創建靜態可交付結果即可實現協作。 所以 您無需更改工作流程即可展示設計。 可以輕鬆地在其本機環境中查看並與之交互，並隨意進行調整。 何時使用：流量文檔，高保真線框，即時協作和行走 客戶通過一系列屏幕來解釋並獲得有關設計方向的反饋。 \n Marvel \n 雖然Figma傾向於感覺更自由和靈活，但Marvel允許更標準化的形式 合作。 這也使我們的客戶可以輕鬆地與我們合作。 \n 好處： Marvel是一個更簡潔，更規範和集中的空間，非常適合與非設計團隊成員合作 。 \n 它消除了客戶支付帳戶或深入了解工具的所有需求 去看工作。 客戶可以下載屏幕並通過Marvel在設備環境中查看它們的運行情況 應用程式。 使用時間：與客戶和開發人員一起呈現更多最終設計工作。 （學習關於 Marvel與其他原型工具的比較。） \n 其他合作工具 \n Zeplin是一個有用的傳遞工具，可讓開發人員深入了解設計的細節。 工作。 （我們在這裡更深入地討論Zeplin。） Quip是集思廣益和產品/過程文檔的絕佳平台。 我們用它來記錄 並組織團隊成員在工作時需要了解的所有背景和知識 一個專案。 對於集思廣益而不是視覺關注的新想法也很有用。 請注意，還有許多其他工具可以為協作增加類似的好處， 上面列出的。 該列表代表了在我們日常工作中對我們有效的工具 協作，並不表示所有選項都可能對您的團隊有效. \n 精明的設計合作過程在實踐中 \n 現在，讓我們採用上面概述的最佳實踐和工具，並展示它們如何組合在一起。 現實生活中的情況。 我們將使用Press Play應用程序中的實時繪圖體驗來演示 設計協作的重要性。 這項經驗涉及到跨學科的團隊成員數量，包括視覺設計師，UX設計人員，開發人員，產品經理，當然還有客戶。 \n 處境與挑戰 \n Press Play是一個抽獎活動應用程序，可保存每日，每周和每月的圖紙。 用戶獲得門票 觀看廣告，然後選擇五個表情符號輸入繪圖。 然後根據 他們的選擇如何與圖形的隨機選擇表情符號匹配。 這個特殊的任務有 我們為正在等待現場繪畫結果的用戶創造了一個有趣而激動人心的現場體驗。 對於我們來說，為這種體驗創建類似遊戲的動畫非常重要。 我們特別想要 在用戶去看他們的屏幕時在屏幕上喚起一種嬉戲和期待感 所選表情符號與抽獎活動附圖中的表情符號匹配。 就是說，我們需要注意動畫所需的複雜程度及其影響 在整個產品的時間表和成本上。 我們的目標是將保真度提高到 合理的時間，而不會顯著影響項目的預算。 \n 合作過程 \n 第一階段：線框和集思廣益 首先，精明的用戶體驗設計師創建了Press Play的整體用戶體驗和線框，確定了 需要屏幕和每個屏幕的時間安排。 她還提出了一個粗略的概念（如圖 \n 右圖）用於實時繪圖動畫，根據客戶的需求和項目的已建立UX。 她向產品經理和視覺設計師展示了線框和粗糙的動畫設計師。 然後，這三個人都與客戶會面，因此每個人都可以直接聽到反饋。 \n 第二階段：研究與背景 \n 精明的視覺設計師負責創建實際的實時繪圖動畫 新鮮的眼睛，並且對Press Play產品沒有太多的先驗知識。為了起床，他 與UX設計人員和產品經理進行了深入的交談。他還致力於其他研究 有時間了解整體產品目標，挑戰並熟悉工作 至今。如前所述，他是線框演示的一部分，並為客戶反饋。 在這種情況下，他進行了一些與手頭任務直接相關的其他研究。 通過這樣做，他確保自己了解現場繪畫體驗的要求，目標和挑戰。他查看了具有類似經驗和保真度的其他應用，並參考了動畫，以了解最終動畫到底需要顯示什麼（在這種情況下，表情符號和用戶的表情符號選擇）。 \n 在過於束縛解決方案之前，他遇到了一個精明的人 iOS開發人員了解技術限制和注意事項。 然後，我們的視覺設計師和UX設計師集思廣益，對視覺效果至關重要。他們 同意需要為用戶建立緩慢的提示以建立懸念/期望 \n 第三階段：循環和反饋 當我們的視覺設計師沿多個不同方向工作時，他選擇了UX設計師 聊聊他在Figma中的進度和設計。通過討論工作，他們激發了更多 想法和迭代，同時確保它們符合客戶期望。還有更多 他手下有很多可靠的選擇，他再次與iOS開發人員會面，以確保一切都在 從技術角度出發。 \n 第四階段：客戶的反饋和發展 當我們找到更多，更最終的體驗版本時，視覺設計師走了 通過他們與客戶一起使用Figma。 Press Play產品經理和UX設計師 還提供了反饋和指導。 一旦他們都了解了引起顧客興趣的東西，視覺設計師便開始最大限度地發揮作用。 視覺效果並使它們為開發做好準備。他繼續與iOS開發人員合作， 在技術層面上充分利用該概念。 最終結果 Press Play的實時繪圖動畫是工作中設計協作的一個範例。 一些跨學科專家一起解決更大的設計和開發挑戰 意思是。沒有設計協作，我們將找不到理想的交集 用戶體驗，視覺和技術。 當客戶在他的應用程序中看到動畫生動時，他稱其為“開創性的”。 而且，這種Press Play體驗的研究，合作和創造對我們有幫助 發現產品用戶旅程中的空白。最初，現場繪畫的目的是為了娛樂 向用戶顯示結果的方式。在設計過程中，我們意識到，如果用戶不觀看實時繪圖，他們就會迷失方向，無法體驗終結該圖紙的用戶旅程。 基於這一發現，我們決定在其他兩個地方也改進該應用程序。我們添加了一個 獲勝者範圍的結果/實時繪圖元素，以及用戶的輸贏歷史記錄部分 應用程序的細節部分。最後，需要用戶體驗,來設計協同使我們得以實現這一些未實現的目標。 \n 結論說明 \n 設計協作需要解決建造中伴隨的複雜，關鍵問題 很棒的產品和經驗。 通過利用多個團隊成員的專業知識 跨學科的設計協作可確保團隊從各個角度應對挑戰 並尋求更好的解決方案。 借助正確的思維方式，工具和流程，進行設計協作 使團隊能夠通過創造性思維和迭代來更深入。 我們希望本指南為您提供良好的基礎，以便您可以構建自己的有效設計 協作過程。 您可以在Savvy博客上了解有關設計和產品策略的更多信息， 並隨時在Savvy Apps網站上與我們聯繫以尋求幫助。 \n 心得 \n 看完Topic 0之後我終於知道協同設計不只是自己的專業知識，更是各方面專業人士間的意見溝通與達成平衡的一個重要課題，如果你的專業背景很厲害但是卻無法接受別人非專業人士的看法，或是與他們協調溝通那你會是一個非常不好的協同者。', 'tags': '', 'url': 'TOPIC 0.html'}]};