let questionsArray = [
        {
          question: "#1. What's this?",
          answer: ["lettuce"],
          image: "https://i.postimg.cc/ZYwVzc6t/image-2025-05-07-210118794.png",
          feedbackImage:
            "https://i.postimg.cc/N0vxkPvT/image-2025-05-07-210211060.png",
        },
        {
          question: "#2. What's this?",
          answer: ["lettuce"],
          image: "https://i.postimg.cc/x1fmjDQ6/image-2025-05-07-211843827.png",
          feedbackImage:
            "https://i.postimg.cc/vZ0VcqHb/image-2025-05-07-211940039.png",
        },
        {
          question: "#3. What's this?",
          answer: ["cheese"],
          image: "https://i.postimg.cc/SK5YGnMP/image-2025-05-07-212050885.png",
          feedbackImage:
            "https://i.postimg.cc/zBgb2qwG/image-2025-05-07-212115211.png",
        },
        {
          question: "#4. What's this?",
          answer: [
            "the concept of the color blue",
            "blue",
            "concept of the color blue",
            "concept of blue",
            "the concept of blue",
          ],
          image: "https://i.postimg.cc/fy73Z5r4/image-2025-05-07-212228619.png",
          feedbackImage:
            "https://i.postimg.cc/QNcKpxx6/image-2025-05-07-212254297.png",
        },
        {
          question:
            "#5. This landmass is the largest pile of garbage in the world and is located in the Atlantic Ocean",
          answer: ["great britain", "uk", "the uk", "united kingdom"],
          image: "",
          feedbackImage:
            "https://i.postimg.cc/bwV9KNnx/image-2025-05-07-213857100.png",
        },
        {
          question: "#6. What's this?",
          answer: ["cheese"],
          image: "https://i.postimg.cc/13FzZvnv/image-2025-05-07-214411496.png",
          feedbackImage:
            "https://i.postimg.cc/DzdySmcs/image-2025-05-07-214448845.png",
        },
        {
          question: "#7. What's this?",
          answer: ["spinach"],
          image: "https://i.postimg.cc/x879wm0r/image-2025-05-07-214604298.png",
          feedbackImage:
            "https://i.postimg.cc/RCbC6kwP/image-2025-05-07-214709003.png",
        },
        {
          question: "#8. What's this?",
          answer: ["red lettuce"],
          image: "https://i.postimg.cc/Yq5p8QnY/image-2025-05-07-214753670.png",
          feedbackImage:
            "https://i.postimg.cc/TP9fRFRJ/image-2025-05-07-214848136.png",
        },
        {
          question:
            "#9. This landmass is the largest pile of garbage in the world and is located in the Pacific Ocean",
          answer: ["great pacific garbage patch", "gpgp", "australia"],
          feedbackImage:
            "https://i.postimg.cc/bwV9KNnx/image-2025-05-07-213857100.png",
        },
        {
          question: "#10. What's this?",
          answer: ["castle", "a castle", "the castle"],
          image: "https://i.postimg.cc/13K7jQRP/image-2025-05-07-222522503.png",
          feedbackImage:
            "https://i.postimg.cc/tgSS9NVM/image-2025-05-07-222555230.png",
        },
        {
          question: "#11. What's this?",
          answer: ["digiorno"],
          image: "https://i.postimg.cc/y8J1Lqzj/unnamed.png",
          feedbackImage: "https://i.postimg.cc/NFfYTS41/unnamed-1.png",
          hintImage: "https://i.postimg.cc/bNqwbpH2/image.png",
        },
        {
          question: "#12. Where's Waldo? (Click the image)",
          image: "https://i.postimg.cc/mDVk0Qpy/unnamed.jpg",
          answer: "click",
          feedbackImage:
            "https://i.postimg.cc/3xM8fSJH/Screenshot-2025-05-08-9-04-23-AM.png",
          type: "click",
          correctAnswer: "click on Waldo's location",
          waldoX: 40,
          waldoY: 220,
        },
        {
          question: "#13. What's this?",
          answer: ["lettuce"],
          image: "https://i.postimg.cc/D0t3gJjn/unnamed-1.png",
          feedbackImage: "https://i.postimg.cc/Wbkv48z3/unnamed.png",
        },
        {
          question: "#14. What's this?",
          answer: [
            "lettuce now with vertical rotation",
            "vertical rotation lettuce",
            "vertical lettuce",
            "vertically rotating lettuce",
            "lettuce",
            "rotating lettuce",
          ],
          image: "https://i.postimg.cc/CLkx2Sjm/unnamed.gif",
          feedbackImage:
            "https://i.postimg.cc/pybfT97N/Vertically-Rotating-Lettuce.gif",
        },
        {
          question: "#15. What's this?",
          answer: ["cat", "a cat", "the cat"],
          image: "https://i.postimg.cc/L5zFx4rP/unnamed-2.png",
          feedbackImage: "https://i.postimg.cc/020qmQGR/unnamed-1.gif",
        },
        {
          question: "#16. What's this?",
          answer: ["mountain", "a mountain", "the mountain"],
          image: "https://i.postimg.cc/mrtx0yvB/unnamed-3.png",
          feedbackImage: "https://i.postimg.cc/90PsG87t/unnamed-4.png",
        },
        {
          question: "#17. What was the original, non-diffused image?",
          answer: ["deep fryer", "a deep fryer", "the deep fryer"],
          image: "https://i.postimg.cc/90PsG87t/unnamed-4.png",
          feedbackImage: "https://i.postimg.cc/vTyNHrN1/unnamed-5.png",
        },
        {
          question: "#18. What's this?",
          answer: ["lettuce"],
          image: "https://i.postimg.cc/QdnN9CsN/unnamed-7.png",
          feedbackImage: "https://i.postimg.cc/3wsK1qdP/unnamed-8.png",
        },
        {
          question: "#19. What are these?",
          answer: ["limes", "green lemons"],
          image: "https://i.postimg.cc/8CM8pzz0/unnamed-9.png",
          feedbackImage: "https://i.postimg.cc/Y9zJFDgN/unnamed.jpg",
        },
        {
          question: "#20. What's the measure of the angle?",
          answer: ["91", "91 degrees", "91°"],
          image: "https://i.postimg.cc/J7jZBwQ3/image-2025-05-08-232917115.png",
          feedbackImage:
            "https://i.postimg.cc/J7jZBwQ3/image-2025-05-08-232917115.png",
        },
        {
          question: "#21. Whats does the equation -|52|/4 equal to?",
          answer: ["-13"],
          image: "",
          feedbackImage: "https://i.postimg.cc/hGHQfMz3/unnamed.gif",
        },
        {
          question: "#22. What's this?",
          answer: ["lettuce"],
          image: "https://i.postimg.cc/9M5zWMK6/image-2025-05-08-233321370.png",
          feedbackImage:
            "https://i.postimg.cc/wxk3p9Vr/image-2025-05-08-233422795.png",
        },
        {
          question: "What question [number] is this?",
          answer: ["23"],
          image: "",
          feedbackImage: "https://i.postimg.cc/J02kGpYb/23line.webp",
        },
        {
          question: "#24. How many lettuce questions have there been so far?",
          answer: ["7"],
          image: "",
          feedbackImage: "https://i.postimg.cc/cL8wzjsd/unnamed-1.gif",
        },
        {
          question:
            "#25. What is the subject in the given sentence: Brady slept through his Geometry class.",
          answer: ["brady", "geometry"],
          image: "",
          feedbackImage:
            "https://i.postimg.cc/bwV9KNnx/image-2025-05-07-213857100.png",
        },
        {
          question: "#26. How many degrees is it?",
          answer: ["72"],
          image: "https://i.postimg.cc/Z5Q8wdXv/unnamed-2.png",
          feedbackImage:
            "https://i.postimg.cc/yxgGQZTf/Screenshot-2025-05-09-10-50-33-AM.png",
        },
        {
          question: "#27. What's this?",
          answer: ["pineapple"],
          image: "https://i.postimg.cc/bNbydDjH/image.png",
          feedbackImage: "https://i.postimg.cc/xdBpkCQM/unnamed-4.png",
        },
        {
          question:
            "#28. Bill has 47 Chocolate bars. He eats 24. What does he have now?",
          answer: ["23 chocolate bars", "23 bars", "23 chocolates", "23"],
          image: "",
          feedbackImage: "",
        },
        {
          question: "#29. How many degrees are there?",
          answer: [
            "80",
            "81",
            "82",
            "83",
            "84",
            "85",
            "86",
            "87",
            "88",
            "89",
            "90",
          ],
          image: "https://i.postimg.cc/CMcDJ2Z6/unnamed-7.png",
          feedbackImage:
            "https://i.postimg.cc/sXk20prx/Screenshot-2025-05-09-11-01-18-AM.png",
        },
        {
          question: "#30. What's this?",
          answer: ["galaxy", "a galaxy", "the galaxy"],
          image: "https://i.postimg.cc/MG4ZvyX5/unnamed-5.png",
          feedbackImage: "https://i.postimg.cc/sDcVpFvv/unnamed-6.png",
        },
        {
          question: "#31. 3^5 = ? (what does 3 to the power of 5 equal)",
          answer: ["243"],
          image: "",
          feedbackImage: "https://i.postimg.cc/1thtvGPt/unnamed-2.gif",
        },
        {
          question:
            "#32. Pete has 48 Chocolate bars. He gains 37 more from his aunt. ⅕ of the total chocolate bars are 2-packs. Setting the 2-packs aside and counting each 2-pack as 2 separate chocolate bars, how many total chocolate bars does Pete have?",
          answer: ["102", "102 chocolate bars", "102 bars", "102 chocolates"],
          image: "",
          feedbackImage:
            "https://i.postimg.cc/m2HT5cX1/Screenshot-2025-05-09-11-09-30-AM.png",
        },
        {
          question: "#33. How many capitals are in this sentence?",
          answer: ["6", "6 capitals", "6 capitols"],
          image:
            "https://i.postimg.cc/PfBCJn0Z/Screenshot-2025-05-09-11-11-25-AM.png",
          feedbackImage:
            "https://i.postimg.cc/8cywdPW1/Screenshot-2025-05-09-11-12-00-AM.png",
        },
        {
          question: "#34. What's This?",
          answer: ["meadow", "a meadow", "the meadow"],
          image: "https://i.postimg.cc/xdRmNpLQ/image.png",
          feedbackImage: "https://i.postimg.cc/3R0Df8P8/image.png",
        },
        {
          question:
            "Read the passage below. This passage will be used for questions #35-39. #35. How many meters does a person have to run? (PER LAP)",
          answer: ["20", "20 meters"],
          image: "https://i.postimg.cc/j5fBxfGG/image.png",
          feedbackImage: "https://i.postimg.cc/pLd794wQ/unnamed-3.gif",
        },
        {
          question:
            "#36. What is the maximum amount of laps that the FitnessGram Pacer Test allows a person to run?",
          answer: ["247", "247 laps"],
          image: "",
          feedbackImage: "https://i.postimg.cc/XJvXtVmG/unnamed-4.gif",
        },
        {
          question: "#37. What's this?",
          answer: ["fish", "a fish", "the fish"],
          image: "https://i.postimg.cc/JhH0z4g3/image.png",
          feedbackImage: "https://i.postimg.cc/N0XGwC9p/image.png",
        },
        {
          question: "#38. What is the median of this set of numbers?",
          answer: ["7", "seven"],
          image: "https://i.postimg.cc/cJfWzK2z/image.png",
          feedbackImage: "https://i.postimg.cc/hvZRmVQX/unnamed-1.gif",
        },
        {
          question:
            "#39. How many times does the letter “e” appear in the given passage? (the one given for questions 34-38)",
          answer: ["58", "fifty-eight", "fifty eight"],
          image: "https://i.postimg.cc/44W1cWy8/image.png",
          feedbackImage: "https://i.postimg.cc/rynBQCzm/unnamed-2.gif",
        },
        {
          question: "#40. What is the largest prime number between 1 and 1000?",
          answer: ["997"],
          image: "",
          feedbackImage: "https://i.postimg.cc/J05v3ZyN/unnamed-3.gif",
        },
        {
          question: "#41. What's this?",
          answer: ["lettuce"],
          image: "https://i.postimg.cc/bY9BB0Jb/image.png",
          feedbackImage: "https://i.postimg.cc/wTxG8tyr/image.png",
        },
        {
          question:
            "#42. How many line breaks were on the question slide that asked how many times the letter “E” appeared in the passage?",
          answer: ["3", "3 lines", "3 line breaks"],
          image: "",
          feedbackImage: "https://i.postimg.cc/6qPRm1Gt/unnamed-4.gif",
        },
        {
          question: "#43. What's this?",
          answer: [
            "the concept of the color green",
            "green",
            "concept of the color green",
            "concept of green",
            "the concept of green",
          ],
          image: "https://i.postimg.cc/9F4y7VvM/image.png",
          feedbackImage:
            "https://i.postimg.cc/3xmpt1rQ/image-2025-05-09-235555888.png",
        },
        {
          question:
            "#44. Little John and his 2 siblings are building houses. The first sibling builds his house out of hay, and the second sibling builds his house out of wood. What does John build his house out of? (hint: this answer is brain rotted)",
          answer: [
            "galvanized square steel",
            "Eco-friendly wood veneers",
            "Screws borrowed from aunt",
            "screws",
            "veneers",
            "steel",
          ],
          image: "",
          feedbackImage: "",
        },
        {
          question:
            "#45. First proposed in 1962 by Martin K. Speckter, this unconventional punctuation mark combined the functions of the exclamation mark and the question mark. What is it called?",
          answer: ["interrobang", "‽", "the interrobang"],
          image: "",
          feedbackImage: "",
        },
        {
          question:
            "#46. Steve has 49 Chocolate bars. He gains 41 more from his aunt. ⅕ of the total chocolate bars are 2-packs. Counting the 2-packs as 2 separate chocolate bars, how many chocolate bars does Dave have?",
          answer: [
            "not enough info",
            "Dave",
            "idk",
            "i don't know",
            "we don't know",
            "unknown",
            "not enough information",
            "nan",
            "nei"
          ],
          image: "",
          feedbackImage: "https://i.postimg.cc/zv4WHbyY/image.png",
        },
        {
          question: "#47. What's this?",
          answer: ["beans"],
          image: "https://i.postimg.cc/Fz1mkzRs/image.png",
          feedbackImage: "https://i.postimg.cc/3rb35XSy/image.png",
        },
        {
          question:
            "#48. How many different mainline shrek movies is a person able to watch? (AS OF 5/6/25)",
          answer: ["4", "four"],
          image: "",
          feedbackImage: "https://i.postimg.cc/NFcRGDxX/unnamed-5.gif",
        },
        {
          question:
            "#49. What is the ONE question (excluding extra credit) to not be numbered?",
          answer: [
            "23",
            "#23",
            "number 23",
            "number twenty-three",
            "number twenty three",
            "twenty-three",
            "twenty three",
          ],
          image: "",
          feedbackImage: "https://i.postimg.cc/L6vjRzgq/image.png",
        },
        {
          question: "#50. What's this? (phrase)",
          answer: ["top secret"],
          image: "https://i.postimg.cc/TwJx3Cj1/image.png",
          feedbackImage: "",
        },
        {
          question: "#51: What's This?",
          answer: ["lettuce"],
          image: "https://i.postimg.cc/x8sSK84S/image.png",
          feedbackImage: "https://i.postimg.cc/KcQFXpvs/image.png",
        },
        {
          question: "#52: What's This? (phrase)",
          answer: ["running out of time"],
          image: "https://i.postimg.cc/JzKrWbCM/image.png",
          feedbackImage: "",
        },
        {
          question: "#53. What's this? (phrase)",
          answer: ["forget it", "4get it"],
          image: "https://i.postimg.cc/qRr95Jpt/image.png",
          feedbackImage: "",
        },
        {
          question: "#54. What's this? (object)",
          answer: ["sandbox", "sand box"],
          image: "https://i.postimg.cc/7Z3vMJkv/image.png",
          feedbackImage: "",
        },
        {
          question: "#55. What's this?",
          answer: ["orange", "an orange"],
          image: "https://i.postimg.cc/DZYRyqqG/image.png",
          feedbackImage: "https://i.postimg.cc/D09D1npy/image.png",
        },
        {
          question: "#56. What's this? (object)",
          answer: ["Pot8os", "potatoes", "potato"],
          image: "https://i.postimg.cc/TPkTg5Vd/image.png",
          feedbackImage: "",
        },
        {
          question: "#57. What's this? (phrase)",
          answer: ["good after noon", "good afternoon"],
          image: "https://i.postimg.cc/3wP9Nnk2/image.png",
          feedbackImage: "",
        },
        {
          question: "#58. What's this? (object)",
          answer: ["pi-rate ship", "pi rate ship", "pirate ship"],
          image: "https://i.postimg.cc/KYgr6B0j/image.png",
          feedbackImage: "",
        },
        {
          question: "#59. What's This? (phrase)",
          answer: ["all in a days work"],
          image: "https://i.postimg.cc/vmJK6Q4q/image.png",
          feedbackImage: "",
        },
        {
          question: "#60. What's This?",
          answer: ["lettuce"],
          image: "https://i.postimg.cc/x8sSK84S/image.png",
          feedbackImage: "https://i.postimg.cc/KcQFXpvs/image.png",
        },
        {
          question: "#61. What's This? (phrase)",
          answer: [
            "U R full of below knee",
            "you are full of bologna",
            "you are full of below knee",
            "u r full of bologna",
            "ur full of below knee",
            "ur full of bologna",
            "you're full of bologna",
            "you're full of below knee",
            "youre full of bologna",
            "youre full of below knee",
          ],
          image: "https://i.postimg.cc/L5R0NNBj/image.png",
          feedbackImage: "",
        },
        {
          question: "#62. What's this? (object)",
          answer: ["ten issues", "tennis shoes"],
          image: "https://i.postimg.cc/43V5qp3P/image.png",
          feedbackImage: "",
        },
        {
          question: "BONUS: 63. What's this?",
          answer: ["sai", "Ψ", "psi"],
          image: "https://i.postimg.cc/13cXdtQ6/image.png",
          feedbackImage: "",
        },
        {
          question: "#64. What color is this?",
          answer: ["blue"],
          image: "https://i.postimg.cc/d3rWvNrS/image.png",
          feedbackImage: "https://i.postimg.cc/d3rWvNrS/image.png",
        },
        {
          question: "#65. What color is this?",
          answer: ["purple"],
          image: "https://i.postimg.cc/G3KKPDzD/image.png",
          feedbackImage: "https://i.postimg.cc/G3KKPDzD/image.png",
        },
        {
          question: "#66. What color is this?",
          answer: ["chartreuse"],
          image: "https://i.postimg.cc/nzH7MdyP/image.png",
          feedbackImage: "https://i.postimg.cc/nzH7MdyP/image.png",
        },
        {
          question: "#67. What color is this?",
          answer: [
            "ultramarine",
            "cobalt",
            "sapphire",
            "navy blue",
            "anti-yellow",
            "anti yellow",
            "lapiz lazuli",
            "lapiz",
            "lapis",
            "blueberry",
          ],
          image: "https://i.postimg.cc/d3rWvNrS/image.png",
          feedbackImage: "https://i.postimg.cc/d3rWvNrS/image.png",
        },
        {
          question: "#68. What color is this?",
          answer: [
            "amethyst",
            "iris",
            "orchid",
            "lilac",
            "Anti-Chartreuse",
            "Anti Chartreuse",
            "The source of an Evil Wizard's power so he can cast super spooky & evil spells on the local townspeople",
            "Grape",
          ],
          image: "https://i.postimg.cc/G3KKPDzD/image.png",
          feedbackImage: "https://i.postimg.cc/G3KKPDzD/image.png",
        },
        {
          question: "#69. What color is this?",
          answer: ["chartreuse"],
          image: "https://i.postimg.cc/nzH7MdyP/image.png",
          feedbackImage: "https://i.postimg.cc/nzH7MdyP/image.png",
        },
        {
          question: "#70. What color is an orange?",
          answer: ["tangerine"],
          image: "https://i.postimg.cc/d1vX3Ytc/image.png",
          feedbackImage: "https://i.postimg.cc/9QRsNbNK/image.png",
        },
        {
          question: "#71. What color is this?",
          answer: [
            "scarlet",
            "carmine",
            "vermillion",
            "anti-cyan",
            "anti cyan",
            "ruby",
            "pomegranate",
          ],
          image: "https://i.postimg.cc/L6qyHXBZ/image.png",
          feedbackImage: "https://i.postimg.cc/L6qyHXBZ/image.png",
        },
        {
          question: "#72. What color is this?",
          answer: [
            "amber",
            "flaxen",
            "yellowish-chartreuse",
            "yellowish chartreuse",
            "urine",
            "ochre",
            "canary",
          ],
          image: "https://i.postimg.cc/W4789Jjx/image.png",
          feedbackImage: "https://i.postimg.cc/W4789Jjx/image.png",
        },
        {
          question: "#73. What's this?",
          answer: ["lettuce"],
          image: "https://i.postimg.cc/ZRR8V7wy/image.png",
          feedbackImage: "https://i.postimg.cc/ZYXQvpqL/image.png",
        },
        {
          question: "#74. What's this?",
          answer: [
            "marigold",
            "tangerine",
            "sandstone",
            "marmalade",
            "apricot",
            "old bay seasoning",
            "anti-light-blue",
          ],
          image: "https://i.postimg.cc/SKXqH69n/image.png",
          feedbackImage: "https://i.postimg.cc/SKXqH69n/image.png",
        },
        {
          question: "#75. What color is this?",
          answer: ["Fuchsia"],
          image: "https://i.postimg.cc/TPhSW9nC/image.png",
          feedbackImage: "https://i.postimg.cc/TPhSW9nC/image.png",
        },
        {
          question: "#76. What color is this?",
          answer: ["blue"],
          image: "https://i.postimg.cc/W4789Jjx/image.png",
          feedbackImage: "https://i.postimg.cc/d3rWvNrS/image.png",
        },
        {
          question: "#77. What color is this?",
          answer: ["red"],
          image: "https://i.postimg.cc/7LnXH0DV/image.png",
          feedbackImage: "https://i.postimg.cc/L6qyHXBZ/image.png",
        },
        {
          question: "#78. What color is this?",
          answer: ["orange"],
          image: "https://i.postimg.cc/gc1h7s6Z/image.png",
          feedbackImage: "https://i.postimg.cc/SKXqH69n/image.png",
        },
        {
          question: "#80. What color is this?",
          answer: ["bluish chartreuse", "bluish-chartreuse", "green"],
          image: "https://i.postimg.cc/VLDJ8FJg/image.png",
          feedbackImage: "https://i.postimg.cc/cHRJ57qQ/image.png",
        },
        {
          question: "#81. What does this say? (phrase)\n(hint: color matters)",
          answer: [
            "red e for anything",
            "ready for anything",
            "red-e for anything",
            "red e 4 anything",
            "red-e 4 anything",
          ],
          image: "https://i.postimg.cc/3JspmXy7/image.png",
          feedbackImage: "https://i.postimg.cc/59PD40X8/image.png",
        },
        {
          question: "#82. What color is this?",
          answer: ["chartreuse"],
          image: "https://i.postimg.cc/G3KKPDzD/image.png",
          feedbackImage: "https://i.postimg.cc/nzH7MdyP/image.png",
        },
        {
          question: "#83. What color is this?",
          answer: ["magenta"],
          image: "https://i.postimg.cc/cHRJ57qQ/image.png",
          feedbackImage: "https://i.postimg.cc/VLDJ8FJg/image.png",
        },
        {
          question: "#84. What color is this?",
          answer: ["yellow"],
          image: "https://i.postimg.cc/d3rWvNrS/image.png",
          feedbackImage: "https://i.postimg.cc/W4789Jjx/image.png",
        },
        {
          question: "#85. What's this?",
          answer: ["celery"],
          image: "https://i.postimg.cc/0jd4qkKH/image.png",
          feedbackImage: "https://i.postimg.cc/Yq47TVpN/image.png",
        },
        {
          question: "#86. What country is this?",
          answer: ["usa", "united states", "united states of america"],
          image: "https://i.postimg.cc/y6ZFWJb9/image.png",
          feedbackImage: "https://i.postimg.cc/fT7mjGZR/image.png",
        },
        {
          question: "#87. What state is this?",
          answer: ["colorado"],
          image: "https://i.postimg.cc/G38Z2QRQ/image.png",
          feedbackImage: "https://i.postimg.cc/pTgc8wvB/image.png",
        },
        {
          question: "#88. What's this?",
          answer: ["tomato", "tomatoes"],
          image: "https://i.postimg.cc/VkD74r1v/image.png",
          feedbackImage: "https://i.postimg.cc/TPBJHnsd/image.png",
        },
        {
          question: "#89. What's this?",
          answer: ["lettuce"],
          image: "https://i.postimg.cc/vZg12Cwn/image.png",
          feedbackImage: "https://i.postimg.cc/T112LWRb/image.png",
        },
        {
          question: "#90. What country's flag is this?",
          answer: ["bangladesh"],
          image: "https://i.postimg.cc/63g6ZpT1/image.png",
          feedbackImage: "https://i.postimg.cc/QNKd31yL/image.png",
        },
        {
          question: "#91. What country is this?",
          answer: ["malta"],
          image: "https://i.postimg.cc/xCKpvsdD/image.png",
          feedbackImage: "https://i.postimg.cc/kXMYSv3z/image.png",
        },
        {
          question: "#92. What country's flag is this?",
          answer: ["canada"],
          image: "https://i.postimg.cc/0QdZMbt9/image.png",
          feedbackImage: "https://i.postimg.cc/Dyz50f1K/image.png",
        },
        {
          question: "#93. What country is this?",
          answer: [
            "stupid britain",
            "stupid uk",
            "stupid united kingdom",
            "pile of garbage located in the atlantic ocean",
          ],
          image: "https://i.postimg.cc/L6qfGJzh/image.png",
          feedbackImage: "https://i.postimg.cc/j5dnc2xx/image.png",
        },
        {
          question: "#94. What's this?",
          answer: ["lettuce"],
          image: "https://i.postimg.cc/L81W46M8/image.png",
          feedbackImage: "https://i.postimg.cc/rm8Z91RD/image.png",
        },
        {
          question: "#95. What country WAS #94?",
          answer: ["jamaica"],
          image: "https://i.postimg.cc/fyVKHBzR/image.png",
          feedbackImage: "https://i.postimg.cc/pdPBN2W7/image.png",
        },
        {
          question: "#96. What country is this?",
          answer: ["chile"],
          image: "https://i.postimg.cc/Y2TV5mJs/image.png",
          feedbackImage: "https://i.postimg.cc/ZqYD8PdC/image.png",
        },
        {
          question: "#97. What country is this?",
          answer: ["stupid france"],
          image: "https://i.postimg.cc/3JMSSQGM/image.png",
          feedbackImage: "https://i.postimg.cc/CLHNcBYD/image.png",
        },
        {
          question: "#98. What's this?",
          answer: ["apple"],
          image: "https://i.postimg.cc/R0nJbyf8/image.png",
          feedbackImage: "https://i.postimg.cc/KvvkyRBt/image.png",
        },
        {
          question: "#99. What state is this?",
          answer: ["stupid michigan"],
          image: "https://i.postimg.cc/1tqTXmFH/image.png",
          feedbackImage: "https://i.postimg.cc/qRVwm8ts/image.png",
        },
        {
          question: "#100. What country's flag is this?",
          answer: ["usa", "united states", "united states of america"],
          image: "https://i.postimg.cc/0QdZMbt9/image.png",
          feedbackImage: "https://i.postimg.cc/Jz7zkgPJ/image.png",
        },
        {
          question: "#101. What country flag is this?",
          answer: ["russia"],
          image: "https://i.postimg.cc/hjcyDLSS/image.png",
          feedbackImage: "https://i.postimg.cc/50s3fD73/image.png",
        },
        {
          question: "#102. What country flag is this?",
          answer: ["chad"],
          image: "https://i.postimg.cc/Wpkf3cGS/image.png",
          feedbackImage: "https://i.postimg.cc/cH8Trfn6/image.png",
        },
        {
          question: "#103. What country's flag is this?",
          answer: ["spain"],
          image: "https://i.postimg.cc/vm4tN5XX/image.png",
          feedbackImage: "https://i.postimg.cc/yxymZjY6/image.png",
        },
        {
          question: "#104. What's this?",
          answer: ["chartreuse"],
          image: "https://i.postimg.cc/VN0XRmLV/image.png",
          feedbackImage: "https://i.postimg.cc/fWCSYJfb/image.png",
        },
        {
          question: "#105. What landmass is this?",
          answer: ["louisiana"],
          image: "https://i.postimg.cc/fbYJyLbD/image.png",
          feedbackImage: "https://i.postimg.cc/Kj8z0DD8/image.png",
        },
        {
          question: "#106. What flag is this?",
          answer: ["ohio"],
          image: "https://i.postimg.cc/52hDp9SH/image.png",
          feedbackImage: "https://i.postimg.cc/gjhgx81N/image.png",
        },
        {
          question: "#107. What's this?",
          answer: ["lettuce"],
          image: "https://i.postimg.cc/GhkMrPFp/image.png",
          feedbackImage: "https://i.postimg.cc/pLmpzCsW/image.png",
        },
        {
          question: "#108. What animal is this?",
          answer: ["bird"],
          image: "https://i.postimg.cc/6pPSJGk1/image.png",
          feedbackImage: "https://i.postimg.cc/6pPSJGk1/image.png",
        },
        {
          question: "#109. What animal is this?",
          answer: ["canis lupus familiaris"],
          image: "https://i.postimg.cc/W3v5TmXS/image.png",
          feedbackImage: "https://i.postimg.cc/W3v5TmXS/image.png",
        },
        {
          question: "#110. What animal is this?",
          answer: ["lion"],
          image: "https://i.postimg.cc/qRvCG0nF/screenshot-2.png",
          feedbackImage: "https://i.postimg.cc/ht4zncZt/screenshot-4.png",
        },
        {
          question: "#111. What animal is this?",
          answer: ["chicken"],
          image: "https://i.postimg.cc/zG9rjkhY/screenshot-5.png",
          feedbackImage: "https://i.postimg.cc/zG9rjkhY/screenshot-5.png",
        },
        {
          question: "#112. What animal is this?",
          answer: ["penguin"],
          image: "https://i.postimg.cc/bY64gTXV/screenshot-6.png",
          feedbackImage: "https://i.postimg.cc/bY64gTXV/screenshot-6.png",
        },
        {
          question: "#113. What animal is this?",
          answer: ["ruby-throated hummingbird", "ruby throated hummingbird"],
          image: "https://i.postimg.cc/YCN3nrG2/screenshot-7.png",
          feedbackImage: "https://i.postimg.cc/YCN3nrG2/screenshot-7.png",
        },
        {
          question: "#114. What animal is this?",
          answer: ["parrot"],
          image: "https://i.postimg.cc/tTsvM0Gr/screenshot-8.png",
          feedbackImage: "https://i.postimg.cc/7Y3scMjy/screenshot-9.png",
        },
        {
          question: "#115. What animal is this?",
          answer: ["spider"],
          image: "https://i.postimg.cc/GtrYsYKk/screenshot-10.png",
          feedbackImage: "https://i.postimg.cc/GtrYsYKk/screenshot-10.png",
        },
        {
          question: "#116. What animal is this?",
          answer: ["frog"],
          image: "https://i.postimg.cc/xTQh01rH/screenshot-13.png",
          feedbackImage: "https://i.postimg.cc/xTQh01rH/screenshot-13.png",
        },
        {
          question:
            "#116. What animal has the scientific name paracanthurus hepatus?",
          answer: ["palette surgeonfish", "blue tang", "dory"],
          image: "",
          feedbackImage: "https://i.postimg.cc/k4f6B514/screenshot-15.png",
        },
        {
          question: "#117. What animal is this?",
          answer: ["cow"],
          image: "https://i.postimg.cc/pTXybHWt/screenshot-16.png",
          feedbackImage: "https://i.postimg.cc/pTXybHWt/screenshot-16.png",
        },
        {
          question: "#118. What animal is this?",
          answer: ["ferret"],
          image: "https://i.postimg.cc/4dqKz0Gk/screenshot-17.png",
          feedbackImage: "https://i.postimg.cc/4dqKz0Gk/screenshot-17.png",
        },
        {
          question: "#119. What animal is this?",
          answer: ["klein's butterflyfish", "kleins butterflyfish"],
          image: "https://i.postimg.cc/SRbSQbqs/screenshot-18.png",
          feedbackImage: "https://i.postimg.cc/SRbSQbqs/screenshot-18.png",
        },
        {
          question: "#120. What animal is this?",
          answer: ["pangolin"],
          image: "https://i.postimg.cc/ncZF6x0S/screenshot-19.png",
          feedbackImage: "https://i.postimg.cc/ncZF6x0S/screenshot-19.png",
        },
        {
          question: "#121. What animals are these?",
          answer: ["honeypot ants", "honey pot ants"],
          image: "https://i.postimg.cc/kGCC3NFR/screenshot-20.png",
          feedbackImage: "https://i.postimg.cc/kGCC3NFR/screenshot-20.png",
        },
        {
          question: "#123. What animals are these?",
          answer: ["honeypot ants", "honey pot ants"],
          image: "https://i.postimg.cc/8P1GZHzq/screenshot-21.png",
          feedbackImage: "https://i.postimg.cc/kGCC3NFR/screenshot-20.png",
        },
        {
          question: "#124. What animals are these?",
          answer: ["neocaridine shrimp"],
          image: "https://i.postimg.cc/W1BfHN7h/screenshot-23.png",
          feedbackImage: "https://i.postimg.cc/W1BfHN7h/screenshot-23.png",
        },
        {
          question: "#125. What animal is this?",
          answer: ["toucan"],
          image: "https://i.postimg.cc/c1FkNMmq/screenshot-24.png",
          feedbackImage: "https://i.postimg.cc/c1FkNMmq/screenshot-24.png",
        },
        {
          question: "#126. Find the Queen Bee! (Click the image)",
          image: "https://i.postimg.cc/m2QwgY32/image.png",
          answer: "click",
          feedbackImage: "https://i.postimg.cc/g00qs1Cn/screenshot-25.png",
          type: "click",
          correctAnswer: "click on Waldo's location",
          waldoX: 285,
          waldoY: 128,
        },
        {
          question: "#127. What animal is this?",
          answer: ["toucan"],
          image: "https://i.postimg.cc/c1FkNMmq/screenshot-24.png",
          feedbackImage: "https://i.postimg.cc/c1FkNMmq/screenshot-24.png",
        },
        {
          question: "#128. What animal is this?",
          answer: ["hare"],
          image: "https://i.postimg.cc/7LYh2kpQ/screenshot-26.png",
          feedbackImage: "https://i.postimg.cc/7LYh2kpQ/screenshot-26.png",
        },
        {
          question: "#129. What animal is this?",
          answer: ["crocodile"],
          image: "https://i.postimg.cc/dtjJmfmM/screenshot-27.png",
          feedbackImage: "https://i.postimg.cc/dtjJmfmM/screenshot-27.png",
        },
        {
          question: "#129. What type of coral is this?",
          answer: ["zoanthid"],
          image: "https://i.postimg.cc/BbGG25jQ/screenshot-28.png",
          feedbackImage: "https://i.postimg.cc/BbGG25jQ/screenshot-28.png",
        }];

