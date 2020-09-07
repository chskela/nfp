// Приложение N 16. ТАБЛИЦА ОЦЕНКИ ФИЗИЧЕСКОЙ ПОДГОТОВЛЕННОСТИ ВОЕННОСЛУЖАЩИХ
export const scoreTable16 = {
    //[  1,    2,  3,   4,   5,   6,   7,   8,   9,   10,   11,   12,   13,   14,   15,   16]
    1: { 0: [26, 170, 150, 120, 230, 210, 170, null, null, null, null, null, null, null] }, //+
    2: { 0: [26, 160, 130, 100, 220, 180, 150, null, null, null, null, null, null, null] }, //+
    3: { 0: [28, 170, 150, 110, 230, 200, 170, null, null, null, null, null, null, null] }, //+
    4: { 0: [28, 180, 160, 120, 240, 220, 170, 300, 260, 220, [220, 280, 330], [210, 270, 320], [200, 260, 310], [180, 240, 300]] }, //+
    5: { 0: [30, 190, 170, 130, 250, 230, 190, 310, 270, 230, [230, 290, 340], [220, 280, 330], [210, 270, 320], [190, 250, 310]] }, //+
    6: { 0: [32, 210, 190, 150, 280, 250, 200, 350, 310, 250, [250, 320, 390], [240, 310, 380], [230, 300, 370], [210, 280, 350]] }, //+
    7: {
        3: [30, 200, 180, 130, 270, 240, 170, 340, 300, 220, [240, 310, 380], [230, 300, 370], [220, 290, 360], [200, 270, 340]], //+
        2: [30, 210, 190, 140, 280, 250, 180, 350, 310, 230, [250, 320, 390], [240, 310, 380], [230, 300, 370], [210, 280, 350]], //+
        1: [30, 220, 200, 140, 290, 260, 190, 360, 330, 250, [260, 330, 400], [250, 320, 390], [240, 310, 380], [220, 290, 360]]
    }, //+
    8: {
        3: [28, 180, 160, 120, 240, 210, 160, 300, 270, 200, [220, 280, 340], [210, 270, 330], [200, 260, 320], [180, 240, 300]], //+
        2: [28, 190, 170, 130, 250, 220, 170, 310, 280, 210, [230, 290, 350], [220, 280, 340], [210, 270, 330], [190, 250, 310]], //+
        1: [28, 200, 180, 140, 260, 230, 180, 320, 290, 210, [240, 300, 360], [230, 290, 350], [220, 280, 340], [200, 260, 320]]
    }, //+
    9: {
        3: [24, 160, 140, 100, 220, 190, 140, 250, 220, 150, [190, 250, 280], [180, 240, 270], [170, 230, 260], [160, 220, 250]], //+
        2: [24, 170, 150, 110, 230, 200, 150, 270, 240, 170, [200, 260, 300], [190, 250, 290], [180, 240, 280], [170, 230, 270]], //+
        1: [24, 180, 160, 120, 240, 210, 160, 290, 250, 190, [220, 270, 320], [210, 260, 310], [200, 250, 300], [180, 240, 290]]
    }, //+
    10: {
        3: [22, 150, 130, 80, 200, 170, 110, 230, 200, 130, [180, 240, 280], [170, 230, 270], [160, 220, 260], [150, 200, 230]], //+
        2: [22, 160, 140, 90, 210, 180, 120, 250, 220, 150, [190, 250, 280], [180, 240, 270], [170, 230, 260], [160, 210, 250]], //+
        1: [22, 170, 150, 100, 230, 200, 140, 270, 230, 170, [210, 260, 300], [200, 250, 290], [190, 240, 280], [170, 230, 270]]
    }, //+
    11: {
        3: [20, 120, 90, 70, 160, 120, 100, null, null, null, [160, 200], [150, 190], [140, 180], [120, 160]], //+
        2: [20, 130, 100, 80, 180, 140, 110, null, null, null, [170, 230], [160, 210], [150, 200], [130, 180]], //+
        1: [20, 140, 120, 90, 190, 160, 120, null, null, null, [180, 230], [170, 220], [160, 210], [140, 190]]
    }, //+
    12: {
        3: [16, 90, 60, 50, null, null, null, null, null, null, [130], [120], [110], [90]], //+
        2: [16, 100, 70, 60, null, null, null, null, null, null, [140], [130], [120], [100]], //+
        1: [16, 120, 90, 80, null, null, null, null, null, null, [160], [150], [140], [120]]
    }, //+
    13: {
        3: [12, 80, 50, 40, null, null, null, null, null, null, [120], [110], [100], [80]], //+
        2: [12, 90, 60, 50, null, null, null, null, null, null, [130], [120], [110], [90]], //+
        1: [12, 110, 80, 70, null, null, null, null, null, null, [150], [140], [130], [110]]
    }, //+
    14: {
        3: [6, 70, 50, 30, null, null, null, null, null, null, [110], [100], [90], [70]], //+
        2: [6, 80, 60, 40, null, null, null, null, null, null, [120], [110], [100], [80]], //+
        1: [6, 100, 80, 60, null, null, null, null, null, null, [140], [130], [120], [100]]
    }, //+
    15: { 0: [26, 170, 150, 120, 230, 210, 170, null, null, null, null, null, null, null] }, //+
    16: { 0: [28, 160, 140, 110, null, null, null, null, null, null, [200], [190], [180], [160]] },
    17: { 0: [26, 140, 120, 90, null, null, null, null, null, null, [180], [170], [160], [140]] },
    18: { 0: [24, 130, 110, 80, null, null, null, null, null, null, [170], [160], [150], [130]] },
    19: { 0: [22, 120, 100, 70, null, null, null, null, null, null, [160], [150], [140], [120]] },
    20: { 0: [20, 110, 90, 60, null, null, null, null, null, null, [150], [140], [130], [110]] },
    21: { 0: [18, 100, 80, 50, null, null, null, null, null, null, [140], [130], [120], [100]] },
};



