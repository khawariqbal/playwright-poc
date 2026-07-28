# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageTest.spec.js >> Register new user: testuser123459@yopmail.com
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
            - link "Automation practice website" [ref=e51] [cursor=pointer]:
              - img [ref=e53]
              - text: Automation practice website
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
        - iframe [ref=e93]:
          - iframe [ref=f7e1]:
            - generic [ref=f8e2]:
              - link "Advertisement" [ref=f8e4] [cursor=pointer]:
                - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsu9QgPLVcL2kitY3aKEk4XgMftZjPoYb8nyxL2VbX7ME4l4d8ON2mmIBwdgkUugHKI9T-1N2JFBTRdP9LX57jy_e07wB9mfyxNanP987E0gzXzoVSuxqlnVQGgPMqh6Y472Zd7Wv6nPXOuB4P7LAd5ghipRlPBRcYKzTaJZMyeq6nopgl2kYnm_gtduGnY4kwHB3nV07nKf5eFssztExWKyrAdxcb1sKsjkiCra2eQ364levtNvSnttydcSNGGiyyaMcxgxqY7lm9Ogpag9tm0teMlsHgKuuAPqmB7cO07aeJHpYkW_hVYj3pBMGnOtU9_J1taUJU-m9p77-YUkNZNxikWXZdJQ7ic4iRD0-RFvTdC0GzS2I4tq7r8DECOto1JGVGxY1mp5U2WI5QUT9HRlzDhYNF6el9FiCrngwUmUys7m2gCGEG1gE1giUf2-Hqq4Y2B7f2mPHU649iUZiqJEzBWeUz3l5lyCxAF-iVCxk_IPppZFefb5uxs89ou36EKckfbKn-z5JlSpeQkQfo9RRX-U2V2P_d8WEsCSxb8cxXCl_NI-f4Flw1cHvd7xmXevbeMsI0-dPru68v3g8P-pblC5Cne1m78JHv6Yig_fTYxs3nSAhE1KsdU9uAmiSaDIaN4QDK9GagpNDxnpNeEwo1gHUBTqavTec6F-jPmR2gLkPDE353hfS1ri7m3oVYViu5R1h8Zw5l5fUyFWVBlr4YoihQQQok5cp7AU06NMQaU3Hkplyegfks2Z1958TrvpjDSq3CEXeVMczwvmd_3hQdFDtbQNDuqcPi_CNSoKDy-wHePl789UiN1lSt-lVbtjkdOPYXgObRKmduKnWc6ewCchFklBun58auKtEAmqzw19bz8LOEnwqdq2tt0-JehCCUL72yz-Ome_NF1O8NIscjre3GqUa9oV05VScyuGKjPVXR9NBmlWGeuzIm4wCTrxav-uhMggz1mw9mKEGoWDIFeGvPjMtkbjgsTM5RPuOZG2Nnv_8lSxn7ygwo1XgfhKaxh5KvNam-J4KiOsYzOhaaU9rVYZvrQwmUwFG6aM5pL9hlw5veRQPD7dvb0X7XxnoS5XZDJ31QOoIYy0gQniEa9BeP3GYkAAhrHIJv1p7c2y2qTxl81Afy0Bz2FyeT1SR_x2T4DuWM8ajsdpF7_4fqppoaBptNRpetrPArcZQYpf1aS4ksPzXqCVHtlBDamYQxrSUp9d6SB27Rscy_fQcV2pn7uWImKipJCL4q0W_BQul8-BCo-ollg_YbhvlTo4UdCzevjkEoBJ5ljg-uiTigtD-55VCWuusd5wzoljBR4Ao5cDPrpQAUrdrQKzYqkG-8dJ62Y4FOMAIRrjnc--yylbWL7ATPHKxL92uo_j-iK7yu5c3S2Myxahz2aSPTF42fw4M7lbc4K11kXvrVLHyUG5gLFyL_nB71QOB2AkLg7HPQDND8mXun9oiwpRGWOplvAvZo8yuZCHLWFTNYJS9lU86SnankvaPkJ97yuJJHY3CsUrgTW3FluPeP6QlkfCvUa7D8B_4L5DdXefjii1JhCjdGsYXlEuhMFAKGI94qn28xEXTK1jgyC2DIjNg8S8kCfxSfiD3iVA9zoQXwEMKjLJoTEDwD7xOM6jvJU19Gcqi4nldWfJ4TP3aWxDVhp7HTlnFWJh2Es4XZN4gpWyfyH6P33fOA28S_6P3XYvuyvYk-409TpolRwS_dj1WSMntQaQxbBwZNQVCVA3Vz_xkSPglYCw4o8AUiQ8S9mvBhtNlioSX4MfMzdGCfWOi1f2DTKAVosPbs27vustGkLIdzZ5Tzr4xqyAj6pzsYW3zMXm3VYLryrmiI64sO8Pqg&sai=AMfl-YRSuNE-mmk-D_XFX4zZQUpiJjeGZAYZDixzhFcoVG1JGFb0gMmGFLU8yk8nTYxuz9UUFPOLO2J1zI143QergxCvZyDT-qh5D6_JGHOS_QBDT4r3MoQVk_Bja06ZhxgwUO_gpwd6okvIReFjyBsyLG12wmArt6g8cCmsbnBf6S5piYqy8hGuTJjhVNvuMWtRtrftCeGuswLqbeTifH3vdztIY9vZl481sRNB07f308ezNnXX5LZYr0DKBlJdu-umakaFTj-1e6wpAqoIP78TQIzb-pOjIIahBjYbr9lvdiIbwOrA5CBpHCNLtpijQ4JgAvsC-yBX2NN7KlbC2TRIwWcI-xlhjOM-5cRAchgtP-CMYw5f2EbNIWv8UlSw5rsh9Cdvu0w6sFbU4US5TGKHEprfuggH7sc-OFL8TQH_DKxqsjjv7BjVDioLK9saepgS6aX2cet_FbqQDXhdBpv1TjoVFEfRanG1b15bMq6mIWO1j5B9kVwHHn-TQO_hnql6WAKpra_d81MKO3pa9AInphP920ZiuIKiz7g9weC3VP8GD23kLCSg8sdupYLINFsJlEiA2oRDVWEGii3EaAmCYL0u34Yu2Px2Dvd7h8Z8JDKlDXU1FEWmjVWreA9OIbaJBIQIy90Vyhw34YDMC3IRp9kEmqwn4Kw1Op9Fo9wblwp7pr4px5YgP-rr-VsBC4d4xR5dYs13b6M8VQiN8_xEYbwL5Ld3zZXImPn2jxjNBqoflbzcuoJpkao2xrhFlV9Yy5vmCSlXgwSAjLHEIhKngbLOi4cEnkL51_ebvtjOD3Jbx4pCe5moH3yV0cZIeEPCpcTp6c2O0tzE_jx7ScDAV4gy5u8VTiaU3YlhQEDV1Db8&sig=Cg0ArKJSzCHZGxBI6gLX&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9kaXNjb3ZlcmFzci5jb20&urlfix=1&adurl=https://www.discoverasr.com/en/the-unlimited-collection/united-kingdom/mount-royal-hotel-edinburgh-by-the-unlimited-collection%3Futm_source%3DDV360%26utm_medium%3DDisplayRemarketing%26utm_campaign%3DTUCBrand2026%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24046779999
                - img "Advertisement" [ref=f8e5]
              - generic [ref=f8e6]:
                - generic:
                  - img [ref=f8e10] [cursor=pointer]
                  - button [ref=f8e12] [cursor=pointer]:
                    - img [ref=f8e13]
      - generic [ref=e94]:
        - heading "Brands" [level=2] [ref=e95]
        - list [ref=e97]:
          - listitem [ref=e98]:
            - link "(6) Polo" [ref=e99] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e100]: (6)
              - text: Polo
          - listitem [ref=e101]:
            - link "(5) H&M" [ref=e102] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e103]: (5)
              - text: H&M
          - listitem [ref=e104]:
            - link "(5) Madame" [ref=e105] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e106]: (5)
              - text: Madame
          - listitem [ref=e107]:
            - link "(3) Mast & Harbour" [ref=e108] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e109]: (3)
              - text: Mast & Harbour
          - listitem [ref=e110]:
            - link "(4) Babyhug" [ref=e111] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e112]: (4)
              - text: Babyhug
          - listitem [ref=e113]:
            - link "(3) Allen Solly Junior" [ref=e114] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e115]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e116]:
            - link "(3) Kookie Kids" [ref=e117] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e118]: (3)
              - text: Kookie Kids
          - listitem [ref=e119]:
            - link "(5) Biba" [ref=e120] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e121]: (5)
              - text: Biba
    - generic [ref=e122]:
      - generic [ref=e123]:
        - heading "Features Items" [level=2] [ref=e124]
        - generic [ref=e126]:
          - generic [ref=e127]:
            - generic [ref=e128]:
              - img "ecommerce website products" [ref=e129]
              - heading "Rs. 500" [level=2] [ref=e130]
              - paragraph [ref=e131]: Blue Top
              - generic [ref=e132] [cursor=pointer]:
                - generic [ref=e133]: 
                - text: Add to cart
            - generic [ref=e134]:
              - heading "Rs. 500" [level=2] [ref=e135]
              - paragraph [ref=e136]: Blue Top
              - generic [ref=e137] [cursor=pointer]:
                - generic [ref=e138]: 
                - text: Add to cart
          - list [ref=e140]:
            - listitem [ref=e141]:
              - link " View Product" [ref=e142] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e143]: 
                - text: View Product
        - generic [ref=e145]:
          - generic [ref=e146]:
            - generic [ref=e147]:
              - img "ecommerce website products" [ref=e148]
              - heading "Rs. 400" [level=2] [ref=e149]
              - paragraph [ref=e150]:
                - text: Men
                - link "Tshirt" [ref=e151] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e152]
                  - text: Tshirt
              - generic [ref=e154] [cursor=pointer]:
                - generic [ref=e155]: 
                - text: Add to cart
            - generic [ref=e156]:
              - heading "Rs. 400" [level=2] [ref=e157]
              - paragraph [ref=e158]: Men Tshirt
              - generic [ref=e159] [cursor=pointer]:
                - generic [ref=e160]: 
                - text: Add to cart
          - list [ref=e162]:
            - listitem [ref=e163]:
              - link " View Product" [ref=e164] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e165]: 
                - text: View Product
        - generic [ref=e167]:
          - generic [ref=e168]:
            - generic [ref=e169]:
              - img "ecommerce website products" [ref=e170]
              - heading "Rs. 1000" [level=2] [ref=e171]
              - paragraph [ref=e172]:
                - text: Sleeveless
                - link "Dress" [ref=e173] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e174]
                  - text: Dress
              - generic [ref=e176] [cursor=pointer]:
                - generic [ref=e177]: 
                - text: Add to cart
            - generic [ref=e178]:
              - heading "Rs. 1000" [level=2] [ref=e179]
              - paragraph [ref=e180]: Sleeveless Dress
              - generic [ref=e181] [cursor=pointer]:
                - generic [ref=e182]: 
                - text: Add to cart
          - list [ref=e184]:
            - listitem [ref=e185]:
              - link " View Product" [ref=e186] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e187]: 
                - text: View Product
        - generic [ref=e189]:
          - generic [ref=e190]:
            - generic [ref=e191]:
              - img "ecommerce website products" [ref=e192]
              - heading "Rs. 1500" [level=2] [ref=e193]
              - paragraph [ref=e194]: Stylish Dress
              - generic [ref=e195] [cursor=pointer]:
                - generic [ref=e196]: 
                - text: Add to cart
            - generic [ref=e197]:
              - heading "Rs. 1500" [level=2] [ref=e198]
              - paragraph [ref=e199]: Stylish Dress
              - generic [ref=e200] [cursor=pointer]:
                - generic [ref=e201]: 
                - text: Add to cart
          - list [ref=e203]:
            - listitem [ref=e204]:
              - link " View Product" [ref=e205] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e206]: 
                - text: View Product
        - generic [ref=e208]:
          - generic [ref=e209]:
            - generic [ref=e210]:
              - img "ecommerce website products" [ref=e211]
              - heading "Rs. 600" [level=2] [ref=e212]
              - paragraph [ref=e213]: Winter Top
              - generic [ref=e214] [cursor=pointer]:
                - generic [ref=e215]: 
                - text: Add to cart
            - generic [ref=e216]:
              - heading "Rs. 600" [level=2] [ref=e217]
              - paragraph [ref=e218]: Winter Top
              - generic [ref=e219] [cursor=pointer]:
                - generic [ref=e220]: 
                - text: Add to cart
          - list [ref=e222]:
            - listitem [ref=e223]:
              - link " View Product" [ref=e224] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e225]: 
                - text: View Product
        - generic [ref=e227]:
          - generic [ref=e228]:
            - generic [ref=e229]:
              - img "ecommerce website products" [ref=e230]
              - heading "Rs. 400" [level=2] [ref=e231]
              - paragraph [ref=e232]: Summer White Top
              - generic [ref=e233] [cursor=pointer]:
                - generic [ref=e234]: 
                - text: Add to cart
            - generic [ref=e235]:
              - heading "Rs. 400" [level=2] [ref=e236]
              - paragraph [ref=e237]: Summer White Top
              - generic [ref=e238] [cursor=pointer]:
                - generic [ref=e239]: 
                - text: Add to cart
          - list [ref=e241]:
            - listitem [ref=e242]:
              - link " View Product" [ref=e243] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e244]: 
                - text: View Product
        - generic [ref=e246]:
          - generic [ref=e247]:
            - generic [ref=e248]:
              - img "ecommerce website products" [ref=e249]
              - heading "Rs. 1000" [level=2] [ref=e250]
              - paragraph [ref=e251]: Madame Top For Women
              - generic [ref=e252] [cursor=pointer]:
                - generic [ref=e253]: 
                - text: Add to cart
            - generic [ref=e254]:
              - heading "Rs. 1000" [level=2] [ref=e255]
              - paragraph [ref=e256]: Madame Top For Women
              - generic [ref=e257] [cursor=pointer]:
                - generic [ref=e258]: 
                - text: Add to cart
          - list [ref=e260]:
            - listitem [ref=e261]:
              - link " View Product" [ref=e262] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e263]: 
                - text: View Product
        - generic [ref=e265]:
          - generic [ref=e266]:
            - generic [ref=e267]:
              - img "ecommerce website products" [ref=e268]
              - heading "Rs. 700" [level=2] [ref=e269]
              - paragraph [ref=e270]: Fancy Green Top
              - generic [ref=e271] [cursor=pointer]:
                - generic [ref=e272]: 
                - text: Add to cart
            - generic [ref=e273]:
              - heading "Rs. 700" [level=2] [ref=e274]
              - paragraph [ref=e275]: Fancy Green Top
              - generic [ref=e276] [cursor=pointer]:
                - generic [ref=e277]: 
                - text: Add to cart
          - list [ref=e279]:
            - listitem [ref=e280]:
              - link " View Product" [ref=e281] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e282]: 
                - text: View Product
        - generic [ref=e284]:
          - generic [ref=e285]:
            - generic [ref=e286]:
              - img "ecommerce website products" [ref=e287]
              - heading "Rs. 499" [level=2] [ref=e288]
              - paragraph [ref=e289]:
                - text: Sleeves Printed Top - White
                - link "Website development services" [ref=e290] [cursor=pointer]:
                  - img [ref=e292]
                  - text: Website development services
              - generic [ref=e294] [cursor=pointer]:
                - generic [ref=e295]: 
                - text: Add to cart
            - generic [ref=e296]:
              - heading "Rs. 499" [level=2] [ref=e297]
              - paragraph [ref=e298]: Sleeves Printed Top - White
              - generic [ref=e299] [cursor=pointer]:
                - generic [ref=e300]: 
                - text: Add to cart
          - list [ref=e302]:
            - listitem [ref=e303]:
              - link " View Product" [ref=e304] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e305]: 
                - text: View Product
        - generic [ref=e307]:
          - generic [ref=e308]:
            - generic [ref=e309]:
              - img "ecommerce website products" [ref=e310]
              - heading "Rs. 359" [level=2] [ref=e311]
              - paragraph [ref=e312]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e313] [cursor=pointer]:
                - generic [ref=e314]: 
                - text: Add to cart
            - generic [ref=e315]:
              - heading "Rs. 359" [level=2] [ref=e316]
              - paragraph [ref=e317]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e318] [cursor=pointer]:
                - generic [ref=e319]: 
                - text: Add to cart
          - list [ref=e321]:
            - listitem [ref=e322]:
              - link " View Product" [ref=e323] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e324]: 
                - text: View Product
        - generic [ref=e326]:
          - generic [ref=e327]:
            - generic [ref=e328]:
              - img "ecommerce website products" [ref=e329]
              - heading "Rs. 278" [level=2] [ref=e330]
              - paragraph [ref=e331]: Frozen Tops For Kids
              - generic [ref=e332] [cursor=pointer]:
                - generic [ref=e333]: 
                - text: Add to cart
            - generic [ref=e334]:
              - heading "Rs. 278" [level=2] [ref=e335]
              - paragraph [ref=e336]: Frozen Tops For Kids
              - generic [ref=e337] [cursor=pointer]:
                - generic [ref=e338]: 
                - text: Add to cart
          - list [ref=e340]:
            - listitem [ref=e341]:
              - link " View Product" [ref=e342] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e343]: 
                - text: View Product
        - generic [ref=e345]:
          - generic [ref=e346]:
            - generic [ref=e347]:
              - img "ecommerce website products" [ref=e348]
              - heading "Rs. 679" [level=2] [ref=e349]
              - paragraph [ref=e350]: Full Sleeves Top Cherry - Pink
              - generic [ref=e351] [cursor=pointer]:
                - generic [ref=e352]: 
                - text: Add to cart
            - generic [ref=e353]:
              - heading "Rs. 679" [level=2] [ref=e354]
              - paragraph [ref=e355]: Full Sleeves Top Cherry - Pink
              - generic [ref=e356] [cursor=pointer]:
                - generic [ref=e357]: 
                - text: Add to cart
          - list [ref=e359]:
            - listitem [ref=e360]:
              - link " View Product" [ref=e361] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e362]: 
                - text: View Product
        - generic [ref=e364]:
          - generic [ref=e365]:
            - generic [ref=e366]:
              - img "ecommerce website products" [ref=e367]
              - heading "Rs. 315" [level=2] [ref=e368]
              - paragraph [ref=e369]:
                - text: Printed Off Shoulder Top - White
                - link "Quality assurance training" [ref=e370] [cursor=pointer]:
                  - img [ref=e372]
                  - text: Quality assurance training
              - generic [ref=e374] [cursor=pointer]:
                - generic [ref=e375]: 
                - text: Add to cart
            - generic [ref=e376]:
              - heading "Rs. 315" [level=2] [ref=e377]
              - paragraph [ref=e378]: Printed Off Shoulder Top - White
              - generic [ref=e379] [cursor=pointer]:
                - generic [ref=e380]: 
                - text: Add to cart
          - list [ref=e382]:
            - listitem [ref=e383]:
              - link " View Product" [ref=e384] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e385]: 
                - text: View Product
        - generic [ref=e387]:
          - generic [ref=e388]:
            - generic [ref=e389]:
              - img "ecommerce website products" [ref=e390]
              - heading "Rs. 478" [level=2] [ref=e391]
              - paragraph [ref=e392]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e393] [cursor=pointer]:
                - generic [ref=e394]: 
                - text: Add to cart
            - generic [ref=e395]:
              - heading "Rs. 478" [level=2] [ref=e396]
              - paragraph [ref=e397]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e398] [cursor=pointer]:
                - generic [ref=e399]: 
                - text: Add to cart
          - list [ref=e401]:
            - listitem [ref=e402]:
              - link " View Product" [ref=e403] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e404]: 
                - text: View Product
        - generic [ref=e406]:
          - generic [ref=e407]:
            - generic [ref=e408]:
              - img "ecommerce website products" [ref=e409]
              - heading "Rs. 1200" [level=2] [ref=e410]
              - paragraph [ref=e411]: Little Girls Mr. Panda Shirt
              - generic [ref=e412] [cursor=pointer]:
                - generic [ref=e413]: 
                - text: Add to cart
            - generic [ref=e414]:
              - heading "Rs. 1200" [level=2] [ref=e415]
              - paragraph [ref=e416]: Little Girls Mr. Panda Shirt
              - generic [ref=e417] [cursor=pointer]:
                - generic [ref=e418]: 
                - text: Add to cart
          - list [ref=e420]:
            - listitem [ref=e421]:
              - link " View Product" [ref=e422] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e423]: 
                - text: View Product
        - generic [ref=e425]:
          - generic [ref=e426]:
            - generic [ref=e427]:
              - img "ecommerce website products" [ref=e428]
              - heading "Rs. 1050" [level=2] [ref=e429]
              - paragraph [ref=e430]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e431] [cursor=pointer]:
                - generic [ref=e432]: 
                - text: Add to cart
            - generic [ref=e433]:
              - heading "Rs. 1050" [level=2] [ref=e434]
              - paragraph [ref=e435]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e436] [cursor=pointer]:
                - generic [ref=e437]: 
                - text: Add to cart
          - list [ref=e439]:
            - listitem [ref=e440]:
              - link " View Product" [ref=e441] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e442]: 
                - text: View Product
        - generic [ref=e444]:
          - generic [ref=e445]:
            - generic [ref=e446]:
              - img "ecommerce website products" [ref=e447]
              - heading "Rs. 1190" [level=2] [ref=e448]
              - paragraph [ref=e449]: Cotton Mull Embroidered Dress
              - generic [ref=e450] [cursor=pointer]:
                - generic [ref=e451]: 
                - text: Add to cart
            - generic [ref=e452]:
              - heading "Rs. 1190" [level=2] [ref=e453]
              - paragraph [ref=e454]: Cotton Mull Embroidered Dress
              - generic [ref=e455] [cursor=pointer]:
                - generic [ref=e456]: 
                - text: Add to cart
          - list [ref=e458]:
            - listitem [ref=e459]:
              - link " View Product" [ref=e460] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e461]: 
                - text: View Product
        - generic [ref=e463]:
          - generic [ref=e464]:
            - generic [ref=e465]:
              - img "ecommerce website products" [ref=e466]
              - heading "Rs. 1530" [level=2] [ref=e467]
              - paragraph [ref=e468]: Blue Cotton Indie Mickey Dress
              - generic [ref=e469] [cursor=pointer]:
                - generic [ref=e470]: 
                - text: Add to cart
            - generic [ref=e471]:
              - heading "Rs. 1530" [level=2] [ref=e472]
              - paragraph [ref=e473]: Blue Cotton Indie Mickey Dress
              - generic [ref=e474] [cursor=pointer]:
                - generic [ref=e475]: 
                - text: Add to cart
          - list [ref=e477]:
            - listitem [ref=e478]:
              - link " View Product" [ref=e479] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e480]: 
                - text: View Product
        - generic [ref=e482]:
          - generic [ref=e483]:
            - generic [ref=e484]:
              - img "ecommerce website products" [ref=e485]
              - heading "Rs. 1600" [level=2] [ref=e486]
              - paragraph [ref=e487]:
                - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
                - link "API testing platforms" [ref=e488] [cursor=pointer]:
                  - img [ref=e490]
                  - text: API testing platforms
              - generic [ref=e492] [cursor=pointer]:
                - generic [ref=e493]: 
                - text: Add to cart
            - generic [ref=e494]:
              - heading "Rs. 1600" [level=2] [ref=e495]
              - paragraph [ref=e496]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e497] [cursor=pointer]:
                - generic [ref=e498]: 
                - text: Add to cart
          - list [ref=e500]:
            - listitem [ref=e501]:
              - link " View Product" [ref=e502] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e503]: 
                - text: View Product
        - generic [ref=e505]:
          - generic [ref=e506]:
            - generic [ref=e507]:
              - img "ecommerce website products" [ref=e508]
              - heading "Rs. 1100" [level=2] [ref=e509]
              - paragraph [ref=e510]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e511] [cursor=pointer]:
                - generic [ref=e512]: 
                - text: Add to cart
            - generic [ref=e513]:
              - heading "Rs. 1100" [level=2] [ref=e514]
              - paragraph [ref=e515]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e516] [cursor=pointer]:
                - generic [ref=e517]: 
                - text: Add to cart
          - list [ref=e519]:
            - listitem [ref=e520]:
              - link " View Product" [ref=e521] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e522]: 
                - text: View Product
        - generic [ref=e524]:
          - generic [ref=e525]:
            - generic [ref=e526]:
              - img "ecommerce website products" [ref=e527]
              - heading "Rs. 849" [level=2] [ref=e528]
              - paragraph [ref=e529]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e530] [cursor=pointer]:
                - generic [ref=e531]: 
                - text: Add to cart
            - generic [ref=e532]:
              - heading "Rs. 849" [level=2] [ref=e533]
              - paragraph [ref=e534]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e535] [cursor=pointer]:
                - generic [ref=e536]: 
                - text: Add to cart
          - list [ref=e538]:
            - listitem [ref=e539]:
              - link " View Product" [ref=e540] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e541]: 
                - text: View Product
        - generic [ref=e543]:
          - generic [ref=e544]:
            - generic [ref=e545]:
              - img "ecommerce website products" [ref=e546]
              - heading "Rs. 1299" [level=2] [ref=e547]
              - paragraph [ref=e548]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=e549] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e550]
                  - text: T-Shirt
              - generic [ref=e552] [cursor=pointer]:
                - generic [ref=e553]: 
                - text: Add to cart
            - generic [ref=e554]:
              - heading "Rs. 1299" [level=2] [ref=e555]
              - paragraph [ref=e556]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e557] [cursor=pointer]:
                - generic [ref=e558]: 
                - text: Add to cart
          - list [ref=e560]:
            - listitem [ref=e561]:
              - link " View Product" [ref=e562] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e563]: 
                - text: View Product
        - generic [ref=e565]:
          - generic [ref=e566]:
            - generic [ref=e567]:
              - img "ecommerce website products" [ref=e568]
              - heading "Rs. 1000" [level=2] [ref=e569]
              - paragraph [ref=e570]: Green Side Placket Detail T-Shirt
              - generic [ref=e571] [cursor=pointer]:
                - generic [ref=e572]: 
                - text: Add to cart
            - generic [ref=e573]:
              - heading "Rs. 1000" [level=2] [ref=e574]
              - paragraph [ref=e575]: Green Side Placket Detail T-Shirt
              - generic [ref=e576] [cursor=pointer]:
                - generic [ref=e577]: 
                - text: Add to cart
          - list [ref=e579]:
            - listitem [ref=e580]:
              - link " View Product" [ref=e581] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e582]: 
                - text: View Product
        - generic [ref=e584]:
          - generic [ref=e585]:
            - generic [ref=e586]:
              - img "ecommerce website products" [ref=e587]
              - heading "Rs. 1500" [level=2] [ref=e588]
              - paragraph [ref=e589]: Premium Polo T-Shirts
              - generic [ref=e590] [cursor=pointer]:
                - generic [ref=e591]: 
                - text: Add to cart
            - generic [ref=e592]:
              - heading "Rs. 1500" [level=2] [ref=e593]
              - paragraph [ref=e594]: Premium Polo T-Shirts
              - generic [ref=e595] [cursor=pointer]:
                - generic [ref=e596]: 
                - text: Add to cart
          - list [ref=e598]:
            - listitem [ref=e599]:
              - link " View Product" [ref=e600] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e601]: 
                - text: View Product
        - generic [ref=e603]:
          - generic [ref=e604]:
            - generic [ref=e605]:
              - img "ecommerce website products" [ref=e606]
              - heading "Rs. 850" [level=2] [ref=e607]
              - paragraph [ref=e608]: Pure Cotton Neon Green Tshirt
              - generic [ref=e609] [cursor=pointer]:
                - generic [ref=e610]: 
                - text: Add to cart
            - generic [ref=e611]:
              - heading "Rs. 850" [level=2] [ref=e612]
              - paragraph [ref=e613]: Pure Cotton Neon Green Tshirt
              - generic [ref=e614] [cursor=pointer]:
                - generic [ref=e615]: 
                - text: Add to cart
          - list [ref=e617]:
            - listitem [ref=e618]:
              - link " View Product" [ref=e619] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e620]: 
                - text: View Product
        - generic [ref=e622]:
          - generic [ref=e623]:
            - generic [ref=e624]:
              - img "ecommerce website products" [ref=e625]
              - heading "Rs. 799" [level=2] [ref=e626]
              - paragraph [ref=e627]: Soft Stretch Jeans
              - generic [ref=e628] [cursor=pointer]:
                - generic [ref=e629]: 
                - text: Add to cart
            - generic [ref=e630]:
              - heading "Rs. 799" [level=2] [ref=e631]
              - paragraph [ref=e632]: Soft Stretch Jeans
              - generic [ref=e633] [cursor=pointer]:
                - generic [ref=e634]: 
                - text: Add to cart
          - list [ref=e636]:
            - listitem [ref=e637]:
              - link " View Product" [ref=e638] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e639]: 
                - text: View Product
        - generic [ref=e641]:
          - generic [ref=e642]:
            - generic [ref=e643]:
              - img "ecommerce website products" [ref=e644]
              - heading "Rs. 1200" [level=2] [ref=e645]
              - paragraph [ref=e646]: Regular Fit Straight Jeans
              - generic [ref=e647] [cursor=pointer]:
                - generic [ref=e648]: 
                - text: Add to cart
            - generic [ref=e649]:
              - heading "Rs. 1200" [level=2] [ref=e650]
              - paragraph [ref=e651]: Regular Fit Straight Jeans
              - generic [ref=e652] [cursor=pointer]:
                - generic [ref=e653]: 
                - text: Add to cart
          - list [ref=e655]:
            - listitem [ref=e656]:
              - link " View Product" [ref=e657] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e658]: 
                - text: View Product
        - generic [ref=e660]:
          - generic [ref=e661]:
            - generic [ref=e662]:
              - img "ecommerce website products" [ref=e663]
              - heading "Rs. 1400" [level=2] [ref=e664]
              - paragraph [ref=e665]: Grunt Blue Slim Fit Jeans
              - generic [ref=e666] [cursor=pointer]:
                - generic [ref=e667]: 
                - text: Add to cart
            - generic [ref=e668]:
              - heading "Rs. 1400" [level=2] [ref=e669]
              - paragraph [ref=e670]: Grunt Blue Slim Fit Jeans
              - generic [ref=e671] [cursor=pointer]:
                - generic [ref=e672]: 
                - text: Add to cart
          - list [ref=e674]:
            - listitem [ref=e675]:
              - link " View Product" [ref=e676] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e677]: 
                - text: View Product
        - generic [ref=e679]:
          - generic [ref=e680]:
            - generic [ref=e681]:
              - img "ecommerce website products" [ref=e682]
              - heading "Rs. 2300" [level=2] [ref=e683]
              - paragraph [ref=e684]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e685] [cursor=pointer]:
                - generic [ref=e686]: 
                - text: Add to cart
            - generic [ref=e687]:
              - heading "Rs. 2300" [level=2] [ref=e688]
              - paragraph [ref=e689]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e690] [cursor=pointer]:
                - generic [ref=e691]: 
                - text: Add to cart
          - list [ref=e693]:
            - listitem [ref=e694]:
              - link " View Product" [ref=e695] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e696]: 
                - text: View Product
        - generic [ref=e698]:
          - generic [ref=e699]:
            - generic [ref=e700]:
              - img "ecommerce website products" [ref=e701]
              - heading "Rs. 3000" [level=2] [ref=e702]
              - paragraph [ref=e703]: Cotton Silk Hand Block Print Saree
              - generic [ref=e704] [cursor=pointer]:
                - generic [ref=e705]: 
                - text: Add to cart
            - generic [ref=e706]:
              - heading "Rs. 3000" [level=2] [ref=e707]
              - paragraph [ref=e708]: Cotton Silk Hand Block Print Saree
              - generic [ref=e709] [cursor=pointer]:
                - generic [ref=e710]: 
                - text: Add to cart
          - list [ref=e712]:
            - listitem [ref=e713]:
              - link " View Product" [ref=e714] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e715]: 
                - text: View Product
        - generic [ref=e717]:
          - generic [ref=e718]:
            - generic [ref=e719]:
              - img "ecommerce website products" [ref=e720]
              - heading "Rs. 3500" [level=2] [ref=e721]
              - paragraph [ref=e722]: Rust Red Linen Saree
              - generic [ref=e723] [cursor=pointer]:
                - generic [ref=e724]: 
                - text: Add to cart
            - generic [ref=e725]:
              - heading "Rs. 3500" [level=2] [ref=e726]
              - paragraph [ref=e727]: Rust Red Linen Saree
              - generic [ref=e728] [cursor=pointer]:
                - generic [ref=e729]: 
                - text: Add to cart
          - list [ref=e731]:
            - listitem [ref=e732]:
              - link " View Product" [ref=e733] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e734]: 
                - text: View Product
        - generic [ref=e736]:
          - generic [ref=e737]:
            - generic [ref=e738]:
              - img "ecommerce website products"
              - heading "Rs. 5000" [level=2] [ref=e739]
              - paragraph [ref=e740]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e741] [cursor=pointer]:
                - generic [ref=e742]: 
                - text: Add to cart
            - generic [ref=e743]:
              - heading "Rs. 5000" [level=2] [ref=e744]
              - paragraph [ref=e745]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e746] [cursor=pointer]:
                - generic [ref=e747]: 
                - text: Add to cart
          - list [ref=e749]:
            - listitem [ref=e750]:
              - link " View Product" [ref=e751] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e752]: 
                - text: View Product
        - generic [ref=e754]:
          - generic [ref=e755]:
            - generic [ref=e756]:
              - img "ecommerce website products"
              - heading "Rs. 1400" [level=2] [ref=e757]
              - paragraph [ref=e758]: Lace Top For Women
              - generic [ref=e759] [cursor=pointer]:
                - generic [ref=e760]: 
                - text: Add to cart
            - generic [ref=e761]:
              - heading "Rs. 1400" [level=2] [ref=e762]
              - paragraph [ref=e763]: Lace Top For Women
              - generic [ref=e764] [cursor=pointer]:
                - generic [ref=e765]: 
                - text: Add to cart
          - list [ref=e767]:
            - listitem [ref=e768]:
              - link " View Product" [ref=e769] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e770]: 
                - text: View Product
        - generic [ref=e772]:
          - generic [ref=e773]:
            - generic [ref=e774]:
              - img "ecommerce website products"
              - heading "Rs. 1389" [level=2] [ref=e775]
              - paragraph [ref=e776]:
                - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
                - link "QA testing services" [ref=e777] [cursor=pointer]:
                  - img [ref=e779]
                  - text: QA testing services
              - generic [ref=e781] [cursor=pointer]:
                - generic [ref=e782]: 
                - text: Add to cart
            - generic [ref=e783]:
              - heading "Rs. 1389" [level=2] [ref=e784]
              - paragraph [ref=e785]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e786] [cursor=pointer]:
                - generic [ref=e787]: 
                - text: Add to cart
          - list [ref=e789]:
            - listitem [ref=e790]:
              - link " View Product" [ref=e791] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e792]: 
                - text: View Product
      - generic [ref=e793]:
        - heading "recommended items" [level=2] [ref=e794]
        - generic [ref=e795]:
          - generic [ref=e796]:
            - text:   
            - generic:
              - generic [ref=e800]:
                - img "ecommerce website products" [ref=e801]
                - heading "Rs. 1500" [level=2] [ref=e802]
                - paragraph [ref=e803]: Stylish Dress
                - generic [ref=e804] [cursor=pointer]:
                  - generic [ref=e805]: 
                  - text: Add to cart
              - generic [ref=e809]:
                - img "ecommerce website products" [ref=e810]
                - heading "Rs. 600" [level=2] [ref=e811]
                - paragraph [ref=e812]: Winter Top
                - generic [ref=e813] [cursor=pointer]:
                  - generic [ref=e814]: 
                  - text: Add to cart
              - generic [ref=e818]:
                - img "ecommerce website products" [ref=e819]
                - heading "Rs. 400" [level=2] [ref=e820]
                - paragraph [ref=e821]: Summer White Top
                - generic [ref=e822] [cursor=pointer]:
                  - generic [ref=e823]: 
                  - text: Add to cart
          - link "" [ref=e824] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e825]: 
          - link "" [ref=e826] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e827]: 
  - insertion [ref=e829]
  - contentinfo [ref=e831]:
    - generic [ref=e836]:
      - heading "Subscription" [level=2] [ref=e837]
      - generic [ref=e838]:
        - textbox "Your email address" [ref=e839]
        - button "" [ref=e840] [cursor=pointer]:
          - generic [ref=e841]: 
        - paragraph [ref=e842]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e846]: Copyright © 2021 All rights reserved
  - text: 
  - generic [ref=e847]:
    - generic [ref=e848] [cursor=pointer]:
      - img [ref=e850]
      - link "Go to shopping options for API testing frameworks" [ref=e852]: API testing frameworks
    - button "Close shopping anchor" [ref=e853]
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