let startButton = document.getElementById("startButton");
let started = false;
let tellme = document.getElementById("tellme")
let question = document.getElementById("question")
let questionImage = document.getElementById("questionImage")
let questionAnswer = document.getElementById("questionAnswer")
let feedbackImage = document.getElementById("feedbackImage")
let answerButton = document.getElementById("answerButton")
let answerField = document.getElementById("answerField")
let nextButton = document.getElementById("nextButton")
let scoreP = document.getElementById("scoreP")
let timeWarning = document.getElementById("timeWarning")
let ableToAnswer = true
let ableToContinue = false
let inbetween = false
let correct = false
let enterPressed = 0
let currentQuestion = 0
let attempts = 0
let score = 0


function startQuiz(){
    started = true;
    loadQuiz()
}

function loadQuiz(){
    if (started === true){
        startButton.style.display = "none";
        question.style.display = "block";
        questionImage.style.display = "block";
        questionAnswer.style.display = "none";
        feedbackImage.style.display = "none";
        answerField.style.display = "block";
        answerButton.style.display = "block";
        question.innerHTML = questionsArray[currentQuestion].question
        questionImage.src = questionsArray[currentQuestion].image
        questionAnswer.innerHTML = questionsArray[currentQuestion].answer
        feedbackImage.src = questionsArray[currentQuestion].feedbackImage
    }
}

