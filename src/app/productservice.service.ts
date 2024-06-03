import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  AllProducts = [
    {
      id : 1,
      name : "Men's T-Shirt",
      price : 20000,
      description : "Product 1 Description",
      image : "https://i.ebayimg.com/images/g/Bh4AAOSwBSdkLmHv/s-l960.webp",
      category : "Men's Wear"
    },
    {
      id : 2,
      name : "Women's Skirt",
      price : 20000,
      description : "Product 1 Description",
      image : "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/3480152/1.jpg?4073",
      category : "Women's Wear"
    },
    {
      id : 3,
      name : "Men's T-Shirt",
      price : 20000,
      description : "Product 1 Description",
      image : "https://i.ebayimg.com/images/g/tKoAAOSw2fRkKpt6/s-l960.webp",
      category : "Men's Suit"
    },
    {
      id : 4,
      name : "Womeen's skirt",
      price : 2500,
      description : "Product 1 Description",
      image : "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/0423452/1.jpg?4899",
      category : "Women's Wear"
    },
    {
      id : 5,
      name : "Men's T-Shirt",
      price : 20000,
      description : "Product 1 Description",
      image : "https://i.ebayimg.com/images/g/Bh4AAOSwBSdkLmHv/s-l960.webp",
      category : "Men's Wear"
    },
    {
      id : 6,
      name : "Women's Shoe",
      price : 2000,
      description : "Product 1 Description",
      image : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGBgYGBgZGhgYGRgZGBgYGBgaGRkcGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISHjQhJCM0NDQxNDQ0MTQxNDQxNDQ0NDQxNDQ0MTQ0NDQ0NDE0NDQ0NDQxMTQ0NDQ0MTQxNDQxMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xAA9EAACAQIDBgMGBAYBAwUAAAABAgADEQQSIQUxQVFh8HGBkQYTIqGxwRQy0eFCUmJygvGSB0PCFRYkorL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAAIBAwMFAQAAAAAAAAAAAQIRAxIhMRNBUQQUFSJhMv/aAAwDAQACEQMRAD8AmTaKyOttdRxnEPjGHGVquLY8Zjqrm9Dw22lPGXhtVec8rp4thxMuJtI846qj0Grtgc49LbAPGcEMffjJaWOmeqm3Y/8AqK5t81Tj1KeU86qYs30Ms09pNaxM1M6bdbsqtmfznWqdJ5lsPaOVrkzq220oG+TLmxx8rHRhhHzCcm/tAo4wf/cQ5zH3OKutWqMwHOWFrAsBOY2bjDVRnHBso9AT9YZxZT4jzk6+ru9fFj+sdRUr5ZUq4gGZLYwtxjm9t8bdNLWIpkjWZNTCEG99DOV277WVqGINFDmUKpa+tibkAX6W9ZXqe25FiV3/AJgOnGx3GNX4Y6sZdbd4KFxcSRqWZJm+ze2Eri6m4Py6HkZ0q0xFje2NsfErTRwxGYuT5WAH3h4/ayW3iYXtnQemy1EvlPwtbgeE4/EYtzxM55cmUvS8nJbMq09qurtfrH2aqobzC/EHnGGOaYtz9mNu7bbCqLXmFtPaoY6Gc89djIXczfHMre9Msrp0tDaQKWlGrVW99JkK5EidzJljd3um7Y2ffJ0jzDznnFM9H9QmNxK7QWciRl57JAcQMZQY9po0lV461CDI90ZRM6RdV4WeQIY+aTQtUKpWXlxjHjM1DeXaaTjzYzyQbVCd5kb1COMGpeR+7J056TljjGnp+wMPkwtMHewznxc5voR6SrtYG1uE2suVFXkoHoLTH2gNJ19nuwmpIDZtQsu/UaHy7E1VUkTjtkY/JiGpnc6ll/uS1x5g3/xnX0Kmkq2vHPaGoxxdYtvzkeQAC/ICVG+IWO4zov8AqJgwtYVl/j+FvEbj9pzFB76T0Y3ceXOayq1sTa74WqHUkj+Jf5l5+M902JtNK9NXQ3BAnhDIN/n4TrPYbb7U8QtJ/wAtQ5bjQZuBI62t6TOWNa48tdq9U2rg1qoyNuYWPTr4zyTauDai7I+8bjwYcCO+BnsxS4vznC+3OEuivpdGt5NofnacM8fdvlxlx38PP2MEyeokjZOczLHlOpgsJJSj1EmsP9M3wgMELLCUo/upMr3WeFbLFLGWKTYoPSEEURB94YveT16bSCnCySL3sf3kaShdYlhlrwSJLGbBR0EYGSoszUSUzLqPKVOaeFpAznzak7kJQDJsOyh0voM638MwvJXoACZmJNrk7p5sf2vZY9VxWIU2sQZl7Rf4SZ5zsf2kelXTO5NO9jfXKCCLjoLztsdjVf8AKQRbgZ6bjZ5e/DKZeHF7ax/uq1Kou9WuRzFrMPMEiehYTFBgCDcEAjqCLieW+0yMXzcBpNTY3tKqUFpuSGUZQeaj8tvLTymrj+s0xMtZWV0ntjhDWpZFtmuDc8ADczzathmpnXUX3zpcR7SBv4pl4nHI41msdxnPpy7oab315/veESQQQSGBBBG8MNQR1uB6SLDAcN1z6Sdu/PWdnF7D7De1K4mmEcgVUADrz5MvQ/LUTqsds6nXpNScCzDeNCOIIPMT5zp1npuKlNijqdGHjuPMdJ22yv8AqkyKFr0yWGmZLEH/ABY6epnK46dplMpqqW0tlvRqvSbUod/8yncQOo4ShUST+0PtIMbUFVUyZVyf1MLk3axO7X1mcuLccZz9D3l08+WMl7JPd21js4gfiyd8EkHUd3F5fTuN2mUTipYQVcGI0SRIBRcGcrhu1JFiKQ5Gij06umWI5EGPeesK0V4rxLDRKZIGglIN4ZTSxRGkqIdZr4alcSaNKyrrNPCraVvd2aX8HUDblNhf4jotwL2LcD4yZccymqkiRqgtqdBOb2vtAMbLoo3depk228VUFgy5VOq21B/yGhPThOdq1LzOPDjjdxqQNRrmbOxNpspyMeFlv9IOA2CzhWZggbcSC2mZVubbh8V9eCmbFP8A6f4lqa1KbUzmsVVyUa3w5mJIyqAWtckXykjhfpcdxvHLpu1fHoGQk8jOcRdfATVr+8Vfd1AAw3kMrAjhZlJB3Sk68FBPhrJjjpc8plVSoIAU7hLX4Rv4rL4nX0Eu4fChed/5jv8A8Rw8ZrTJUKeUW5Ajz0vJHP1+3zjk2Fug7EiZ/qe78JUI6nvp6xnpjvlY7o6n/f2j9geg1gWMLSsjE8WsPJSZdGHuB1Ln/wC37wKYyqgGujOf8j8I/wCKtNKhTtYb8oC36jeZYKTYWZdPFWZ2G5So8tRNrbeJFNNPzvov3Pl+k57DrlpO3EugHit2/SSjsMLh7rJGwYljZWqKSLEgEjkSNZeyiZSRj/gxFNjKsaGnnGWOFmh+EMZ8GZnbDOaKnL67PMkTZ0rSFFuJFWw54CaaYW0MqJN6ZYiaGbOCfSVqmFvulXGXVQAbai+u8cpqd2lupisxZVBJ0AsLkkncANb7rDjedS+Cy1UwbMUp4Sm1bFPr8VR1UvyzXzJSXUaXIImH7O7GTE0iRXCVQzEI27JpqANb6Eki9uUfbOOxgpnD13Z0fIodvjzrSLsirU/iS7lrHXdutab12B4OgmIco6gIGLtl1yKWY5A+cm96jKDck+7BIYE2y6ns+qYpELq1JmzE31SmvxPn3WK0wWO6+UynidpOAUDHWwc3PxWvvO86ljrxYnjLOwHxOfPhr+8S9mUJdA4KG2fQEhmHPUyWyzWh0VGmazUae56xOIcXBt+IZiAAdNKC0xoN1QXuBNn2o21koWRiDXByuPyiknwqLn8yEMzjrUP5bShsHA1Ueo+IJFSpalnzqWVMoao+ZCbEIihTwIA0BnMbfxhxFZ3X8l7JyCLooHS9yPHhL7CkH5a31Jc7yenOOBzaw00UW9ZGFUEBs5LEC6kfDc2HwkXb1H3g7v2+3TvpIJhYbh0ue90Rf7HvnIC3ff0jZu+9RANm74ftAPfe4xd9f3iHf+uEB1/0O/GSUkLsFG8ka8hfX0GsFELEBd5I7+U06KKhKJq25m+w5CILSUgWJG7QDwAsPvr1mgrKil2NlUXkeGpaa8Jg7a2j7w5E/Ip/5Hn4cvWW9kinjsS1Zyx8FHIcpZxlKwp0QbHRmPJn3eYH1i2XQF87flQZj5STAozu1VhpcgE/zabvASFrqcATllrM0pYL8stTNhBZzFAtFJppQFCEuGmitGIoJNdmdKi4bpC/Dy4iQnQTSsqvRmfUpG83aiCVnpiSijRpzH2uisxW+osfA23en1nUKgnD4yo3vCedz4k6W+UsBU66rZRcEcNby3itu1KiZHqs66fmNzpu138fvMxnB1OhHHcR4GDWbMbnU8Sbama2CpOodbaa2vfn47pap4mrRLBHKK+8g2uNbC+/iZnOhG8W+vpwlpMQfynXTWQWMXtio4Ad2cC+878xBOa35tQN99wlYu56RwgJBVQPkJMqjeT1NtfS/lKBogjXjz4i44G+njviJ4DvxEK6lcy3HxFcrWJ0sbgi1xr5acxB69+sAQO+HnzjgfLjCt08B4c4rf6gNbvfF3z9Dvjjv9jF3+vjAs4Q5cz/AMosvi2n6zS2Vh9LnUnjM1VOVV/mJY+G4fT5zTr4j3NO4/MdF8eflESotvbQsPcp/mR/+f19OcxKSXMAEk3OpPHrNHAoFBdty8P5m4CPKjxCMFSggu7kFh8wDysNTNOjhfdIqbzvYjix3+W4eUr+ztNnqvWY6WK+LNYm3KwHzE1caovJtL4XMAnwy0UPKVcBUAG+XTVElpEVukeH7xYo2ofeiUcRidZR/FNzkTEmNJ39mtTxWkZsYOczVU8oYoMZNyLMM6mqYuQtiYX4UyRMFM3OOk4c6oYzaWRdd50HpvnPI+ZQTvHGaXtLRKkDoPRjYzJzdLeRm8b22xcem6ojVsbEQHxEV+h9IqlEAD4hci+UXuB10tfpe8qIadr63uTbha3G/OTupQsbaHceFtTr6yvbWWqdRra8bwIkLMYWRufl33rLCqDroI4ZAVQqzFmAuGAtc20Uqb+Z9IUJJNugsAosBx0Hzvx+qA/3Ha3A3FzY8xwIPe+N8++MqEP9kxwO+JiHYj29YA96fpGAvpz09ehhHvj/AKkuCS7g8FBbnu6+YgXKCXew3IAo8pn7WxGd7Dcnwjx/iPrp5TRR8lNn46keJ3fMzCSKRPh0LEAd9TLNRjUZaVPcN3X+Zj3ymn7P7AaspdyyIdFC2DPrqbkaLpbr9emwWxadIHItid5JJY+ZnLLkmPZ3x4Mspv2YuGpFFCKNB8+ZPWO9NmnR/hByiGFE5+q39rWJRpsJY+K01PcCMaAj1V+0rL1imp7gR49U+1ZCYPpJVwfSaISEEnPrr1ThxU0wskXDiWrRwsm61OORXFAcoOIsiM9vyqT6CW7TP23ikSi+dgCUIAvqb6aDpcS497DP9cbXC1MYzu5fXQA+I0kFUleoh1qepOtmN9OBjBeGb1Gs9r5N790DVTykJPEjXhru6yyyqNWJt0Fz6XlckcJESYUAtY8RaFUDLpYncL87D5SFQd43nQeNwJczkdYECUyRqfKTUSy3sd4tey3t0NrjfwhAd6Q/hYNkY3W2YOtr3NgVIJvrw68dYEQHf7d/q9uzEPX0MID13eEobnwhRrW/aOO/v1HfkAt3+xlrB0zkY8WIUeA1P1+Uqt8/mfsZv4bC5Qqn+EXP9x3/ADiFZ222yoiDib+Sj9TI/ZrY5xNXL/Almc7vh4KDzYj0BPCD7Qt8YH8qfUn9BPTfZDZS4fDIpFmcCo/PM4Fh/ith5E8ZMmcs5hq1KmDygAAAAAADQADcAI/4YzV0gG08/pOv5G/DM/DmN+GM09ItI9KL+Rvwy/wxgnDGa2kE2j0j8jfhl/hjFNPSKPSX8jfhigR7TTp7N5y1SwCjhOcwyr3ZfU4Y+7EWkTwMmTCMeE3hQUR7CbnFXmy+vxnhjrs4zhfbykKdZFJBDUx8PL4m3+P2nqLOAL7gOPKeN+0GNGIr1KhJszfAeSromnh9TOuOHTduF+ry5dz2UAoItfyMrPQseNvlHysNxHjfT9Y5xBnVhAy+cBzfX7ADyA3SV81rsthfQ6Ak8fEdf1kLSCzhgGWx0INweu+DUZgbWiRgOFpYVgeMKhytzt6yW9hawGoJte7EAi5JJ5nTdqYZqoou2b/G1h1sd/hp4xnABIBBtxHHrYwhRD0B9ddIw+fpC/30lD8OQHzi75HvT5ei76aQqaFiFG8kDnv5jpYwLuBwmXLUbxVefIkd8Js0hcEnjKwUEjkNB4DQS7oBNRK5nHKHxQQ7i9ND4fCp+pnsZM8awBz1nqncodz87fUek9G9lsTUfC02qD4rEAneyg2Vj4i3ja/GYycPqJ2lbuaNIM8LPMvIkJjEyMmNeARaLNAYwc0CXNGkeaKBrZ4JeQlorw1crU2aCXkeaM7gak2A1J5CVGF7Z7U93QyA/HV+EdE/jP2855g578pr+0G0jiKzPf4R8KDkgvbTqdfOZD/fv7Sx7uLHpxRtbkPOQtJz6fUyIiHRHl6RlFyB1hNDwqXN+X1PZgWHUH+Fh4GRGj0t8z5yfX69/T1gEX8NYD0Hy65Va2oLAnKRx/2Iyr3v778kBC73fcd/ehvp2Ia6dAPmIw9fppET69mAie/2475e2em9zw+FfEjU+n1lBULEKupOgHDz5Dr2dIaWUflXQdTxPmYiVeoGBtTFZKTc2+EeJ/a5h0hMjHua1Vaa7lNj4/xHytNXwpsLSIohV/PXdUUbtMwA14C5tPTtm4Y0qVOmWzFFVSeeUW06TifZ7CJiMRck5MOFKKNzEN8JJ5XBNuNh1nfZpzteTny7zE8QjXjgyPPoYjXgFoJaBIxkTRFos0NSBiivFCrmaI1IMYrDJy8532w2lkpimp+Kpe/RB+b13es6GwG+eXbbx/vqrvwOi/2A2X7nzlnl14cOq7+FBj9/oIB7JhX+p776wT6zT2gPZkbyQyNjAjeW6SWW3E3P0lekl26DU+Uunf5kfLv5SAW/Q9/KMV/UDvrCHD0PfjaMo3enU2lCYRu93Y78I9u/2Pf3Xfff7g3SCx7/AG/Tl6Pfsfp3+tjD0woDuOqLz/qI5fXw3gdGlkGv530A/lU8+RP08ZYw6RsPTJu7bz99/fWWiVRSzaAd6dZYAx+K92n9R0UffwEoYPCPbJTQvWqKTYWuiDU3JNgTpv8AraC9TX3rjX/todwA3E9PrOp9jNnVVZ69QMudcgVwQzXZWLEHUD4QBzueQvLWc8unHbZ2Bs4UKCJkCsVUvbUliPiu3HlyHCaZiimHgttu6YmCTCMGE0a8V4jGMLo5iMG8YwoooF4oRc95G95AyxZYTSpt2vlw1Uj+Qj/l8P3nl7DvzM9K9oB/8ercEgoQbcAdC3lv8p5k4ZDZhodx4H+08ZY9fB/miP34wGjNWkLVJp3GzSF3iZodGgW1I+Hfc8bcBzkE+HSy9SCdfDT6yVuPkep7/WOd/mR8h35xgT8teenGUIjePPvzjjvvx75Nu8tPTr3+gM/fflAJm7/Q97/UGfvvz73xs0t4eiFGdxpvVOfVhy6cYEuFoqAKlTVd6qd7nmf6PrJqKF2zNx3Dl5d+gkaoztmf0Py8PsJeDBF6n5Dn0/SUSuyqN9lWY2LxeY3I0X8q8B1YcT0ir4kuwRQTc6KoLMT4Dj0nTez3syLCpXDA5rrTJAFhaxcWve99L8r8pLkzllMZuqns/wCz5rE1MQHCgrlUjLn33zAi4X8u617nlO5vGJjEzna8Wedyu6e8V4N495WTmNFeNeEPeK0EmK8KcwCY+aCTCmiiihFnNGLyOOIDtYggi4IsRzB3iee7e2Y+GY5LtSY6X1Uf0sDx+s9CtI6tNXUq4DKdCDqDMuvHydF+Y8kZQ35bKeXDy5SP3B/iKr539AJ2u0fY5GN6L5P6Xuy+TDUed5i1PZbFDcqN/a4/8rTW3qnJhfFZCZB+VS55sLL/AMf1kyFibsf2mons5iz/AAIvUuv2JkuL2FVoUy7sri6hlW/wjXXNpxsN3GXcOvG3UrJZx9/OAakmWnTcEBircA1ip6E2uPGVXpvfKVN77rd38RK0c1IKgsbKCSeA1hrhwPztb+lbFvXcPnLSPplRcoPHifE7z9JQqdFU1azPwG9Qf/I/KSJTLHM/z+8elS4/MxquLVdALnTwHKwgWywQXPkOJ8fqfTnKyI9Z8qKWJ4D6k7gOp0mhs7YFasQzgoh1uw+M+CHd52852GBwCUVyotuZ3sx5seMlycc+WY+O9UNgbGXDqWOU1G/Mw4Cw+BSeGl+F/KbAaKNObzZZW96cmNmgtGEMizRZo1ooCzRXjERoU+aPeAI5MByYxMFjBzQDvFAzRpoWQYQgCPMgjBMa8eDQCscLCiAg0cLGekGBVgCCCCDuIO8GEI94J2rgNuezL0yXpgum/TVl6MN5HUecwjiGtlJJA66T1smUsTgKTm700Y8yoJ9d8sunpx+o7ayjzWlWQb1seNrW/b5ydMSCcqi5O4DVvIftO9TYuGH/AGKfmoP1l6hRRBZEVRyVQv0l6lvPj7Rw2G2RiatvgKjm/wAAH+Nr+gnSbJ9n0osHb43toxFgv9g59T8pswSZLlXLLlyy/goOaMTGkch3jEwYrQHvEI0YwDJjXgRAwDIgxiY2aA5jExEwCYDkxoN4iYDxQbxQLYjtFFEAQ4opYHEIRRSqRiiimQxgNFFAUeKKGTwTFFChMYxRQEIUUUENGaKKA0UUULDGNFFItDBMUUrJoxiigKKKKFf/2Q==",
      category : "Women's Wear"
    }
  ]


  AddProduct(id : number, name : string, price : number, description : string, image : string, category : string){
    this.AllProducts.push({
      id : id,
      name : name,
      price : price,
      description : description,
      image : image,
      category : category
    })
  }


  constructor() { }
}