// const scoreTable = [
//     //[ 1,    2,  3,   4,   5,   6,   7,   8,   9,   10,   11,   12,   13,   14,   15,   16]
//     [1, [0, 26, 170, 150, 120, 230, 210, 170, null, null, null, null, null, null, null]], //+
//     [2, [0, 26, 160, 130, 100, 220, 180, 150, null, null, null, null, null, null, null]], //+
//     [3, [0, 28, 170, 150, 110, 230, 200, 170, null, null, null, null, null, null, null]], //+
//     [4, [0, 28, 180, 160, 120, 240, 220, 170, 300, 260, 220, [220, 280, 330], [210, 270, 320], [200, 260, 310], [180, 240, 300]]], //+
//     [5, [0, 30, 190, 170, 130, 250, 230, 190, 310, 270, 230, [230, 290, 340], [220, 280, 330], [210, 270, 320], [190, 250, 310]]], //+
//     [6, [0, 32, 210, 190, 150, 280, 250, 200, 350, 310, 250, [250, 320, 390], [240, 310, 380], [230, 300, 370], [210, 280, 350]]], //+
//     [7, [3, 30, 200, 180, 130, 270, 240, 170, 340, 300, 220, [240, 310, 380], [230, 300, 370], [220, 290, 360], [200, 270, 340]], //+
//         [2, 30, 210, 190, 140, 280, 250, 180, 350, 310, 230, [250, 320, 390], [240, 310, 380], [230, 300, 370], [210, 280, 350]], //+
//         [1, 30, 220, 200, 140, 290, 260, 190, 360, 330, 250, [260, 330, 400], [250, 320, 390], [240, 310, 380], [220, 290, 360]]
//         ], //+
//     [8, [3, 28, 180, 160, 120, 240, 210, 160, 300, 270, 200, [220, 280, 340], [210, 270, 330], [200, 260, 320], [180, 240, 300]], //+
//         [2, 28, 190, 170, 130, 250, 220, 170, 310, 280, 210, [230, 290, 350], [220, 280, 340], [210, 270, 330], [190, 250, 310]], //+
//         [1, 28, 200, 180, 140, 260, 230, 180, 320, 290, 210, [240, 300, 360], [230, 290, 350], [220, 280, 340], [200, 260, 320]]
//         ], //+
//     [9, [3, 24, 160, 140, 100, 220, 190, 140, 250, 220, 150, [190, 250, 280], [180, 240, 270], [170, 230, 260], [160, 220, 250]], //+
//         [2, 24, 170, 150, 110, 230, 200, 150, 270, 240, 170, [200, 260, 300], [190, 250, 290], [180, 240, 280], [170, 230, 270]], //+
//         [1, 24, 180, 160, 120, 240, 210, 160, 290, 250, 190, [220, 270, 320], [210, 260, 310], [200, 250, 300], [180, 240, 290]]
//         ], //+
//     [10, [3, 22, 150, 130, 80, 200, 170, 110, 230, 200, 130, [180, 240, 280], [170, 230, 270], [160, 220, 260], [150, 200, 230]], //+
//         [2, 22, 160, 140, 90, 210, 180, 120, 250, 220, 150, [190, 250, 280], [180, 240, 270], [170, 230, 260], [160, 210, 250]], //+
//         [1, 22, 170, 150, 100, 230, 200, 140, 270, 230, 170, [210, 260, 300], [200, 250, 290], [190, 240, 280], [170, 230, 270]]
//         ], //+
//     [11, [3, 20, 120, 90, 70, 160, 120, 100, null, null, null, [160, 200], [150, 190], [140, 180], [120, 160]], //+
//         [2, 20, 130, 100, 80, 180, 140, 110, null, null, null, [170, 230], [160, 210], [150, 200], [130, 180]], //+
//         [1, 20, 140, 120, 90, 190, 160, 120, null, null, null, [180, 230], [170, 220], [160, 210], [140, 190]]
//         ], //+
//     [12, [3, 16, 90, 60, 50, null, null, null, null, null, null, [130], [120], [110], [90]], //+
//         [2, 16, 100, 70, 60, null, null, null, null, null, null, [140], [130], [120], [100]], //+
//         [1, 16, 120, 90, 80, null, null, null, null, null, null, [160], [150], [140], [120]]
//         ], //+
//     [13, [3, 12, 80, 50, 40, null, null, null, null, null, null, [120], [110], [100], [80]], //+
//         [2, 12, 90, 60, 50, null, null, null, null, null, null, [130], [120], [110], [90]], //+
//         [1, 12, 110, 80, 70, null, null, null, null, null, null, [150], [140], [130], [110]]
//         ], //+
//     [14, [3, 6, 70, 50, 30, null, null, null, null, null, null, [110], [100], [90], [70]], //+
//         [2, 6, 80, 60, 40, null, null, null, null, null, null, [120], [110], [100], [80]], //+
//         [1, 6, 100, 80, 60, null, null, null, null, null, null, [140], [130], [120], [100]]
//         ], //+
//     [15, [null, 26, 170, 150, 120, 230, 210, 170, null, null, null, null, null, null, null]], //+
//     [16, [null, 28, 160, 140, 110, null, null, null, null, null, null, [200], [190], [180], [160]]],
//     [17, [null, 26, 140, 120, 90, null, null, null, null, null, null, [180], [170], [160], [140]]],
//     [18, [null, 24, 130, 110, 80, null, null, null, null, null, null, [170], [160], [150], [130]]],
//     [19, [null, 22, 120, 100, 70, null, null, null, null, null, null, [160], [150], [140], [120]]],
//     [20, [null, 20, 110, 90, 60, null, null, null, null, null, null, [150], [140], [130], [110]]],
//     [21, [null, 18, 100, 80, 50, null, null, null, null, null, null, [140], [130], [120], [100]]],
// ];