function submitAnswer(){
  let userAnswer = answerField.value.toLowerCase()

  // IF ANSWER IS CORRECT
  if (ableToAnswer === true){
    if (questionsArray[currentQuestion].answer.includes(userAnswer)){
      correct = true;
      inbetween = true;
      ableToAnswer = false;
      feedbackImage.style.display = "block";
      questionAnswer.style.display = "block";
      questionAnswer.innerHTML = `CORRECT! The answer was ${questionsArray[currentQuestion].answer[0]}`
      score++
    } else { // IF ANSWER IS INCORRECT
      attempts++


      if (attempts >= 2){
        questionAnswer.innerHTML = `Incorrect. The answer was ${questionsArray[currentQuestion].answer[0]}`
        ableToAnswer = true;
        inbetween = true;
        } else {
        questionAnswer.style.display = "block";
        questionAnswer.innerHTML = "Incorrect, You have ONE attempt remaining"
        }
      }


  }
}

function nextQuestion(){
  if (inbetween === true){
    ableToContinue = true
    inbetween = false
    goToNextIndex()
  }
}


function goToNextIndex(){
    if (ableToContinue === true){
      if (inbetween === false){
        feedbackImage.style.display = "none";
        currentQuestion++ 
        attempts = 0
        question.innerHTML = questionsArray[currentQuestion].question
        questionImage.src = questionsArray[currentQuestion].image
        questionAnswer.style.display = "none";
        scoreP.innerHTML = `Your score is: ${score}`
        correct = false
        ableToContinue = false
        ableToAnswer = true
      }
    }
}