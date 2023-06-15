# Başlarken

- Bu proje, Rast Mobile şirketinin _frontend developer_ iş ilanı başvurusu sonrası verilen, datagrid oluşturmayı temel alan bir ön eleme görevidir.

- Projede yazılım dili olarak html, css, javascript ve react.js kullanılmıştır.

## Hakkında

- Navbar, content ve footer kısmı olan bir web site tasarımı. 

- Navbar kısmında 1 logo, 4 adet başlık ve 4 adet sosyal medya iconu bulunmakta.

- Content kısmında içerisine veri ekleyebildiğimiz, verileri arama çubuğu yardımıyla arayabildiğimiz bir adet tablo bulunmakta.

- Footer kısmında ise tablo satırlarının sayısını gösteren biri sıralama, biri de sonraki satıra geçmeye yarayan swiper bulunuyor.

## Özet

    Route, useState, useEffect, useRef, map, filter, sort gibi işlemlerin kullanıldığı öğretici ve pekiştirici bir uygulama oldu.

## İşleyiş :

- Öncelikle kabataslak bir web site tasarımı yaparak başladım. Navbarın yapımı, sonrasında tablo ve işlevsel elemanlarının bulunduğu content kısmının oluşturulması, en son da footer yapımı olarak 3 ana yapı oluşturdum.

- Her yapı için components adı altında, yeni dosyalar açarak, ayrı ayrı css dosyalarını da entegre edecek şekilde bir yol izledim.

- Tablo oluşturduktan sonra buton, girdi alanı, tablo, sıralama, satır gösterme gibi elementlerin işlevselliklerine yoğunlaşarak, react kodlarının yazımını tamamladım.

- Daha sonra responsive tasarımı vanilla css kullanarak yaptım.

### Navbar Bölümü

1. İlk başta navbar yapımı üzerine düşerek; logo, başlıklar, sosyal medya ikonları tasarımları ve hizalamalarını yaparak başladım.

2. Logo, başlıklar ve ikonların işlevsel hale gelmesi için React-router-dom kurulumu yaparak, başlıkları Link yardımıyla tıklandığı yere yönlendirmesi için router kullandım.

3. Başlıklara ve sosyal medya ikonlarına tıklandığı yere gitmesi için linkler verdim.

### Content Bölümü

1. Başlangıçta içerisinde butonların, inputların ve tablonun bulunduğu ana yapıyı heroSection adındaki bir dosya içerisine oluşturdum.

2. Öncelikle input, search, filter ve add butonlarını oluşturarak, biraz css ekledim.

3. Sonrasında tablo yapısını kullanmak için api araştırdıktan sonra, vanilla css ile her şeyini sıfırdan kendimin oluşturmamın daha mantıklı ve daha iyi olacağını düşünerek, tabloyu ayrı bir component ve css olacak şekilde oluşturdum.

4. Yeni hesap ekle butonuna tıklandığında açılacak olan form componentini ve stilini oluşturdum.

5. Footer kısmını content bölümünün içerisinde oluşturmayı seçtim. Buton ve yazıları ekledim.

#### Sonuç

- Bu projeyi yaparken, daha öncesinde kullandığım komut ve yapıları daha da pekiştirme fırsatı yakaladım. Bazı noktalarda zorlandım ancak merakım ve azmim beni yarı yolda bırakmadı. Araştırarak ve farklı dökümanlar okuyarak, bazı yapıların nasıl efektif kullanıldığını, bazı sorunların da çözümünü bulabildim.