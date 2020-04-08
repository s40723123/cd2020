var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Python更新', 'text': '驗證影片 \n 1.先下載python3.8.2版 \n 2.安裝時先創建資料p382夾並選擇該資料夾 \n 3.安裝時將pip選項取消勾選 \n 4.將資料取代就資料夾 \n 5.將啟動當內舊的路徑改成新的p382 \n 6.安裝pip工具及完成 \n', 'tags': '', 'url': 'Python更新.html'}, {'title': '直播討論紀錄', 'text': '', 'tags': '', 'url': '直播討論紀錄.html'}, {'title': 'W2工作分配', 'text': '\n', 'tags': '', 'url': 'W2工作分配.html'}, {'title': 'W3小組討論工作方向', 'text': '\n', 'tags': '', 'url': 'W3小組討論工作方向.html'}, {'title': 'W5討論', 'text': '\n 討論內容 \n Webots toutorials 工作分配 \n 未來作業討論 \n', 'tags': '', 'url': 'W5討論.html'}, {'title': '亂數分組', 'text': '要使用到隨機亂數抽取的功能就要使用到random套件 \n 在已知的數字清單中亂數抽取一個數字 \n import random \n x=random.choice([1,3,5,7,9]) \n print(x) \n >>1 \n 在已知的數字清單中亂數抽取兩個數字當作樣本 \n import random \n y=random.sample([1,3,5,7,9],2) \n print(y) \n >>[9,1] \n 將一組清單內的數字順序隨機調換 \n import random \n data=[1,3,5,7,9] \n z=random.shuffle(data) \n print(data) \n >>[3,7,1,5,9] \n 隨機取得介於0~1之前的數字 \n import random \n t=random.random() \n print(t) \n >>0.8883405366359395 \n 隨機取得介於指定數字間的非整數數字 \n import random \n c=random.uniform(0.0,20.0) \n print(c) \n >>16.102 \n 常態分配亂數，random.normalvariate(平均值,標準差) \n import random \n v=random.normalvariate(100,10) \n print(v) \n >>114.04193052665073', 'tags': '', 'url': '亂數分組.html'}, {'title': 'Webots翻譯及心得', 'text': '', 'tags': '', 'url': 'Webots翻譯及心得.html'}, {'title': '傳感器', 'text': '\n', 'tags': '', 'url': '傳感器.html'}, {'title': '相機傳感器', 'text': '對於大多數應用程序而言，添加通用的Camera節點就足夠了。 通用相機是可自定義的（分辨率，視野，噪點等），默認情況下包括變焦和聚焦機制。 提供特殊效果，例如運動模糊，各種噪聲模型，鏡頭畸變和使用球形投影。除了添加通用的Camera節點外，Webot中還提供了一些預定義的Camera模型。 \n 智能相機 \n 如果將“識別”節點添加到相機，則相機不僅可以返回圖像，而且還可以返回相機圖像中檢測到的所有對象及其大小和位置。 因此，模擬像是Mobileye之類的智能相機非常容易。 \n \n MultiSense S21 \n MultiSense S21是基於立體相機的距離傳感器。我們的傳感器模型包括多個Webots設備。內部的IntertialUnit設備用於獲取設備的側傾角，俯仰角和偏航角。 可以使用Webots相機獨立檢索立體相機的左右RGB圖像。 或者，可以在MultiSense S21設備的中央啟用RGB相機和RangeFinder設備。 存在這兩個“元”設備以模仿由真實設備生成的3D彩色點的雲。 \n 可以使用下表從MultiSenseS21.name字段計算用於從控制器檢索設備的內部設備名稱： \n \n \n \n 名稱字段定義MultiSenseS21名稱，並用於計算內部設備名稱（請參閱此表）。 \n cameraWidth和cameraHeight字段指定所有內部渲染設備（即Cameras和RangeFinder）的分辨率。 \n cameraFieldOfView字段指定所有內部渲染設備的水平視場。 \n cameraNoise字段指定所有內部渲染設備的噪聲（請參閱Camera.noise）。 \n rangeFinderNoise字段指定內部元RangeFinder的噪聲（請參閱RangeFinder.noise）。 \n rangeFinderMaxRange字段指定內部元RangeFinder的最大範圍（請參閱RangeFinder.maxRange）。 \n leftCamera，rightCamera，metaCamera和metaRangeFinder字段允許啟用相應的內部渲染設備。 \n enablePhysics字段指定傳感器是否應該受到物理影響（質量= 1.5 [kg]）。 \n \n', 'tags': '', 'url': '相機傳感器.html'}, {'title': '距離傳感器', 'text': '對於大多數應用程序而言，添加通用的DistanceSensor節點就足夠了，因為它們是可自定義的（分辨率，lookupTable，光圈等）。此外，Webot中提供了一些預定義的商業化模型，例如某些紅外傳感器。 \n Sharp GP2D120 \n \n Sharp GP2D120是一款具有集成信號處理和模擬電壓輸出的測距傳感器。 該設備輸出與檢測距離相對應的電壓。該型號具有以下規格： \n 有效範圍： 4 to 30 [cm] \n 輸出類型：類比 \n 響應時間：39 [ms] \n 啟動延遲：44 [ms] \n 平均消耗：33 [mA] \n 原型SharpGP2D120 { \xa0\xa0 SFVec3f轉換0 0 0 \xa0\xa0 旋轉旋轉0 1 0 0 \xa0\xa0 SFString名稱“夏普的紅外傳感器GP2D120” \xa0\xa0 SFString模型“ GP2D120” \n 根據數據表中的特徵，DistanceSensor的lookupTable字段已經實現。 \n wb_distance_sensor_get_value函數返回測量的電壓/強度。 要轉換這些值，請使用以下公式： \n \n Convert meters to voltage: \xa0 y(x) = 0.5131*x^(-0.5735)-0.6143 \n Convert voltage to meters: \xa0 y(x) = 0.1594*x^(-0.8533)-0.02916 \n \n Sharp GP2Y0A02YK0F \n \n Sharp GP2Y0A02YK0F是一種測距傳感器單元，由PSD（位置敏感檢測器），IR-LED（紅外發光二極管）和信號處理電路的集成組合組成。 由於採用三角測量法，物體的反射率，環境溫度和工作持續時間的變化不容易影響距離檢測。 該設備輸出與檢測距離相對應的電壓。 因此，該傳感器也可以用作接近傳感器。 \n 該型號具有以下規格： \n 有效範圍：20至150 [cm] \n 輸出類型：類比 \n 響應時間：33 [ms] \n 啟動延遲：50 [ms] \n 平均消耗：33 [mA] \n 原型SharpGP2Y0A02YK0F { \xa0\xa0 SFVec3f轉換0 0 0 \xa0\xa0 旋轉旋轉0 1 0 0 \xa0\xa0 SFString名稱“夏普的紅外傳感器GP2Y0A02YK0F” \n 根據數據表中的特徵，DistanceSensor的lookupTable字段已經實現。wb_distance_sensor_get_value函數返回測量的電壓/強度。 要轉換這些值，請使用以下公式： \n \n Convert meters to voltage: \xa0 y(x) = 1.784*x^(-0.4215)-1.11 \n Convert voltage to meters: \xa0 y(x) = 0.7611*x^(-0.9313)-0.1252 \n \n Sharp GP2Y0A41SK0F \n \n Sharp GP2Y0A41SK0F是一種測距傳感器單元，由PSD（位置敏感檢測器），IR-LED（紅外發光二極管）和信號處理電路的集成組合組成。 由於採用三角測量法，物體的反射率，環境溫度和工作持續時間的變化不容易影響距離檢測。 該設備輸出與檢測距離相對應的電壓。 因此，該傳感器也可以用作接近傳感器。 \n 該型號具有以下規格： \n 有效範圍：4到30 [cm] 輸出類型：類比 響應時間：16.5 [ms] 啟動延遲：26 [ms] 平均消耗：12 [mA] \n 原型SharpGP2Y0A41SK0F { \xa0\xa0 SFVec3f轉換0 0 0 \xa0\xa0 旋轉旋轉0 1 0 0 \xa0\xa0 SFString名稱“夏普的紅外傳感器GP2Y0A41SK0F” \n 根據數據表中的特徵，DistanceSensor的lookupTable字段已經實現。wb_distance_sensor_get_value函數返回測量的電壓/強度。 要轉換這些值，請使用以下公式： \n \n Convert meters to voltage: \xa0 y(x) = 0.5131*x^(-0.5735)-0.6143 \n Convert voltage to meters: \xa0 y(x) = 0.1594*x^(-0.8533)-0.02916 \n \n Sharp GP2Y0A710K0F \n \n Sharp GP2Y0A710K0F是一種測距傳感器單元，由PSD（位置敏感檢測器），IR-LED（紅外發光二極管）和信號處理電路的集成組合組成。 由於採用三角測量法，物體的反射率，環境溫度和工作持續時間的變化不容易影響距離檢測。 該設備輸出與檢測距離相對應的電壓。 因此，該傳感器也可以用作接近傳感器。 \n 該型號具有以下規格： \n 有效範圍：100至550 [cm] 輸出類型：類比 響應時間：21 [ms] 啟動延遲：26 [ms] 平均消耗：30 [mA] \n 原型SharpGP2Y0A710K0F { \xa0\xa0 SFVec3f轉換0 0 0 \xa0\xa0 旋轉旋轉0 1 0 0 \xa0\xa0 SFString名稱“夏普的紅外傳感器GP2Y0A710K0F” \n 根據數據表中的特徵，DistanceSensor的lookupTable字段已經實現。wb_distance_sensor_get_value函數返回測量的電壓/強度。 要轉換這些值，請使用以下公式： \n \n Convert meters to voltage: \xa0 y(x) = 1.962*x^(-0.5214)+0.4926 \n Convert voltage to meters: \xa0 y(x) = 20.24*x^(-4.76)+0.6632 \n', 'tags': '', 'url': '距離傳感器.html'}]};