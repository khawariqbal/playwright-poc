# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageTest.spec.js >> Register new user: bobdemo@yopmail.com
- Location: tests\LoginPageTest.spec.js:24:3

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic:
        - generic [ref=e47]:
          - heading "AutomationExercise" [level=1] [ref=e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e49]
          - paragraph [ref=e50]:
            - text: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
            - link "Automation skill assessment" [ref=e51] [cursor=pointer]:
              - img [ref=e53]
              - text: Automation skill assessment
          - link "Test Cases" [ref=e55] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=e56]
          - link "APIs list for practice" [ref=e57] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e58]
        - img "demo website for practice" [ref=e60]
    - link "" [ref=e61] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e62]: 
    - link "" [ref=e63] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e64]: 
  - generic [ref=e67]:
    - generic [ref=e69]:
      - heading "Category" [level=2] [ref=e70]
      - generic [ref=e71]:
        - heading " Women" [level=4] [ref=e74]:
          - link " Women" [ref=e75] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e77]: 
            - text: Women
        - heading " Men" [level=4] [ref=e80]:
          - link " Men" [ref=e81] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e83]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e86]:
          - link " Kids" [ref=e87] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e89]: 
            - text: Kids
      - insertion [ref=e91]:
        - generic [ref=e94]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e96]: Discover more
          - link "Software testing webinars" [ref=e97] [cursor=pointer]:
            - generic "Software testing webinars" [ref=e98]
            - img [ref=e100]
          - link "Quality assurance software" [ref=e102] [cursor=pointer]:
            - generic "Quality assurance software" [ref=e103]
            - img [ref=e105]
          - link "QA certification programs" [ref=e107] [cursor=pointer]:
            - generic "QA certification programs" [ref=e108]
            - img [ref=e110]
          - link "Apparel" [ref=e112] [cursor=pointer]:
            - generic "Apparel" [ref=e113]
            - img [ref=e115]
          - link "API development services" [ref=e117] [cursor=pointer]:
            - generic "API development services" [ref=e118]
            - img [ref=e120]
          - link "engineers" [ref=e122] [cursor=pointer]:
            - generic "engineers" [ref=e123]
            - img [ref=e125]
          - link "Internet & Telecom" [ref=e127] [cursor=pointer]:
            - generic "Internet & Telecom" [ref=e128]
            - img [ref=e130]
          - link "Automation testing eBooks" [ref=e132] [cursor=pointer]:
            - generic "Automation testing eBooks" [ref=e133]
            - img [ref=e135]
      - generic [ref=e137]:
        - heading "Brands" [level=2] [ref=e138]
        - list [ref=e140]:
          - listitem [ref=e141]:
            - link "(6) Polo" [ref=e142] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e143]: (6)
              - text: Polo
          - listitem [ref=e144]:
            - link "(5) H&M" [ref=e145] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e146]: (5)
              - text: H&M
          - listitem [ref=e147]:
            - link "(5) Madame" [ref=e148] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e149]: (5)
              - text: Madame
          - listitem [ref=e150]:
            - link "(3) Mast & Harbour" [ref=e151] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e152]: (3)
              - text: Mast & Harbour
          - listitem [ref=e153]:
            - link "(4) Babyhug" [ref=e154] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e155]: (4)
              - text: Babyhug
          - listitem [ref=e156]:
            - link "(3) Allen Solly Junior" [ref=e157] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e158]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e159]:
            - link "(3) Kookie Kids" [ref=e160] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e161]: (3)
              - text: Kookie Kids
          - listitem [ref=e162]:
            - link "(5) Biba" [ref=e163] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e164]: (5)
              - text: Biba
    - generic [ref=e165]:
      - generic [ref=e166]:
        - heading "Features Items" [level=2] [ref=e167]
        - generic [ref=e169]:
          - generic [ref=e170]:
            - generic [ref=e171]:
              - img "ecommerce website products" [ref=e172]
              - heading "Rs. 500" [level=2] [ref=e173]
              - paragraph [ref=e174]: Blue Top
              - generic [ref=e175] [cursor=pointer]:
                - generic [ref=e176]: 
                - text: Add to cart
            - generic [ref=e177]:
              - heading "Rs. 500" [level=2] [ref=e178]
              - paragraph [ref=e179]: Blue Top
              - generic [ref=e180] [cursor=pointer]:
                - generic [ref=e181]: 
                - text: Add to cart
          - list [ref=e183]:
            - listitem [ref=e184]:
              - link " View Product" [ref=e185] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e186]: 
                - text: View Product
        - generic [ref=e188]:
          - generic [ref=e189]:
            - generic [ref=e190]:
              - img "ecommerce website products" [ref=e191]
              - heading "Rs. 400" [level=2] [ref=e192]
              - paragraph [ref=e193]:
                - text: Men
                - link "Tshirt" [ref=e194] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e195]
                  - text: Tshirt
              - generic [ref=e197] [cursor=pointer]:
                - generic [ref=e198]: 
                - text: Add to cart
            - generic [ref=e199]:
              - heading "Rs. 400" [level=2] [ref=e200]
              - paragraph [ref=e201]: Men Tshirt
              - generic [ref=e202] [cursor=pointer]:
                - generic [ref=e203]: 
                - text: Add to cart
          - list [ref=e205]:
            - listitem [ref=e206]:
              - link " View Product" [ref=e207] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e208]: 
                - text: View Product
        - generic [ref=e210]:
          - generic [ref=e211]:
            - generic [ref=e212]:
              - img "ecommerce website products" [ref=e213]
              - heading "Rs. 1000" [level=2] [ref=e214]
              - paragraph [ref=e215]:
                - text: Sleeveless
                - link "Dress" [ref=e216] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e217]
                  - text: Dress
              - generic [ref=e219] [cursor=pointer]:
                - generic [ref=e220]: 
                - text: Add to cart
            - generic [ref=e221]:
              - heading "Rs. 1000" [level=2] [ref=e222]
              - paragraph [ref=e223]: Sleeveless Dress
              - generic [ref=e224] [cursor=pointer]:
                - generic [ref=e225]: 
                - text: Add to cart
          - list [ref=e227]:
            - listitem [ref=e228]:
              - link " View Product" [ref=e229] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e230]: 
                - text: View Product
        - generic [ref=e232]:
          - generic [ref=e233]:
            - generic [ref=e234]:
              - img "ecommerce website products" [ref=e235]
              - heading "Rs. 1500" [level=2] [ref=e236]
              - paragraph [ref=e237]: Stylish Dress
              - generic [ref=e238] [cursor=pointer]:
                - generic [ref=e239]: 
                - text: Add to cart
            - generic [ref=e240]:
              - heading "Rs. 1500" [level=2] [ref=e241]
              - paragraph [ref=e242]: Stylish Dress
              - generic [ref=e243] [cursor=pointer]:
                - generic [ref=e244]: 
                - text: Add to cart
          - list [ref=e246]:
            - listitem [ref=e247]:
              - link " View Product" [ref=e248] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e249]: 
                - text: View Product
        - generic [ref=e251]:
          - generic [ref=e252]:
            - generic [ref=e253]:
              - img "ecommerce website products" [ref=e254]
              - heading "Rs. 600" [level=2] [ref=e255]
              - paragraph [ref=e256]: Winter Top
              - generic [ref=e257] [cursor=pointer]:
                - generic [ref=e258]: 
                - text: Add to cart
            - generic [ref=e259]:
              - heading "Rs. 600" [level=2] [ref=e260]
              - paragraph [ref=e261]: Winter Top
              - generic [ref=e262] [cursor=pointer]:
                - generic [ref=e263]: 
                - text: Add to cart
          - list [ref=e265]:
            - listitem [ref=e266]:
              - link " View Product" [ref=e267] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e268]: 
                - text: View Product
        - generic [ref=e270]:
          - generic [ref=e271]:
            - generic [ref=e272]:
              - img "ecommerce website products" [ref=e273]
              - heading "Rs. 400" [level=2] [ref=e274]
              - paragraph [ref=e275]: Summer White Top
              - generic [ref=e276] [cursor=pointer]:
                - generic [ref=e277]: 
                - text: Add to cart
            - generic [ref=e278]:
              - heading "Rs. 400" [level=2] [ref=e279]
              - paragraph [ref=e280]: Summer White Top
              - generic [ref=e281] [cursor=pointer]:
                - generic [ref=e282]: 
                - text: Add to cart
          - list [ref=e284]:
            - listitem [ref=e285]:
              - link " View Product" [ref=e286] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e287]: 
                - text: View Product
        - generic [ref=e289]:
          - generic [ref=e290]:
            - generic [ref=e291]:
              - img "ecommerce website products" [ref=e292]
              - heading "Rs. 1000" [level=2] [ref=e293]
              - paragraph [ref=e294]: Madame Top For Women
              - generic [ref=e295] [cursor=pointer]:
                - generic [ref=e296]: 
                - text: Add to cart
            - generic [ref=e297]:
              - heading "Rs. 1000" [level=2] [ref=e298]
              - paragraph [ref=e299]: Madame Top For Women
              - generic [ref=e300] [cursor=pointer]:
                - generic [ref=e301]: 
                - text: Add to cart
          - list [ref=e303]:
            - listitem [ref=e304]:
              - link " View Product" [ref=e305] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e306]: 
                - text: View Product
        - generic [ref=e308]:
          - generic [ref=e309]:
            - generic [ref=e310]:
              - img "ecommerce website products" [ref=e311]
              - heading "Rs. 700" [level=2] [ref=e312]
              - paragraph [ref=e313]: Fancy Green Top
              - generic [ref=e314] [cursor=pointer]:
                - generic [ref=e315]: 
                - text: Add to cart
            - generic [ref=e316]:
              - heading "Rs. 700" [level=2] [ref=e317]
              - paragraph [ref=e318]: Fancy Green Top
              - generic [ref=e319] [cursor=pointer]:
                - generic [ref=e320]: 
                - text: Add to cart
          - list [ref=e322]:
            - listitem [ref=e323]:
              - link " View Product" [ref=e324] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e325]: 
                - text: View Product
        - generic [ref=e327]:
          - generic [ref=e328]:
            - generic [ref=e329]:
              - img "ecommerce website products" [ref=e330]
              - heading "Rs. 499" [level=2] [ref=e331]
              - paragraph [ref=e332]:
                - text: Sleeves Printed Top - White
                - link "Website development services" [ref=e333] [cursor=pointer]:
                  - img [ref=e335]
                  - text: Website development services
              - generic [ref=e337] [cursor=pointer]:
                - generic [ref=e338]: 
                - text: Add to cart
            - generic [ref=e339]:
              - heading "Rs. 499" [level=2] [ref=e340]
              - paragraph [ref=e341]: Sleeves Printed Top - White
              - generic [ref=e342] [cursor=pointer]:
                - generic [ref=e343]: 
                - text: Add to cart
          - list [ref=e345]:
            - listitem [ref=e346]:
              - link " View Product" [ref=e347] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e348]: 
                - text: View Product
        - generic [ref=e350]:
          - generic [ref=e351]:
            - generic [ref=e352]:
              - img "ecommerce website products" [ref=e353]
              - heading "Rs. 359" [level=2] [ref=e354]
              - paragraph [ref=e355]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e356] [cursor=pointer]:
                - generic [ref=e357]: 
                - text: Add to cart
            - generic [ref=e358]:
              - heading "Rs. 359" [level=2] [ref=e359]
              - paragraph [ref=e360]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e361] [cursor=pointer]:
                - generic [ref=e362]: 
                - text: Add to cart
          - list [ref=e364]:
            - listitem [ref=e365]:
              - link " View Product" [ref=e366] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e367]: 
                - text: View Product
        - generic [ref=e369]:
          - generic [ref=e370]:
            - generic [ref=e371]:
              - img "ecommerce website products" [ref=e372]
              - heading "Rs. 278" [level=2] [ref=e373]
              - paragraph [ref=e374]: Frozen Tops For Kids
              - generic [ref=e375] [cursor=pointer]:
                - generic [ref=e376]: 
                - text: Add to cart
            - generic [ref=e377]:
              - heading "Rs. 278" [level=2] [ref=e378]
              - paragraph [ref=e379]: Frozen Tops For Kids
              - generic [ref=e380] [cursor=pointer]:
                - generic [ref=e381]: 
                - text: Add to cart
          - list [ref=e383]:
            - listitem [ref=e384]:
              - link " View Product" [ref=e385] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e386]: 
                - text: View Product
        - generic [ref=e388]:
          - generic [ref=e389]:
            - generic [ref=e390]:
              - img "ecommerce website products" [ref=e391]
              - heading "Rs. 679" [level=2] [ref=e392]
              - paragraph [ref=e393]: Full Sleeves Top Cherry - Pink
              - generic [ref=e394] [cursor=pointer]:
                - generic [ref=e395]: 
                - text: Add to cart
            - generic [ref=e396]:
              - heading "Rs. 679" [level=2] [ref=e397]
              - paragraph [ref=e398]: Full Sleeves Top Cherry - Pink
              - generic [ref=e399] [cursor=pointer]:
                - generic [ref=e400]: 
                - text: Add to cart
          - list [ref=e402]:
            - listitem [ref=e403]:
              - link " View Product" [ref=e404] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e405]: 
                - text: View Product
        - generic [ref=e407]:
          - generic [ref=e408]:
            - generic [ref=e409]:
              - img "ecommerce website products" [ref=e410]
              - heading "Rs. 315" [level=2] [ref=e411]
              - paragraph [ref=e412]:
                - text: Printed Off Shoulder Top - White
                - link "Quality assurance training" [ref=e413] [cursor=pointer]:
                  - img [ref=e415]
                  - text: Quality assurance training
              - generic [ref=e417] [cursor=pointer]:
                - generic [ref=e418]: 
                - text: Add to cart
            - generic [ref=e419]:
              - heading "Rs. 315" [level=2] [ref=e420]
              - paragraph [ref=e421]: Printed Off Shoulder Top - White
              - generic [ref=e422] [cursor=pointer]:
                - generic [ref=e423]: 
                - text: Add to cart
          - list [ref=e425]:
            - listitem [ref=e426]:
              - link " View Product" [ref=e427] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e428]: 
                - text: View Product
        - generic [ref=e430]:
          - generic [ref=e431]:
            - generic [ref=e432]:
              - img "ecommerce website products" [ref=e433]
              - heading "Rs. 478" [level=2] [ref=e434]
              - paragraph [ref=e435]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e436] [cursor=pointer]:
                - generic [ref=e437]: 
                - text: Add to cart
            - generic [ref=e438]:
              - heading "Rs. 478" [level=2] [ref=e439]
              - paragraph [ref=e440]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e441] [cursor=pointer]:
                - generic [ref=e442]: 
                - text: Add to cart
          - list [ref=e444]:
            - listitem [ref=e445]:
              - link " View Product" [ref=e446] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e447]: 
                - text: View Product
        - generic [ref=e449]:
          - generic [ref=e450]:
            - generic [ref=e451]:
              - img "ecommerce website products" [ref=e452]
              - heading "Rs. 1200" [level=2] [ref=e453]
              - paragraph [ref=e454]: Little Girls Mr. Panda Shirt
              - generic [ref=e455] [cursor=pointer]:
                - generic [ref=e456]: 
                - text: Add to cart
            - generic [ref=e457]:
              - heading "Rs. 1200" [level=2] [ref=e458]
              - paragraph [ref=e459]: Little Girls Mr. Panda Shirt
              - generic [ref=e460] [cursor=pointer]:
                - generic [ref=e461]: 
                - text: Add to cart
          - list [ref=e463]:
            - listitem [ref=e464]:
              - link " View Product" [ref=e465] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e466]: 
                - text: View Product
        - generic [ref=e468]:
          - generic [ref=e469]:
            - generic [ref=e470]:
              - img "ecommerce website products" [ref=e471]
              - heading "Rs. 1050" [level=2] [ref=e472]
              - paragraph [ref=e473]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e474] [cursor=pointer]:
                - generic [ref=e475]: 
                - text: Add to cart
            - generic [ref=e476]:
              - heading "Rs. 1050" [level=2] [ref=e477]
              - paragraph [ref=e478]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e479] [cursor=pointer]:
                - generic [ref=e480]: 
                - text: Add to cart
          - list [ref=e482]:
            - listitem [ref=e483]:
              - link " View Product" [ref=e484] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e485]: 
                - text: View Product
        - generic [ref=e487]:
          - generic [ref=e488]:
            - generic [ref=e489]:
              - img "ecommerce website products" [ref=e490]
              - heading "Rs. 1190" [level=2] [ref=e491]
              - paragraph [ref=e492]: Cotton Mull Embroidered Dress
              - generic [ref=e493] [cursor=pointer]:
                - generic [ref=e494]: 
                - text: Add to cart
            - generic [ref=e495]:
              - heading "Rs. 1190" [level=2] [ref=e496]
              - paragraph [ref=e497]: Cotton Mull Embroidered Dress
              - generic [ref=e498] [cursor=pointer]:
                - generic [ref=e499]: 
                - text: Add to cart
          - list [ref=e501]:
            - listitem [ref=e502]:
              - link " View Product" [ref=e503] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e504]: 
                - text: View Product
        - generic [ref=e506]:
          - generic [ref=e507]:
            - generic [ref=e508]:
              - img "ecommerce website products" [ref=e509]
              - heading "Rs. 1530" [level=2] [ref=e510]
              - paragraph [ref=e511]: Blue Cotton Indie Mickey Dress
              - generic [ref=e512] [cursor=pointer]:
                - generic [ref=e513]: 
                - text: Add to cart
            - generic [ref=e514]:
              - heading "Rs. 1530" [level=2] [ref=e515]
              - paragraph [ref=e516]: Blue Cotton Indie Mickey Dress
              - generic [ref=e517] [cursor=pointer]:
                - generic [ref=e518]: 
                - text: Add to cart
          - list [ref=e520]:
            - listitem [ref=e521]:
              - link " View Product" [ref=e522] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e523]: 
                - text: View Product
        - generic [ref=e525]:
          - generic [ref=e526]:
            - generic [ref=e527]:
              - img "ecommerce website products" [ref=e528]
              - heading "Rs. 1600" [level=2] [ref=e529]
              - paragraph [ref=e530]:
                - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
                - link "API testing platforms" [ref=e531] [cursor=pointer]:
                  - img [ref=e533]
                  - text: API testing platforms
              - generic [ref=e535] [cursor=pointer]:
                - generic [ref=e536]: 
                - text: Add to cart
            - generic [ref=e537]:
              - heading "Rs. 1600" [level=2] [ref=e538]
              - paragraph [ref=e539]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e540] [cursor=pointer]:
                - generic [ref=e541]: 
                - text: Add to cart
          - list [ref=e543]:
            - listitem [ref=e544]:
              - link " View Product" [ref=e545] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e546]: 
                - text: View Product
        - generic [ref=e548]:
          - generic [ref=e549]:
            - generic [ref=e550]:
              - img "ecommerce website products" [ref=e551]
              - heading "Rs. 1100" [level=2] [ref=e552]
              - paragraph [ref=e553]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e554] [cursor=pointer]:
                - generic [ref=e555]: 
                - text: Add to cart
            - generic [ref=e556]:
              - heading "Rs. 1100" [level=2] [ref=e557]
              - paragraph [ref=e558]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e559] [cursor=pointer]:
                - generic [ref=e560]: 
                - text: Add to cart
          - list [ref=e562]:
            - listitem [ref=e563]:
              - link " View Product" [ref=e564] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e565]: 
                - text: View Product
        - generic [ref=e567]:
          - generic [ref=e568]:
            - generic [ref=e569]:
              - img "ecommerce website products" [ref=e570]
              - heading "Rs. 849" [level=2] [ref=e571]
              - paragraph [ref=e572]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e573] [cursor=pointer]:
                - generic [ref=e574]: 
                - text: Add to cart
            - generic [ref=e575]:
              - heading "Rs. 849" [level=2] [ref=e576]
              - paragraph [ref=e577]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e578] [cursor=pointer]:
                - generic [ref=e579]: 
                - text: Add to cart
          - list [ref=e581]:
            - listitem [ref=e582]:
              - link " View Product" [ref=e583] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e584]: 
                - text: View Product
        - generic [ref=e586]:
          - generic [ref=e587]:
            - generic [ref=e588]:
              - img "ecommerce website products" [ref=e589]
              - heading "Rs. 1299" [level=2] [ref=e590]
              - paragraph [ref=e591]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=e592] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e593]
                  - text: T-Shirt
              - generic [ref=e595] [cursor=pointer]:
                - generic [ref=e596]: 
                - text: Add to cart
            - generic [ref=e597]:
              - heading "Rs. 1299" [level=2] [ref=e598]
              - paragraph [ref=e599]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e600] [cursor=pointer]:
                - generic [ref=e601]: 
                - text: Add to cart
          - list [ref=e603]:
            - listitem [ref=e604]:
              - link " View Product" [ref=e605] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e606]: 
                - text: View Product
        - generic [ref=e608]:
          - generic [ref=e609]:
            - generic [ref=e610]:
              - img "ecommerce website products"
              - heading "Rs. 1000" [level=2] [ref=e611]
              - paragraph [ref=e612]: Green Side Placket Detail T-Shirt
              - generic [ref=e613] [cursor=pointer]:
                - generic [ref=e614]: 
                - text: Add to cart
            - generic [ref=e615]:
              - heading "Rs. 1000" [level=2] [ref=e616]
              - paragraph [ref=e617]: Green Side Placket Detail T-Shirt
              - generic [ref=e618] [cursor=pointer]:
                - generic [ref=e619]: 
                - text: Add to cart
          - list [ref=e621]:
            - listitem [ref=e622]:
              - link " View Product" [ref=e623] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e624]: 
                - text: View Product
        - generic [ref=e626]:
          - generic [ref=e627]:
            - generic [ref=e628]:
              - img "ecommerce website products"
              - heading "Rs. 1500" [level=2] [ref=e629]
              - paragraph [ref=e630]: Premium Polo T-Shirts
              - generic [ref=e631] [cursor=pointer]:
                - generic [ref=e632]: 
                - text: Add to cart
            - generic [ref=e633]:
              - heading "Rs. 1500" [level=2] [ref=e634]
              - paragraph [ref=e635]: Premium Polo T-Shirts
              - generic [ref=e636] [cursor=pointer]:
                - generic [ref=e637]: 
                - text: Add to cart
          - list [ref=e639]:
            - listitem [ref=e640]:
              - link " View Product" [ref=e641] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e642]: 
                - text: View Product
        - generic [ref=e644]:
          - generic [ref=e645]:
            - generic [ref=e646]:
              - img "ecommerce website products"
              - heading "Rs. 850" [level=2] [ref=e647]
              - paragraph [ref=e648]: Pure Cotton Neon Green Tshirt
              - generic [ref=e649] [cursor=pointer]:
                - generic [ref=e650]: 
                - text: Add to cart
            - generic [ref=e651]:
              - heading "Rs. 850" [level=2] [ref=e652]
              - paragraph [ref=e653]: Pure Cotton Neon Green Tshirt
              - generic [ref=e654] [cursor=pointer]:
                - generic [ref=e655]: 
                - text: Add to cart
          - list [ref=e657]:
            - listitem [ref=e658]:
              - link " View Product" [ref=e659] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e660]: 
                - text: View Product
        - generic [ref=e662]:
          - generic [ref=e663]:
            - generic [ref=e664]:
              - img "ecommerce website products"
              - heading "Rs. 799" [level=2] [ref=e665]
              - paragraph [ref=e666]: Soft Stretch Jeans
              - generic [ref=e667] [cursor=pointer]:
                - generic [ref=e668]: 
                - text: Add to cart
            - generic [ref=e669]:
              - heading "Rs. 799" [level=2] [ref=e670]
              - paragraph [ref=e671]: Soft Stretch Jeans
              - generic [ref=e672] [cursor=pointer]:
                - generic [ref=e673]: 
                - text: Add to cart
          - list [ref=e675]:
            - listitem [ref=e676]:
              - link " View Product" [ref=e677] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e678]: 
                - text: View Product
        - generic [ref=e680]:
          - generic [ref=e681]:
            - generic [ref=e682]:
              - img "ecommerce website products"
              - heading "Rs. 1200" [level=2] [ref=e683]
              - paragraph [ref=e684]: Regular Fit Straight Jeans
              - generic [ref=e685] [cursor=pointer]:
                - generic [ref=e686]: 
                - text: Add to cart
            - generic [ref=e687]:
              - heading "Rs. 1200" [level=2] [ref=e688]
              - paragraph [ref=e689]: Regular Fit Straight Jeans
              - generic [ref=e690] [cursor=pointer]:
                - generic [ref=e691]: 
                - text: Add to cart
          - list [ref=e693]:
            - listitem [ref=e694]:
              - link " View Product" [ref=e695] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e696]: 
                - text: View Product
        - generic [ref=e698]:
          - generic [ref=e699]:
            - generic [ref=e700]:
              - img "ecommerce website products"
              - heading "Rs. 1400" [level=2] [ref=e701]
              - paragraph [ref=e702]: Grunt Blue Slim Fit Jeans
              - generic [ref=e703] [cursor=pointer]:
                - generic [ref=e704]: 
                - text: Add to cart
            - generic [ref=e705]:
              - heading "Rs. 1400" [level=2] [ref=e706]
              - paragraph [ref=e707]: Grunt Blue Slim Fit Jeans
              - generic [ref=e708] [cursor=pointer]:
                - generic [ref=e709]: 
                - text: Add to cart
          - list [ref=e711]:
            - listitem [ref=e712]:
              - link " View Product" [ref=e713] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e714]: 
                - text: View Product
        - generic [ref=e716]:
          - generic [ref=e717]:
            - generic [ref=e718]:
              - img "ecommerce website products"
              - heading "Rs. 2300" [level=2] [ref=e719]
              - paragraph [ref=e720]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e721] [cursor=pointer]:
                - generic [ref=e722]: 
                - text: Add to cart
            - generic [ref=e723]:
              - heading "Rs. 2300" [level=2] [ref=e724]
              - paragraph [ref=e725]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e726] [cursor=pointer]:
                - generic [ref=e727]: 
                - text: Add to cart
          - list [ref=e729]:
            - listitem [ref=e730]:
              - link " View Product" [ref=e731] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e732]: 
                - text: View Product
        - generic [ref=e734]:
          - generic [ref=e735]:
            - generic [ref=e736]:
              - img "ecommerce website products"
              - heading "Rs. 3000" [level=2] [ref=e737]
              - paragraph [ref=e738]: Cotton Silk Hand Block Print Saree
              - generic [ref=e739] [cursor=pointer]:
                - generic [ref=e740]: 
                - text: Add to cart
            - generic [ref=e741]:
              - heading "Rs. 3000" [level=2] [ref=e742]
              - paragraph [ref=e743]: Cotton Silk Hand Block Print Saree
              - generic [ref=e744] [cursor=pointer]:
                - generic [ref=e745]: 
                - text: Add to cart
          - list [ref=e747]:
            - listitem [ref=e748]:
              - link " View Product" [ref=e749] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e750]: 
                - text: View Product
        - generic [ref=e752]:
          - generic [ref=e753]:
            - generic [ref=e754]:
              - img "ecommerce website products"
              - heading "Rs. 3500" [level=2] [ref=e755]
              - paragraph [ref=e756]: Rust Red Linen Saree
              - generic [ref=e757] [cursor=pointer]:
                - generic [ref=e758]: 
                - text: Add to cart
            - generic [ref=e759]:
              - heading "Rs. 3500" [level=2] [ref=e760]
              - paragraph [ref=e761]: Rust Red Linen Saree
              - generic [ref=e762] [cursor=pointer]:
                - generic [ref=e763]: 
                - text: Add to cart
          - list [ref=e765]:
            - listitem [ref=e766]:
              - link " View Product" [ref=e767] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e768]: 
                - text: View Product
        - generic [ref=e770]:
          - generic [ref=e771]:
            - generic [ref=e772]:
              - img "ecommerce website products"
              - heading "Rs. 5000" [level=2] [ref=e773]
              - paragraph [ref=e774]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e775] [cursor=pointer]:
                - generic [ref=e776]: 
                - text: Add to cart
            - generic [ref=e777]:
              - heading "Rs. 5000" [level=2] [ref=e778]
              - paragraph [ref=e779]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e780] [cursor=pointer]:
                - generic [ref=e781]: 
                - text: Add to cart
          - list [ref=e783]:
            - listitem [ref=e784]:
              - link " View Product" [ref=e785] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e786]: 
                - text: View Product
        - generic [ref=e788]:
          - generic [ref=e789]:
            - generic [ref=e790]:
              - img "ecommerce website products"
              - heading "Rs. 1400" [level=2] [ref=e791]
              - paragraph [ref=e792]: Lace Top For Women
              - generic [ref=e793] [cursor=pointer]:
                - generic [ref=e794]: 
                - text: Add to cart
            - generic [ref=e795]:
              - heading "Rs. 1400" [level=2] [ref=e796]
              - paragraph [ref=e797]: Lace Top For Women
              - generic [ref=e798] [cursor=pointer]:
                - generic [ref=e799]: 
                - text: Add to cart
          - list [ref=e801]:
            - listitem [ref=e802]:
              - link " View Product" [ref=e803] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e804]: 
                - text: View Product
        - generic [ref=e806]:
          - generic [ref=e807]:
            - generic [ref=e808]:
              - img "ecommerce website products"
              - heading "Rs. 1389" [level=2] [ref=e809]
              - paragraph [ref=e810]:
                - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
                - link "QA testing services" [ref=e811] [cursor=pointer]:
                  - img [ref=e813]
                  - text: QA testing services
              - generic [ref=e815] [cursor=pointer]:
                - generic [ref=e816]: 
                - text: Add to cart
            - generic [ref=e817]:
              - heading "Rs. 1389" [level=2] [ref=e818]
              - paragraph [ref=e819]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e820] [cursor=pointer]:
                - generic [ref=e821]: 
                - text: Add to cart
          - list [ref=e823]:
            - listitem [ref=e824]:
              - link " View Product" [ref=e825] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e826]: 
                - text: View Product
      - generic [ref=e827]:
        - heading "recommended items" [level=2] [ref=e828]
        - generic [ref=e829]:
          - generic [ref=e830]:
            - text:   
            - generic:
              - generic [ref=e834]:
                - img "ecommerce website products" [ref=e835]
                - heading "Rs. 1500" [level=2] [ref=e836]
                - paragraph [ref=e837]: Stylish Dress
                - generic [ref=e838] [cursor=pointer]:
                  - generic [ref=e839]: 
                  - text: Add to cart
              - generic [ref=e843]:
                - img "ecommerce website products" [ref=e844]
                - heading "Rs. 600" [level=2] [ref=e845]
                - paragraph [ref=e846]: Winter Top
                - generic [ref=e847] [cursor=pointer]:
                  - generic [ref=e848]: 
                  - text: Add to cart
              - generic [ref=e852]:
                - img "ecommerce website products" [ref=e853]
                - heading "Rs. 400" [level=2] [ref=e854]
                - paragraph [ref=e855]: Summer White Top
                - generic [ref=e856] [cursor=pointer]:
                  - generic [ref=e857]: 
                  - text: Add to cart
          - link "" [ref=e858] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e859]: 
          - link "" [ref=e860] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e861]: 
  - insertion [ref=e863]
  - contentinfo [ref=e865]:
    - generic [ref=e870]:
      - heading "Subscription" [level=2] [ref=e871]
      - generic [ref=e872]:
        - textbox "Your email address" [ref=e873]
        - button "" [ref=e874] [cursor=pointer]:
          - generic [ref=e875]: 
        - paragraph [ref=e876]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e880]: Copyright © 2021 All rights reserved
  - generic [ref=e881]:
    - generic [ref=e882] [cursor=pointer]:
      - img [ref=e884]
      - link "Go to shopping options for Automation practice website" [ref=e886]: Automation practice website
    - button "Close shopping anchor" [ref=e887]
  - text: 
