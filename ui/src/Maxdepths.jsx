var maxdepths = {
    "1/2-1":3574,
    "1/2-2":3434,
    "1/3-1":4877,
    "1/3-2":4297,
    "1/3-3":4876,
    "1/3-4":3198,
    "1/3-5":4850,
    "1/3-6":3586,
    "1/3-7":3345,
    "1/3-8":5201,
    "1/3-9 S":4516,
    "1/3-10":3288,
    "1/3-10 A":3632,
    "1/3-11":3595,
    "1/3-12 S":5931,
    "1/5-1":491,
    "1/5-2":4287,
    "1/5-3 S":1565,
    "1/5-4 S":3090,
    "1/5-5":5942,
    "1/6-1":4822,
    "1/6-2":3383,
    "1/6-3":3343,
    "1/6-4":3810,
    "1/6-5":1854,
    "1/6-6":5565,
    "1/6-7":4995,
    "1/9-1":3703,
    "1/9-1 R":3704,
    "1/9-2":3459,
    "1/9-3":2771,
    "1/9-3 R":4570,
    "1/9-4":3710,
    "1/9-4 R":3710,
    "1/9-5":3450,
    "1/9-6 S":3880,
    "1/9-6 SR":3879,
    "1/9-7":4986,
    "2/1-1":4178,
    "2/1-2":3555.5,
    "2/1-3":4297,
    "2/1-4":4525,
    "2/1-5":4454,
    "2/1-6":4588,
    "2/1-7":5464,
    "2/1-8":4151,
    "2/1-9":4298,
    "2/1-9 A":4379,
    "2/1-10":4525,
    "2/1-11":4725,
    "2/1-12":3550,
    "2/1-13 S":4435,
    "2/1-14 S":6130,
    "2/1-15":3554,
    "2/1-16 S":3891,
    "2/2-1":4003,
    "2/2-2":3127,
    "2/2-3":4100,
    "2/2-4":4020,
    "2/2-5":4082,
    "2/2-6":4105,
    "2/3-1":2934,
    "2/3-2":2297,
    "2/3-3":2973,
    "2/3-4":3386,
    "2/4-1":1662,
    "2/4-2":3305,
    "2/4-3":3431,
    "2/4-4":3424,
    "2/4-5":3320,
    "2/4-6":3411,
    "2/4-7":3494,
    "2/4-8":4075,
    "2/4-9":3752,
    "2/4-10":3418,
    "2/4-11":4281,
    "2/4-12":3383,
    "2/4-13":2518,
    "2/4-14":4734,
    "2/4-14 R":4746,
    "2/4-14 R2":4734,
    "2/4-15 S":4962,
    "2/4-15 SR":4965,
    "2/4-16":4996,
    "2/4-16 R":4973,
    "2/4-17":5258,
    "2/4-18":622,
    "2/4-18 R":5310,
    "2/4-19 B":4605,
    "2/4-20":5719,
    "2/4-21":5395,
    "2/4-21 A":5573,
    "2/4-22 S":4889,
    "2/4-23 S":5548,
    "2/5-1":3972,
    "2/5-2":3597,
    "2/5-3":3731,
    "2/5-4":3490,
    "2/5-5":3456,
    "2/5-6":4132,
    "2/5-7":4531,
    "2/5-8":3367,
    "2/5-9":5460,
    "2/5-10":4701,
    "2/5-10 A":4715,
    "2/5-11":3550,
    "2/5-12":4153,
    "2/5-13":4675,
    "2/5-14 A":0,
    "2/5-14 S":3845,
    "2/6-1":3336,
    "2/6-2":4760,
    "2/6-3":4060,
    "2/6-4 S":3617,
    "2/6-5":3260,
    "2/6-6 S":0,
    "2/7-1":4572,
    "2/7-2":3964,
    "2/7-3":4359,
    "2/7-4":3356,
    "2/7-5":3353,
    "2/7-6":3381,
    "2/7-7":3084,
    "2/7-8":3318,
    "2/7-9":4448,
    "2/7-10":3370,
    "2/7-11":3377,
    "2/7-12":1832,
    "2/7-13":3388,
    "2/7-14":3390,
    "2/7-14 R":3387,
    "2/7-15":4423,
    "2/7-16":4818,
    "2/7-17":1600,
    "2/7-18":601,
    "2/7-19":4876,
    "2/7-19 R":4873,
    "2/7-20":4509,
    "2/7-20 R":4535,
    "2/7-21 S":5038,
    "2/7-21 SR":5045,
    "2/7-22":4750,
    "2/7-23 S":4760,
    "2/7-24":5023,
    "2/7-25 S":5177,
    "2/7-26 S":4848,
    "2/7-27 S":4801,
    "2/7-28":3893,
    "2/7-29":4900,
    "2/7-30":3478,
    "2/7-31":4968.2,
    "2/8-1":2595,
    "2/8-2":3246,
    "2/8-3":4115,
    "2/8-4":2852,
    "2/8-5":3304,
    "2/8-6":2669,
    "2/8-7":2868,
    "2/8-8":2667,
    "2/8-9":2703,
    "2/8-10":2683,
    "2/8-11":2655,
    "2/8-12 S":5300,
    "2/8-13":1940,
    "2/8-14":4392,
    "2/8-15":3750,
    "2/8-16 S":3139,
    "2/8-17 A":3145,
    "2/8-17 S":2685,
    "2/8-18 S":2852,
    "2/9-1":3551,
    "2/9-2":4367,
    "2/9-3":4859,
    "2/9-4":5500,
    "2/9-5 S":3679,
    "2/10-1 S":4609,
    "2/10-2":4164,
    "2/11-1":4691,
    "2/11-2":2806,
    "2/11-3":3052,
    "2/11-3 A":3400,
    "2/11-4":2858,
    "2/11-5":2945,
    "2/11-6 S":4076,
    "2/11-6 SR":4088.3,
    "2/11-7":5042,
    "2/11-8":4584,
    "2/11-9":4406,
    "2/11-10 S":4090,
    "2/11-11":3410,
    "2/12-1":4795,
    "2/12-2 S":5757,
    "3/4-1":3107,
    "3/4-2 S":2961,
    "3/5-1":3426,
    "3/5-2":3825,
    "3/6-1":2167,
    "3/7-1":3227,
    "3/7-2":4330,
    "3/7-3":3540,
    "3/7-4":3723,
    "3/7-5":3666,
    "3/7-6":4120,
    "3/7-7":3930,
    "3/7-8 S":4188,
    "3/7-9 S":3717,
    "3/7-10 S":3511,
    "3/8-1":4070,
    "4/4-1":2012,
    "4/4-1 A":0,
    "6/3-1":3560,
    "6/3-2":4091,
    "7/1-1":2808,
    "7/1-2 S":3175,
    "7/3-1":4700,
    "7/4-1":3133,
    "7/4-2":3459,
    "7/4-3":3000,
    "7/7-1":3500,
    "7/7-2":3430,
    "7/7-3":3584,
    "7/7-4":3054,
    "7/8-1":3334,
    "7/8-2":3006,
    "7/8-3":4320,
    "7/8-4":4400,
    "7/8-5 S":4168,
    "7/8-6 S":3220,
    "7/9-1":2931,
    "7/11-1":3974,
    "7/11-2":3427,
    "7/11-3":3350,
    "7/11-4":3322,
    "7/11-5":4478,
    "7/11-6":4500,
    "7/11-7":4927,
    "7/11-7 R":4927,
    "7/11-8":4750,
    "7/11-9":4271,
    "7/11-10 S":4566,
    "7/11-10 SR":4565,
    "7/11-11 S":4679,
    "7/11-12 A":5672,
    "7/11-12 S":5420,
    "7/11-13":3800,
    "7/12-1 S":3311,
    "7/12-2":3676,
    "7/12-2 R":3676,
    "7/12-3":3710,
    "7/12-3 A":4191,
    "7/12-4":3623,
    "7/12-4 R":3623,
    "7/12-5":4440,
    "7/12-6":3700,
    "7/12-7":3855,
    "7/12-7 R":3855,
    "7/12-8":3900,
    "7/12-9":3820,
    "7/12-10":3667,
    "7/12-11":3868,
    "7/12-12 S":6079,
    "7/12-13 S":4575,
    "8/1-1":2971,
    "8/3-1":3015,
    "8/3-2":2657,
    "8/4-1":2632,
    "8/5-1":2405,
    "8/9-1":2376,
    "8/10-1":3089,
    "8/10-2":2997,
    "8/10-3":5738,
    "8/10-4 A":3639,
    "8/10-4 B":2549,
    "8/10-4 S":3071,
    "8/10-5 A":2662,
    "8/10-5 S":2925,
    "8/10-6 S":2256,
    "8/11-1":3810,
    "8/12-1":2875,
    "9/1-1 S":2533,
    "9/2-1":3756,
    "9/2-2":3550,
    "9/2-3":3424,
    "9/2-4 S":4417,
    "9/2-5":3355,
    "9/2-6 S":5205,
    "9/2-7 S":4099,
    "9/2-8 S":7584,
    "9/2-9 S":4367,
    "9/2-10":0,
    "9/2-11":2861,
    "9/3-1":1971,
    "9/3-2":3154,
    "9/4-1":2963,
    "9/4-2":3025,
    "9/4-3":2682,
    "9/4-4":2902,
    "9/4-5":5881,
    "9/8-1":2176,
    "9/10-1":2205,
    "9/11-1":2196,
    "9/12-1":2698,
    "10/4-1":2415,
    "10/5-1":1843,
    "10/7-1":1890,
    "10/8-1":2861,
    "11/5-1":1950,
    "11/9-1":1972,
    "11/10-1":2430,
    "15/2-1":4600,
    "15/3-1 S":5129,
    "15/3-2":4258,
    "15/3-2 R":4990,
    "15/3-3":5115,
    "15/3-4":4259,
    "15/3-5":4130,
    "15/3-6":2793,
    "15/3-7":4818,
    "15/3-8":4592,
    "15/3-9":4654,
    "15/3-10":990,
    "15/3-11":4014,
    "15/5-1":3775,
    "15/5-2":4322,
    "15/5-2 R":4322,
    "15/5-3":5042,
    "15/5-4":2300,
    "15/5-5":2645,
    "15/5-6":2725,
    "15/5-7":4037,
    "15/5-7 A":4199,
    "15/6-1":1679,
    "15/6-2":3131,
    "15/6-2 R":4779,
    "15/6-3":3795,
    "15/6-4":3505,
    "15/6-5":3824,
    "15/6-6":3760,
    "15/6-7":3540,
    "15/6-8 A":2480,
    "15/6-8 S":3225,
    "15/6-9 A":3690,
    "15/6-9 B":4010,
    "15/6-9 S":3940,
    "15/6-10":3700,
    "15/6-11 A":4305,
    "15/6-11 S":4042,
    "15/6-12":3930,
    "15/6-13":3577,
    "15/6-13 A":3925,
    "15/6-13 B":3773,
    "15/6-14 S":4684,
    "15/8-1":4300,
    "15/8-2":4386,
    "15/9-1":3734,
    "15/9-2":3764,
    "15/9-3":3796,
    "15/9-4":3716,
    "15/9-5":3946,
    "15/9-6":3946,
    "15/9-7":3776,
    "15/9-8":3730,
    "15/9-9":3044,
    "15/9-10":3289,
    "15/9-11":2950,
    "15/9-12":3740,
    "15/9-12 R":3740,
    "15/9-13":3280,
    "15/9-14":3563,
    "15/9-15":3200,
    "15/9-16":3120,
    "15/9-17":3120,
    "15/9-17 R":3123,
    "15/9-18":3622,
    "15/9-19 A":4131,
    "15/9-19 B":4250,
    "15/9-19 S":3580,
    "15/9-19 SR":4641,
    "15/9-19 SR2":4644,
    "15/9-20 S":3626,
    "15/9-21 S":5126,
    "15/9-22":3923,
    "15/9-23":3225,
    "15/9-24":2400,
    "15/12-1":3269,
    "15/12-2":2924,
    "15/12-3":4450,
    "15/12-4":3157,
    "15/12-5":3150,
    "15/12-6 S":3050,
    "15/12-7 S":3570,
    "15/12-8":3054,
    "15/12-8 A":2940,
    "15/12-9 S":3848,
    "15/12-10 S":3550,
    "15/12-11 S":3597,
    "15/12-12":3085,
    "15/12-13":3047,
    "15/12-13 A":2532,
    "15/12-13 B":3151,
    "15/12-14":3305,
    "15/12-15":3300,
    "15/12-16 S":2961,
    "15/12-17 A":3620,
    "15/12-17 S":3371,
    "15/12-18 A":3036,
    "15/12-18 S":3520,
    "15/12-19":3212,
    "15/12-20 S":4192,
    "15/12-21":3310,
    "15/12-21 A":3702,
    "15/12-22":3035,
    "15/12-23":3485,
    "15/12-23 A":4772,
    "15/12-24 S":3181,
    "16/1-1":3203,
    "16/1-2":2919,
    "16/1-3":3498,
    "16/1-4":2010,
    "16/1-5":2460,
    "16/1-5 A":2150,
    "16/1-6 A":2194,
    "16/1-6 S":1997,
    "16/1-7":3186,
    "16/1-8":2200,
    "16/1-8 A":0,
    "16/1-8 R":2201,
    "16/1-9":2544,
    "16/1-10":2151,
    "16/1-11":2625,
    "16/1-11 A":2595,
    "16/1-12":2055,
    "16/1-13":2303,
    "16/1-14":2550,
    "16/1-15":2150,
    "16/1-15 A":2175,
    "16/1-16":2722,
    "16/1-16 A":2897,
    "16/1-17":2070,
    "16/1-18":2391,
    "16/1-19 S":1995,
    "16/1-20 A":3106,
    "16/1-21 A":3313,
    "16/1-21 S":2630,
    "16/1-22 A":2896,
    "16/1-22 B":3215,
    "16/1-22 S":2640,
    "16/1-23 S":2130,
    "16/1-24":2299,
    "16/1-25 S":2210,
    "16/1-26 A":4888,
    "16/1-26 S":5330,
    "16/1-27":2258,
    "16/1-28 S":4880,
    "16/1-29 S":2024,
    "16/2-1":1906,
    "16/2-2":1880,
    "16/2-3":1905,
    "16/2-4":2000,
    "16/2-5":2373,
    "16/2-6":2131,
    "16/2-7":2500,
    "16/2-7 A":2100,
    "16/2-8":2140,
    "16/2-9 S":2082,
    "16/2-10":2090,
    "16/2-11":2126,
    "16/2-11 A":2365,
    "16/2-12":2067,
    "16/2-13 A":2776,
    "16/2-13 S":2090,
    "16/2-14":1982,
    "16/2-15":2006,
    "16/2-16":2214,
    "16/2-16 A":2503,
    "16/2-17 A":0,
    "16/2-17 B":2200,
    "16/2-17 S":2052,
    "16/2-18 S":1970,
    "16/2-19":2023,
    "16/2-19 A":2347.5,
    "16/2-20 A":2215,
    "16/2-20 S":2150,
    "16/2-21":2070,
    "16/2-22 A":0,
    "16/2-22 S":1993,
    "16/3-1":453,
    "16/3-2":2019,
    "16/3-3":1566,
    "16/3-4":2020,
    "16/3-4 A":2128,
    "16/3-5":2050,
    "16/3-6":2050,
    "16/3-7":2100,
    "16/3-8 A":2132,
    "16/3-8 S":2109,
    "16/4-1":2909,
    "16/4-2":3117,
    "16/4-3":2425,
    "16/4-4":2409,
    "16/4-5":2020,
    "16/4-6 S":2233,
    "16/4-7":2600,
    "16/4-8 S":2700,
    "16/4-9 S":2358,
    "16/4-10":2668,
    "16/4-11":2475,
    "16/5-1":1943,
    "16/5-2 S":2042,
    "16/5-3":1993,
    "16/5-4":2100,
    "16/5-5":2085,
    "16/5-6":2350,
    "16/6-1":2060.5,
    "16/7-1":2781,
    "16/7-2":3146,
    "16/7-3":3141,
    "16/7-4":2781,
    "16/7-5":2900,
    "16/7-6":2725,
    "16/7-7 S":2994,
    "16/7-8 S":2900,
    "16/7-9":2665,
    "16/7-10":2514,
    "16/7-11":2650,
    "16/7-11 A":0,
    "16/8-1":2301,
    "16/8-2":3585,
    "16/8-3 S":3261,
    "16/9-1":3655,
    "16/10-1":3151,
    "16/10-2":3150,
    "16/10-3":2850,
    "16/10-4":2580,
    "16/10-5":3034,
    "16/11-1 S":3050,
    "16/11-2":2378,
    "17/3-1":2852,
    "17/4-1":3997,
    "17/6-1":3065,
    "17/9-1":2816,
    "17/9-1 R":3161,
    "17/10-1":3591,
    "17/11-1":3269,
    "17/11-2":2644,
    "17/12-1":458,
    "17/12-1 R":4298,
    "17/12-2":2334,
    "17/12-3":2730,
    "17/12-4":2470,
    "17/12-4 A":3338,
    "17/12-4 B":3253,
    "18/10-1":2800,
    "18/11-1":2086,
    "24/6-1":4937,
    "24/6-2":2722,
    "24/6-3":253,
    "24/6-4":2325,
    "24/9-1":4907,
    "24/9-2":2743,
    "24/9-3":3051,
    "24/9-4":2208,
    "24/9-5":2860,
    "24/9-6":2255,
    "24/9-7":2280,
    "24/9-7 A":2277,
    "24/9-7 B":2230,
    "24/9-7 C":2363,
    "24/9-8":2190,
    "24/9-9 A":2981,
    "24/9-9 B":3005,
    "24/9-9 S":2402,
    "24/9-10 A":2900,
    "24/9-10 S":2339,
    "24/9-11 S":2211,
    "24/9-12 A":3000,
    "24/9-12 B":0,
    "24/9-12 S":2336,
    "24/12-1":3966,
    "24/12-1 R":4825,
    "24/12-2":5100,
    "24/12-3 S":3058,
    "24/12-4":2265,
    "24/12-5 S":2325,
    "24/12-6 S":5207,
    "25/1-1":4570,
    "25/1-2":2772,
    "25/1-3":2872,
    "25/1-4":2795,
    "25/1-5":2259,
    "25/1-6":2895,
    "25/1-7":2719,
    "25/1-7 R":2719,
    "25/1-7 R2":2716,
    "25/1-7 R3":2716,
    "25/1-7 R4":2716,
    "25/1-8 S":2650,
    "25/1-8 SR":2650,
    "25/1-8 SR4":2647,
    "25/1-8 SR3":2647,
    "25/1-8 SR2":2647,
    "25/1-9":2807,
    "25/1-10":4739,
    "25/1-11":1178,
    "25/1-11 A":2410,
    "25/1-11 R":2338,
    "25/1-12":0,
    "25/2-1":2740,
    "25/2-2":2740,
    "25/2-3":2795,
    "25/2-4":4360,
    "25/2-5":4000,
    "25/2-6":3750,
    "25/2-7":4110,
    "25/2-8":2380,
    "25/2-9":2297,
    "25/2-10 S":2967,
    "25/2-10 SR":2971,
    "25/2-11":2075,
    "25/2-12":4102,
    "25/2-12 A":3865,
    "25/2-13":3908,
    "25/2-14":3623,
    "25/2-15":3505,
    "25/2-15 R":3509,
    "25/2-15 R2":3942,
    "25/2-16 S":4013,
    "25/2-17":2193,
    "25/2-18 A":4066,
    "25/2-18 B":4335,
    "25/2-18 C":4369,
    "25/2-18 S":3887,
    "25/2-19 A":4210,
    "25/2-19 S":2380,
    "25/3-1":3922,
    "25/4-1":4060,
    "25/4-2":2775,
    "25/4-3":2714,
    "25/4-4":2681,
    "25/4-5":4355,
    "25/4-6 S":4170,
    "25/4-6 SR":4179,
    "25/4-7":2286,
    "25/4-8":2286,
    "25/4-9 S":2377,
    "25/4-10 A":2550,
    "25/4-10 S":2912,
    "25/4-11":2427,
    "25/4-12 A":0,
    "25/4-12 S":525,
    "25/4-13 A":0,
    "25/4-13 S":0,
    "25/5-1":3429,
    "25/5-1 A":3432,
    "25/5-2":3304,
    "25/5-3":2900,
    "25/5-4":3185,
    "25/5-5":2600,
    "25/5-6":2446,
    "25/5-7":3045,
    "25/5-8":1199,
    "25/5-9":2265,
    "25/6-1":2881,
    "25/6-2":2392,
    "25/6-3":2475,
    "25/6-4 S":2950,
    "25/6-5 S":2520,
    "25/7-1 S":3592,
    "25/7-2":4850,
    "25/7-3":2540,
    "25/7-4 S":2560,
    "25/7-5":2736,
    "25/7-6":2250,
    "25/8-1":2606,
    "25/8-2":2578,
    "25/8-3":1868,
    "25/8-4":1891,
    "25/8-5 S":3395,
    "25/8-5 SR":3395,
    "25/8-6":2577,
    "25/8-7":2380,
    "25/8-8 A":2601,
    "25/8-8 B":2510,
    "25/8-8 S":2592,
    "25/8-9":2548,
    "25/8-9 A":2687,
    "25/8-10 S":1890,
    "25/8-11":1994,
    "25/8-12 A":2156,
    "25/8-12 S":2096,
    "25/8-13":2276,
    "25/8-14 S":2825,
    "25/8-15 S":4804,
    "25/8-16 A":2324,
    "25/8-16 S":2550,
    "25/8-17":2233,
    "25/8-17 A":2945,
    "25/8-18 S":1890,
    "25/9-1":2525,
    "25/9-2 A":0,
    "25/9-2 B":0,
    "25/9-2 S":2250,
    "25/9-3":2267,
    "25/9-4":2419,
    "25/10-1":1747,
    "25/10-1 R":2091,
    "25/10-2":2191,
    "25/10-2 R":3181,
    "25/10-3":1921,
    "25/10-4":2349,
    "25/10-4 R":2550,
    "25/10-5":2011,
    "25/10-6 S":4706,
    "25/10-7 S":2617,
    "25/10-8":2653,
    "25/10-8 A":3460,
    "25/10-9":2985,
    "25/10-10":2513,
    "25/10-11":4562,
    "25/10-12 S":2597,
    "25/10-13 S":2925,
    "25/10-14 S":2474,
    "25/10-15 S":2696,
    "25/10-16 A":3704,
    "25/10-16 B":4893,
    "25/10-16 C":4405,
    "25/10-16 S":2766,
    "25/11-1":2459,
    "25/11-2":1824,
    "25/11-3":1858,
    "25/11-4":1896,
    "25/11-5":2164,
    "25/11-6":1948,
    "25/11-7":1944,
    "25/11-8":1950,
    "25/11-9":1910,
    "25/11-10":1988,
    "25/11-11":1960,
    "25/11-12":1918,
    "25/11-13":1932,
    "25/11-14 S":2108,
    "25/11-14 SR":2081,
    "25/11-15":2035,
    "25/11-16":1945,
    "25/11-17":2256,
    "25/11-18":1875,
    "25/11-19 S":2250,
    "25/11-19 SR":2250,
    "25/11-20":1828,
    "25/11-21 A":3006,
    "25/11-21 S":1957,
    "25/11-22":1805,
    "25/11-23":2014,
    "25/11-24":2117,
    "25/11-25 A":2448,
    "25/11-25 S":2142,
    "25/11-26":2235,
    "25/11-27":1890,
    "25/11-28":2590,
    "25/12-1":2865,
    "26/4-1":3690,
    "26/4-2":2302,
    "26/5-1":1910,
    "26/10-1":1025,
    "29/3-1":4427,
    "29/6-1":4832,
    "29/9-1":4703,
    "30/2-1":4243,
    "30/2-2":4172,
    "30/2-3":4325,
    "30/2-4 S":4325,
    "30/3-1":3718,
    "30/3-1 R":4421,
    "30/3-2":955,
    "30/3-2 R":3567,
    "30/3-3":3419,
    "30/3-4":3287,
    "30/3-4 R":3287,
    "30/3-5 S":4724,
    "30/3-6 S":6085,
    "30/3-7 A":6678,
    "30/3-7 B":5970,
    "30/3-7 BR":5970,
    "30/3-7 S":5581,
    "30/3-8 A":6208,
    "30/3-8 S":5120,
    "30/3-9":4015,
    "30/3-10 S":4168,
    "30/4-1":5454,
    "30/4-2":4775,
    "30/4-3 S":4605,
    "30/5-1":4124,
    "30/5-2":4076,
    "30/5-3 A":4746,
    "30/5-3 S":4335,
    "30/6-1":3175,
    "30/6-2":2890,
    "30/6-3":2940,
    "30/6-4":2942,
    "30/6-5":3550,
    "30/6-6":3225,
    "30/6-7":3236,
    "30/6-8":3600,
    "30/6-9":3476,
    "30/6-9 R":3476,
    "30/6-10":2656,
    "30/6-10 A":2665,
    "30/6-11":4001,
    "30/6-12":615,
    "30/6-13":2775,
    "30/6-13 R":2775,
    "30/6-14":2900,
    "30/6-15":3972,
    "30/6-16":3300,
    "30/6-17":615,
    "30/6-17 A":2686,
    "30/6-17 R":2650,
    "30/6-18":3690,
    "30/6-19":3301,
    "30/6-19 R":3300,
    "30/6-20":3046,
    "30/6-21":3100,
    "30/6-21 R":3097,
    "30/6-22":3336,
    "30/6-22 R":3335,
    "30/6-23":3209.5,
    "30/6-23 R":3207.5,
    "30/6-24 S":3986,
    "30/6-25 S":2988.3,
    "30/6-26":2865,
    "30/6-27":3432,
    "30/6-28 S":4064,
    "30/6-29 S":5765,
    "30/6-30":0,
    "30/7-1":1007,
    "30/7-2":2591,
    "30/7-3":4044,
    "30/7-4":778,
    "30/7-5":805,
    "30/7-6":3784,
    "30/7-6 R":4115,
    "30/7-7":5127,
    "30/7-8":4287,
    "30/7-8 R":4813,
    "30/8-1 A":0,
    "30/8-1 S":4688,
    "30/8-1 SR":5149,
    "30/8-2":2405,
    "30/8-3":3720,
    "30/8-4 S":4210,
    "30/8-5":3563,
    "30/9-1":2895,
    "30/9-2":2830,
    "30/9-2 R":2830,
    "30/9-3":3113,
    "30/9-3 A":4300,
    "30/9-4 S":4303,
    "30/9-5 S":2980,
    "30/9-6":3034,
    "30/9-7":3565,
    "30/9-8":1060,
    "30/9-8 R":3200,
    "30/9-9":2809,
    "30/9-10":3649,
    "30/9-11":2570,
    "30/9-11 A":3002,
    "30/9-12":2994,
    "30/9-12 A":3061,
    "30/9-12 AR":3065,
    "30/9-13 S":4027,
    "30/9-13 SR":4031,
    "30/9-14":3680,
    "30/9-15":2764,
    "30/9-16":3550,
    "30/9-17":1408,
    "30/9-17 R":1408,
    "30/9-18":2994,
    "30/9-19":3560,
    "30/9-19 A":3775,
    "30/9-20 S":3124,
    "30/9-21 A":4086,
    "30/9-21 S":4090,
    "30/9-22":3255,
    "30/9-23":2872,
    "30/9-24":3767,
    "30/9-25":3220,
    "30/9-26 S":4568,
    "30/9-27 S":3989,
    "30/9-28 S":4083,
    "30/10-1":2917,
    "30/10-2":2755,
    "30/10-3":2255,
    "30/10-4":758,
    "30/10-5":5186,
    "30/10-6":5248,
    "30/10-7":2612,
    "30/11-1":2682,
    "30/11-2":2590,
    "30/11-3":4662,
    "30/11-4":5255,
    "30/11-5":3726,
    "30/11-6 S":3550,
    "30/11-7":4067,
    "30/11-7 A":4250,
    "30/11-8 A":4475,
    "30/11-8 S":4043,
    "30/11-9 A":4054,
    "30/11-9 S":3735,
    "30/11-10":4079,
    "30/11-10 A":3948,
    "30/11-11 A":4016,
    "30/11-11 S":3675,
    "30/11-12 A":4173,
    "30/11-12 S":3700,
    "30/11-13":3344,
    "30/11-13 A":0,
    "30/11-14":3467,
    "30/11-14 A":0,
    "30/11-14 B":4187,
    "30/12-1":3641,
    "31/1-1":2920,
    "31/2-1":2433,
    "31/2-1 R":2434,
    "31/2-2":1857,
    "31/2-2 R":2600,
    "31/2-3":2601,
    "31/2-4":815,
    "31/2-4 R":5035,
    "31/2-4 R2":5035,
    "31/2-5":2532,
    "31/2-5 R":2525,
    "31/2-5 R2":2525,
    "31/2-6":1760,
    "31/2-7":1660,
    "31/2-8":3375,
    "31/2-9":1770,
    "31/2-10":1833,
    "31/2-11":1744,
    "31/2-12":1615,
    "31/2-13 S":2010,
    "31/2-14":1725,
    "31/2-15":1677,
    "31/2-16 S":2390,
    "31/2-16 SR":2391,
    "31/2-17 A":1924,
    "31/2-17 B":1838,
    "31/2-17 BR":1843,
    "31/2-17 S":2220,
    "31/2-18":1711,
    "31/2-18 A":2005,
    "31/2-19 S":4114,
    "31/2-20 S":3400,
    "31/2-21 S":3217,
    "31/3-1":2374,
    "31/3-2":2090,
    "31/3-3":2573,
    "31/3-4":2122,
    "31/4-1":1000,
    "31/4-2":2900,
    "31/4-3":4981,
    "31/4-4":3150,
    "31/4-5":2930,
    "31/4-6":2447,
    "31/4-7":2505,
    "31/4-8":2611,
    "31/4-9":2480,
    "31/4-10":2350,
    "31/4-11":3271,
    "31/4-12":2226,
    "31/4-12 A":0,
    "31/5-1":860,
    "31/5-2":2500,
    "31/5-2 R":2500,
    "31/5-3":2250,
    "31/5-4 A":2603,
    "31/5-4 AR":2603,
    "31/5-4 AR2":2610,
    "31/5-4 S":1909,
    "31/5-5":1930,
    "31/5-5 R":1936.5,
    "31/5-6":2370,
    "31/6-1":4070,
    "31/6-2":2020,
    "31/6-2 R":2235,
    "31/6-3":2250,
    "31/6-4":820,
    "31/6-5":2082,
    "31/6-6":2293,
    "31/6-7":698,
    "31/6-8":2138,
    "31/6-8 R":2138,
    "31/7-1":2780,
    "31/7-1 A":2530,
    "31/7-2 A":2723,
    "31/7-2 S":2450,
    "31/8-1":2629,
    "31/10-1":2388,
    "32/2-1":1300,
    "32/4-1":3186,
    "33/2-1":4459,
    "33/2-2 S":3530,
    "33/5-1":3829,
    "33/5-2":4520,
    "33/6-1":3900,
    "33/6-2":3950,
    "33/6-3 S":4444,
    "33/6-4":1845,
    "33/9-1":3126,
    "33/9-2":940,
    "33/9-3":2992,
    "33/9-4":3076,
    "33/9-5":3157,
    "33/9-6":3354,
    "33/9-7":3127,
    "33/9-8":3085,
    "33/9-9":3100,
    "33/9-10":3715,
    "33/9-11":3528,
    "33/9-12":2959,
    "33/9-13 S":3077,
    "33/9-14":2982,
    "33/9-15":3007,
    "33/9-16":2870,
    "33/9-17":3233,
    "33/9-18":3253,
    "33/9-18 A":3595,
    "33/9-19 A":3514,
    "33/9-19 S":3197,
    "33/9-20 S":5502.3,
    "33/9-21 A":6392,
    "33/9-21 B":6882,
    "33/9-21 S":6051,
    "33/9-22 S":2730,
    "33/12-1":3060,
    "33/12-2":4354,
    "33/12-3":1725,
    "33/12-4":2896,
    "33/12-5":4574,
    "33/12-6":4612,
    "33/12-7":3703,
    "33/12-8 A":5098,
    "33/12-8 S":3750,
    "33/12-9 S":3812,
    "33/12-10 S":3097,
    "34/2-1":807,
    "34/2-2":513,
    "34/2-2 R":4074,
    "34/2-3":3741,
    "34/2-4":4107,
    "34/2-5 S":3680,
    "34/3-1 A":4162,
    "34/3-1 S":4221,
    "34/3-2 S":4331,
    "34/3-3 A":5013,
    "34/3-3 S":4063,
    "34/3-4 A":4535,
    "34/3-4 S":1607,
    "34/3-5":4275,
    "34/4-1":2916,
    "34/4-2":3599,
    "34/4-3":4460,
    "34/4-4":3800,
    "34/4-5":3917,
    "34/4-6":3282,
    "34/4-7":2950,
    "34/4-8":3110,
    "34/4-9 S":3440,
    "34/4-10":2380,
    "34/4-10 R":4246,
    "34/4-11":4327,
    "34/4-12 A":2761,
    "34/4-12 S":3066,
    "34/4-13 S":5010,
    "34/4-14 S":4822,
    "34/5-1 A":4416,
    "34/5-1 S":3900,
    "34/5-2 S":3712,
    "34/6-1 S":4360,
    "34/6-2 A":3974,
    "34/6-2 S":4335,
    "34/6-3 A":4019,
    "34/6-3 S":4462,
    "34/6-4":4115,
    "34/7-1":2905,
    "34/7-2":2475,
    "34/7-3":3414,
    "34/7-4":3115,
    "34/7-5":3146,
    "34/7-6":3685,
    "34/7-7":3526,
    "34/7-8":2766,
    "34/7-9":3240,
    "34/7-10":3000,
    "34/7-11":861,
    "34/7-12":2784,
    "34/7-13":2994,
    "34/7-14":2653,
    "34/7-15 S":4646,
    "34/7-16":2700,
    "34/7-16 R":2980,
    "34/7-16 R2":2979,
    "34/7-17":3115,
    "34/7-17 A":2650,
    "34/7-18":2443,
    "34/7-19":2800,
    "34/7-19 R":2807,
    "34/7-20":3177,
    "34/7-21":3015,
    "34/7-21 A":3360,
    "34/7-22":2507,
    "34/7-23 A":3412,
    "34/7-23 S":3375,
    "34/7-24 S":3145,
    "34/7-25 S":3235,
    "34/7-26 A":4290,
    "34/7-26 S":4193,
    "34/7-26 SR":4690,
    "34/7-27":3000,
    "34/7-28":3005,
    "34/7-29 S":2927,
    "34/7-29 SR":2926,
    "34/7-30 S":1148,
    "34/7-30 SR":2478,
    "34/7-31":2650,
    "34/7-31 A":3454,
    "34/7-32":2651,
    "34/7-33":2615,
    "34/7-34":2701,
    "34/7-34 A":3022,
    "34/7-35 S":4393,
    "34/7-36 S":3690,
    "34/8-1":3610,
    "34/8-2":3240,
    "34/8-3":3328,
    "34/8-3 A":3230,
    "34/8-4 A":3567,
    "34/8-4 AR":3574,
    "34/8-4 S":4150,
    "34/8-5":3540,
    "34/8-6":3950,
    "34/8-7":5460,
    "34/8-7 R":5460,
    "34/8-8":3625,
    "34/8-8 R":3624,
    "34/8-9 S":3530,
    "34/8-10 S":3470,
    "34/8-11":3140,
    "34/8-12 S":3347,
    "34/8-13 A":3852,
    "34/8-13 S":4442,
    "34/8-14 A":3838,
    "34/8-14 B":4079,
    "34/8-14 C":3820,
    "34/8-14 D":3850,
    "34/8-14 S":3470,
    "34/8-15 S":3690,
    "34/8-16 S":3875,
    "34/8-17 S":4587,
    "34/8-19 S":6100,
    "34/10-1":2460,
    "34/10-2":3729,
    "34/10-3":2802,
    "34/10-3 R":2799,
    "34/10-4":2600,
    "34/10-5":2780,
    "34/10-6":2363,
    "34/10-7":2250,
    "34/10-7 R":2247,
    "34/10-8":2214,
    "34/10-9":2200,
    "34/10-9 R":2421,
    "34/10-10":816,
    "34/10-10 R":816,
    "34/10-11":2155,
    "34/10-12":2800,
    "34/10-13":3392,
    "34/10-14":2647,
    "34/10-15":2400,
    "34/10-16":4042,
    "34/10-16 R":4039,
    "34/10-17":3466,
    "34/10-18":3025,
    "34/10-19":2218,
    "34/10-20":3747,
    "34/10-21":4005,
    "34/10-22":579,
    "34/10-23":4764,
    "34/10-24":600,
    "34/10-25":600,
    "34/10-26":600,
    "34/10-27":482,
    "34/10-27 R":482,
    "34/10-28":528,
    "34/10-29":405,
    "34/10-30":3785,
    "34/10-31":420,
    "34/10-32":3753,
    "34/10-32 R":3742,
    "34/10-33":3870,
    "34/10-33 A":3851,
    "34/10-33 B":3942,
    "34/10-33 C":3752,
    "34/10-33 CR":3752,
    "34/10-34":2410,
    "34/10-34 R":2410,
    "34/10-35":4310,
    "34/10-36":3640,
    "34/10-37":2873,
    "34/10-37 A":2950,
    "34/10-37 AR":2952,
    "34/10-38 S":3940,
    "34/10-39 S":3290,
    "34/10-40 S":5900,
    "34/10-41 S":3420,
    "34/10-42 S":4520,
    "34/10-43 S":5725,
    "34/10-44 S":4865,
    "34/10-45 A":6523,
    "34/10-45 B":7928,
    "34/10-45 S":7594,
    "34/10-46 A":6860,
    "34/10-46 B":7725,
    "34/10-46 S":5568,
    "34/10-47 A":3020,
    "34/10-47 S":4027,
    "34/10-48 A":5878,
    "34/10-48 S":7393,
    "34/10-49 A":3312,
    "34/10-49 B":5480,
    "34/10-49 S":4563,
    "34/10-52 A":3520,
    "34/10-52 B":4050,
    "34/10-52 S":1516,
    "34/10-53 A":4855,
    "34/10-53 S":4526,
    "34/10-54 A":4656,
    "34/10-54 S":4280,
    "34/10-55 S":7811,
    "34/11-1":4580,
    "34/11-2 S":4743,
    "34/11-3":4482,
    "34/11-4":4438,
    "34/11-5 S":7380,
    "34/11-6 S":7126,
    "34/12-1":4713,
    "35/1-1":4540,
    "35/1-2 S":4202,
    "35/2-1":713,
    "35/2-1 R":713,
    "35/2-2":640,
    "35/2-3":1640,
    "35/3-1":4475,
    "35/3-2":4400,
    "35/3-3":900,
    "35/3-4":4089,
    "35/3-5":4114,
    "35/3-6":3366,
    "35/3-7 S":4051,
    "35/4-1":4936,
    "35/6-1 S":847,
    "35/6-2 S":3700,
    "35/7-1 S":4825,
    "35/8-1":4344.9,
    "35/8-2":4336,
    "35/8-3":3944,
    "35/8-4":3719,
    "35/8-5 S":4000,
    "35/8-6 A":3800,
    "35/8-6 S":4043,
    "35/9-1":2350,
    "35/9-1 R":2350,
    "35/9-2":2885,
    "35/9-3":2783,
    "35/9-4 S":1261,
    "35/9-4 SR":1261,
    "35/9-5":3531,
    "35/9-6 S":3740,
    "35/9-7":3006,
    "35/9-8":3256,
    "35/9-9":3339,
    "35/9-10 A":3203,
    "35/9-10 S":3619,
    "35/9-11 A":3860,
    "35/9-11 S":3800,
    "35/9-12 S":3556,
    "35/9-13":3223,
    "35/9-14":3657,
    "35/9-14 A":3900,
    "35/10-1":3986,
    "35/10-2":4677,
    "35/10-3":2250,
    "35/10-4 A":0,
    "35/10-4 B":0,
    "35/10-4 S":0,
    "35/11-1":3361,
    "35/11-2":4025,
    "35/11-3 S":4040,
    "35/11-4":3127,
    "35/11-4 R":3136.5,
    "35/11-5":3769,
    "35/11-6":3995,
    "35/11-7":2895,
    "35/11-8 S":3624,
    "35/11-9":2830,
    "35/11-10":2950,
    "35/11-10 A":3259,
    "35/11-11":3225,
    "35/11-12":3378,
    "35/11-13":3291.5,
    "35/11-14 S":3306,
    "35/11-15 S":3250,
    "35/11-16 S":3554,
    "35/11-17":2889,
    "35/11-18":3759,
    "35/11-18 A":4020,
    "35/11-19 S":488,
    "35/11-20 A":3973,
    "35/11-20 B":5114,
    "35/11-20 S":3584,
    "35/11-21 A":0,
    "35/11-21 S":2800,
    "35/12-1":3020,
    "35/12-2":2541,
    "35/12-3 S":2807,
    "35/12-4 A":3413,
    "35/12-4 S":3585,
    "35/12-5 S":3570,
    "35/12-6 A":3263,
    "35/12-6 S":3370,
    "35/12-7":2750,
    "36/1-1":1596,
    "36/1-2":3255.6,
    "36/4-1":2717,
    "36/7-1":2841,
    "36/7-2":1435,
    "36/7-3":2948,
    "36/7-4":2726,
    "6201/11-1":3850,
    "6201/11-2":3778,
    "6201/11-3":2120,
    "6201/11-3 R":3000,
    "6204/10-1":2709,
    "6204/10-2":1145,
    "6204/10-2 A":2290,
    "6204/10-2 R":2095,
    "6204/11-1":2966,
    "6204/11-2":2920,
    "6205/3-1":4300,
    "6205/3-1 R":5264,
    "6302/6-1":4234,
    "6304/3-1":3642,
    "6305/1-1":4560,
    "6305/4-1":2975,
    "6305/4-2 S":2985,
    "6305/5-1":3053,
    "6305/5-3 S":2954,
    "6305/7-1":3377,
    "6305/8-1":3175,
    "6305/8-2":3078,
    "6305/9-1":2655,
    "6305/9-2":3075,
    "6305/12-1":4302,
    "6305/12-2":3162,
    "6306/5-1":2050,
    "6306/5-2":3217,
    "6306/6-1":1317,
    "6306/6-2":2080,
    "6306/10-1":3187,
    "6307/1-1 S":0,
    "6403/6-1":4120,
    "6403/10-1":3400,
    "6404/11-1":3650,
    "6405/7-1":4300,
    "6405/10-1":3182,
    "6405/12-1":3330,
    "6406/1-1":5057,
    "6406/1-2":4500,
    "6406/1-3":4276,
    "6406/1-3 R":4278,
    "6406/1-3 R2":4276,
    "6406/1-4":4596,
    "6406/2-1":5292,
    "6406/2-1 R":5892,
    "6406/2-2":5367,
    "6406/2-2 R":5361,
    "6406/2-3":5258,
    "6406/2-4 S":4546,
    "6406/2-4 SR":5080,
    "6406/2-5":5439,
    "6406/2-5 A":5600,
    "6406/2-6":5263,
    "6406/2-6 A":5251,
    "6406/2-6 R":5263,
    "6406/2-7":4981,
    "6406/2-8":4680,
    "6406/2-9 S":0,
    "6406/3-1":4902,
    "6406/3-2":4523,
    "6406/3-3":4416,
    "6406/3-4":4414,
    "6406/3-5":4283,
    "6406/3-6":4175,
    "6406/3-7":4520,
    "6406/3-8":4216,
    "6406/3-9":4183,
    "6406/5-1":4692,
    "6406/6-1":4715,
    "6406/6-2":4670,
    "6406/6-3":4420,
    "6406/6-4":1955,
    "6406/6-4 S":4484,
    "6406/6-5 S":0,
    "6406/6-6 S":0,
    "6406/8-1":4910,
    "6406/8-2":4700,
    "6406/9-1":5080,
    "6406/9-1 A":0,
    "6406/9-2":5348,
    "6406/9-3":5138,
    "6406/11-1 S":4185,
    "6406/12-1 S":3965,
    "6406/12-2":4367,
    "6406/12-3 A":4356,
    "6406/12-3 B":4315,
    "6406/12-3 S":4001,
    "6406/12-4 A":4058,
    "6406/12-4 S":4318,
    "6406/12-5 S":4297,
    "6407/1-1":900,
    "6407/1-2":4560,
    "6407/1-3":4469,
    "6407/1-4":3805,
    "6407/1-5 S":4177,
    "6407/1-6 S":4250,
    "6407/1-7":3376,
    "6407/1-7 A":3602,
    "6407/2-1":3870,
    "6407/2-2":3351,
    "6407/2-3":3050,
    "6407/2-4":3001,
    "6407/2-5 S":3408,
    "6407/2-6 S":3230,
    "6407/3-1 S":2928,
    "6407/4-1":4835,
    "6407/4-2":4230,
    "6407/5-1":4306,
    "6407/5-2 S":3545,
    "6407/6-1":2895,
    "6407/6-2":524,
    "6407/6-2 R":524,
    "6407/6-2 R2":524,
    "6407/6-3":3220,
    "6407/6-4":3126,
    "6407/6-5":2759,
    "6407/6-6":2508,
    "6407/6-7 S":3227,
    "6407/7-1 S":3950,
    "6407/7-2":3320,
    "6407/7-2 R":3322,
    "6407/7-3":3222,
    "6407/7-3 R":0,
    "6407/7-4":3211,
    "6407/7-4 R":0,
    "6407/7-5":3725,
    "6407/7-6":3975,
    "6407/7-7 S":3886,
    "6407/7-8":5138,
    "6407/7-8 A":5227,
    "6407/7-9 A":4960,
    "6407/7-9 S":4143,
    "6407/8-1":4650,
    "6407/8-2":1950,
    "6407/8-3":1960,
    "6407/8-4 A":2473,
    "6407/8-4 S":2788,
    "6407/8-5 A":3231,
    "6407/8-5 S":3240,
    "6407/8-6":3420,
    "6407/8-6 A":3537,
    "6407/8-7":3030,
    "6407/8-7 A":3178,
    "6407/9-1":2500,
    "6407/9-2":1865,
    "6407/9-3":1868,
    "6407/9-4":1820,
    "6407/9-5":1820,
    "6407/9-6":1800,
    "6407/9-6 R":1804,
    "6407/9-7":2561,
    "6407/9-8":2126,
    "6407/9-9":1920,
    "6407/9-10":1800,
    "6407/10-1":3347,
    "6407/10-2":3825,
    "6407/10-3":2973,
    "6407/10-4":3224,
    "6407/10-5":2890,
    "6407/11-1":0,
    "6407/12-1":1805,
    "6407/12-2":1481.5,
    "6407/12-3":1968,
    "6408/4-1":2725,
    "6504/5-1 S":4193,
    "6505/10-1":5028,
    "6506/3-1":3667,
    "6506/6-1":5491,
    "6506/6-2":3366,
    "6506/9-1":5664,
    "6506/9-2 S":4805,
    "6506/9-3":4692,
    "6506/9-4 A":4497,
    "6506/9-4 S":4738,
    "6506/11-1":4679,
    "6506/11-2":4813,
    "6506/11-3":4350,
    "6506/11-4 S":5110,
    "6506/11-5 S":4790,
    "6506/11-6":5275,
    "6506/11-7":4977.5,
    "6506/11-8":4990,
    "6506/11-9 S":5330,
    "6506/11-10":4536,
    "6506/12-1":4924,
    "6506/12-2":955,
    "6506/12-3":4360,
    "6506/12-4":4457,
    "6506/12-5":4587,
    "6506/12-6":4741,
    "6506/12-7":4840,
    "6506/12-8":4335,
    "6506/12-9 S":4910,
    "6506/12-10":5097,
    "6506/12-10 A":6260,
    "6506/12-11 S":5268,
    "6506/12-11 SR":5268,
    "6506/12-12 A":5481,
    "6506/12-12 S":5508,
    "6507/1-1":3745,
    "6507/2-1":4477,
    "6507/2-2":3958,
    "6507/2-3":3972,
    "6507/2-4":3600,
    "6507/3-1":4757,
    "6507/3-2":2032,
    "6507/3-3":3830,
    "6507/3-3 A":4528,
    "6507/3-3 B":4275,
    "6507/3-4":4092,
    "6507/3-5 S":4265,
    "6507/3-6":1650,
    "6507/3-7":3855,
    "6507/3-8":2990,
    "6507/3-9 S":2964,
    "6507/3-10":3455,
    "6507/3-11 S":2470,
    "6507/3-12":3451,
    "6507/3-12 A":2687,
    "6507/5-1":4224,
    "6507/5-2":3897,
    "6507/5-3":3000,
    "6507/5-4":3812,
    "6507/5-4 A":3883,
    "6507/5-5":3948,
    "6507/5-6 S":4991,
    "6507/5-7":1598,
    "6507/5-8":3690,
    "6507/6-1":4040,
    "6507/6-2":4354,
    "6507/6-3":1850,
    "6507/6-4 A":4957,
    "6507/6-4 S":1339,
    "6507/7-1":4825,
    "6507/7-2":3262,
    "6507/7-3":2850,
    "6507/7-4":2850,
    "6507/7-5":2660,
    "6507/7-5 A":2673,
    "6507/7-6":2525,
    "6507/7-7":1035,
    "6507/7-8":2855,
    "6507/7-9":850,
    "6507/7-10":3309,
    "6507/7-11 S":3749,
    "6507/7-12":3976,
    "6507/7-13":2623,
    "6507/7-13 A":2522,
    "6507/7-14 S":4534,
    "6507/7-15 S":4567,
    "6507/8-1":2600,
    "6507/8-2":2690,
    "6507/8-3":2075,
    "6507/8-4":2560,
    "6507/8-5":2000,
    "6507/8-6":2850,
    "6507/8-7":2975,
    "6507/8-8":2554,
    "6507/8-9":2375,
    "6507/10-1":3693,
    "6507/10-2 S":3020,
    "6507/11-1":3139,
    "6507/11-2":2905,
    "6507/11-3":3250,
    "6507/11-4":3045,
    "6507/11-5 S":2695,
    "6507/11-6":3440,
    "6507/11-7":2950,
    "6507/11-8":2773,
    "6507/11-9":3069,
    "6507/11-10":2319,
    "6507/11-11":2900,
    "6507/12-1":3720,
    "6507/12-2":5008,
    "6507/12-3":2600,
    "6508/1-1 A":2861,
    "6508/1-1 S":2750,
    "6508/1-2":1810,
    "6508/5-1":2586,
    "6510/2-1":3102,
    "6510/2-1 R":4707,
    "6603/5-1 S":5254,
    "6603/12-1":3830,
    "6604/2-1":3551,
    "6604/5-1":3858,
    "6604/10-1":3715,
    "6605/1-1":3947,
    "6605/8-1":4513,
    "6605/8-2":4210,
    "6607/2-1":3526,
    "6607/5-1":3817,
    "6607/5-2":4684,
    "6607/12-1":3521,
    "6607/12-2 S":4404,
    "6607/12-3":4306,
    "6608/2-1 S":5634,
    "6608/8-1":3013,
    "6608/8-2":2831,
    "6608/10-1":3437,
    "6608/10-2":3678,
    "6608/10-3":2921,
    "6608/10-3 R":2921,
    "6608/10-4":2800,
    "6608/10-5":3200,
    "6608/10-6":2115,
    "6608/10-6 R":2115,
    "6608/10-6 R2":2108,
    "6608/10-7":2319,
    "6608/10-7 A":0,
    "6608/10-8":2652,
    "6608/10-8 A":2660,
    "6608/10-9":2400,
    "6608/10-10":2800,
    "6608/10-11 S":3725.1,
    "6608/10-12":3180,
    "6608/10-12 A":3075,
    "6608/10-13":1442,
    "6608/10-14 S":2880,
    "6608/10-15":2030,
    "6608/10-16":4025,
    "6608/10-17 S":3323,
    "6608/10-18":3469,
    "6608/10-18 A":3474,
    "6608/10-18 B":0,
    "6608/11-1":1620,
    "6608/11-2":2215,
    "6608/11-3":2031,
    "6608/11-4":2317,
    "6608/11-5":2270,
    "6608/11-6":1850,
    "6608/11-7 S":2435,
    "6608/11-8":1970,
    "6609/5-1":3600,
    "6609/6-1":2710,
    "6609/7-1":1969,
    "6609/10-1":2167,
    "6609/10-2":2528,
    "6609/11-1":3068,
    "6610/2-1 S":2673,
    "6610/3-1":3126,
    "6610/3-1 R":4200,
    "6610/3-1 R2":4200,
    "6610/7-1":3333,
    "6610/7-2":4215,
    "6610/10-1":3006,
    "6704/12-1":4103,
    "6705/7-1":3290,
    "6705/10-1":3775,
    "6706/6-1":3451,
    "6706/11-1":4317,
    "6706/11-2":2596,
    "6706/12-1":3950,
    "6706/12-2":2754,
    "6706/12-3":3336,
    "6707/10-1":5039,
    "6707/10-2 A":4850,
    "6707/10-2 S":3365,
    "6707/10-3 S":4789,
    "6710/6-1":0,
    "6710/10-1":2267,
    "7016/2-1":4061,
    "7019/1-1":3003,
    "7117/9-1":3200,
    "7117/9-2":5000,
    "7119/7-1":3167,
    "7119/9-1":3248,
    "7119/12-1":3088,
    "7119/12-2":1902,
    "7119/12-3":3314,
    "7119/12-4":2917,
    "7120/1-1":2569,
    "7120/1-1 R":2610,
    "7120/1-1 R2":4003,
    "7120/1-2":2630,
    "7120/1-3":2542,
    "7120/1-4 S":2520,
    "7120/1-5":2527,
    "7120/2-1":3502,
    "7120/2-2":2794,
    "7120/2-3 S":2625,
    "7120/5-1":2700,
    "7120/6-1":2820,
    "7120/6-2 S":3242,
    "7120/6-3 S":3030,
    "7120/7-1":2839,
    "7120/7-2":2523,
    "7120/7-3":3062,
    "7120/8-1":2610,
    "7120/8-2":2590,
    "7120/8-3":2335,
    "7120/8-4":2697,
    "7120/9-1":2300,
    "7120/9-2":5072,
    "7120/10-1":2000,
    "7120/10-2":2500,
    "7120/12-1":3573,
    "7120/12-2":4680,
    "7120/12-3":2523,
    "7120/12-4":2199,
    "7120/12-5":3630,
    "7121/1-1":916,
    "7121/1-1 R":5000,
    "7121/4-1":2609,
    "7121/4-2":2800,
    "7121/5-1":3200,
    "7121/5-2":2543,
    "7121/5-3":2265,
    "7121/7-1":2160,
    "7121/7-2":2156,
    "7121/8-1":2259,
    "7121/9-1":2458,
    "7122/2-1":2120,
    "7122/4-1":3015,
    "7122/6-1":2707,
    "7122/6-2":3070,
    "7122/7-1":1524,
    "7122/7-2":1418,
    "7122/7-3":2726,
    "7122/7-4 S":2550,
    "7122/7-5":2228,
    "7122/7-5 A":2186,
    "7122/7-6":2026,
    "7122/10-1 S":1525,
    "7123/4-1 A":2855,
    "7123/4-1 S":2920,
    "7124/3-1":4730,
    "7124/4-1 S":2814,
    "7125/1-1":2200,
    "7125/4-1":1615,
    "7125/4-2":1750,
    "7125/4-3":1033,
    "7128/4-1":2530,
    "7128/6-1":2543,
    "7130/4-1":3184,
    "7131/4-1":1295,
    "7216/11-1 S":4239,
    "7218/8-1":3000,
    "7218/11-1":2542,
    "7219/8-1 S":4611,
    "7219/8-2":3425,
    "7219/9-1":4300,
    "7219/9-2":2568,
    "7219/12-1":2500,
    "7219/12-1 A":2026,
    "7219/12-2 A":1903,
    "7219/12-2 S":2100,
    "7219/12-3 S":2750,
    "7220/2-1":1594,
    "7220/4-1":3240,
    "7220/5-1":1740,
    "7220/5-2":1780,
    "7220/5-3":0,
    "7220/6-1":1540,
    "7220/6-2":985,
    "7220/6-2 R":1318,
    "7220/6-3":1300,
    "7220/7-1":2230,
    "7220/7-2 S":1855,
    "7220/7-3 S":2097,
    "7220/8-1":2222,
    "7220/10-1":2405,
    "7220/11-1":2251,
    "7220/11-2":2050,
    "7220/11-2 A":2121,
    "7220/11-3":1922.5,
    "7220/11-3 A":2135,
    "7220/11-3 AR":2600,
    "7220/11-4":2282,
    "7220/11-4 A":2392,
    "7220/11-5 S":0,
    "7221/12-1":724,
    "7222/1-1":2400,
    "7222/6-1 S":2895,
    "7222/11-1":2658,
    "7222/11-2":2918,
    "7223/5-1":2549,
    "7223/5-1 A":0,
    "7224/2-1":2944,
    "7224/6-1":2338,
    "7224/7-1":3067,
    "7225/3-1":4150,
    "7225/3-2":2210,
    "7226/2-1":2992,
    "7226/11-1":5200,
    "7227/10-1":3152,
    "7227/11-1 A":3446,
    "7227/11-1 S":2590,
    "7228/1-1":1714,
    "7228/2-1 S":4300,
    "7228/7-1 A":2881,
    "7228/7-1 B":2227,
    "7228/7-1 S":2087,
    "7228/9-1 S":4600,
    "7229/11-1":4630,
    "7316/5-1":4027,
    "7317/9-1":1500,
    "7318/12-1":505,
    "7318/12-2":3535,
    "7319/12-1":1540,
    "7321/4-1":0,
    "7321/7-1":3550,
    "7321/8-1":3482,
    "7321/9-1":1800,
    "7322/7-1":797,
    "7324/2-1":1090,
    "7324/3-1":0,
    "7324/7-1 S":2535,
    "7324/7-2":1730,
    "7324/7-3 S":2354,
    "7324/8-1":930,
    "7324/8-2":840,
    "7324/8-3":805,
    "7324/9-1":1100,
    "7324/10-1":2919,
    "7325/1-1":2865,
    "7325/4-1":1210,
    "7435/12-1":1540};

    
export default maxdepths;