```

# Test source

```ts
  1  | const { expect } = require("@playwright/test");
  2  | const { HomePage } = require("../Pages/HomePage");
  3  | const {DashboardPage} = require("../Pages/DashboardPage");
  4  | 
  5  | class LoginPage {
  6  | 
  7  |     constructor(page) {
  8  |         this.page = page;
  9  |         this.singUpLoginTab = page.locator("//a[@href='/login']");
  10 |         this.name = page.locator("[data-qa='signup-name']");
  11 |         this.email = page.locator("[data-qa='signup-email']");
  12 |         this.signUpPassword = page.locator("[data-qa='password']");
  13 |         this.signUp = page.locator("[data-qa='signup-button']");
  14 |         this.firstName = page.locator("[data-qa='first_name']");
  15 |         this.lastName = page.locator("[data-qa='last_name']");
  16 |         this.address = page.locator("[data-qa='address']");
  17 |         this.state = page.locator("[data-qa='state']");
  18 |         this.city = page.locator("[data-qa='city']");
  19 |         this.zipcode = page.locator("[data-qa='zipcode']");
  20 |         this.mobileNumber = page.locator("[data-qa='mobile_number']");
  21 |         this.createAccountBtn = page.getByText('Create Account', { exact: true })
  22 |         this.userName = page.locator("[data-qa='login-email']");
  23 |         this.password = page.locator("[data-qa='login-password']");
  24 |         this.login = page.locator("[data-qa='login-button']");
  25 |     }
  26 | 
  27 |     async goTo() {
> 28 |         await this.page.goto('/');
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  29 |     }
  30 | 
  31 |     async navigateToSignupLoginPage() {
  32 |         await this.singUpLoginTab.click();
  33 |     }
  34 | 
  35 |     async registerNewUserStep1(name, email) {
  36 |         await this.name.type(name);
  37 |         await this.email.type(email);
  38 |         await this.signUp.click();
  39 |     }
  40 |     async registerNewUserStep2(password, firstName, lastName, address, state, city, zipcode, mobileNumber) {
  41 |         await this.signUpPassword.type(password);
  42 |         await this.firstName.type(firstName);
  43 |         await this.lastName.type(lastName);
  44 |         await this.address.type(address);
  45 |         await this.state.type(state);
  46 |         await this.city.type(city);
  47 |         await this.zipcode.type(zipcode);
  48 |         await this.mobileNumber.type(mobileNumber);
  49 |         await this.createAccountBtn.click();
  50 |     }
  51 | 
  52 |     get accountCreatedMessage() {
  53 |         return this.page.locator("[data-qa='account-created']");
  54 | 
  55 |     }
  56 | 
  57 |     get continueButton() {
  58 |         ``
  59 |         return this.page.locator("[data-qa='continue-button']");
  60 |     }
  61 | 
  62 |     async registerExistingUser(name, email) {
  63 |         await this.name.type(name);
  64 |         await this.email.type(email);
  65 |         await this.signUp.click();
  66 |     }
  67 |     get registerExistingUserErrorMessage() {
  68 |         return this.page.locator("//p[contains(text(),'Email Address already exist!')]");
  69 |     }
  70 | 
  71 |     async loginToApplication(username, password) {
  72 | 
  73 |         await this.userName.type(username);
  74 |         await this.password.type(password);
  75 |         await this.login.click();
  76 |         return new DashboardPage(this.page);
  77 |     }
  78 |     async loginWithInvalidCredentials(username, password) {
  79 |         await this.userName.type(username);
  80 |         await this.password.type(password);
  81 |         await this.login.click();
  82 |     }
  83 | }
  84 | module.exports = { LoginPage };
```