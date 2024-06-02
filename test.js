const express = require('express');
const app = express();
const port = 3000;

const excelData = [
    { store: '태평양분식', type: '종합분식', address: '경남 양산시 중앙로 133' },
    { store: '부산갈매기족발', type: '족발,보쌈', address: '경남 양산시 중앙로 133 나2-14호' },
    { store: '부부수산', type: '생선회', address: '경남 양산시 중앙로 133' },
    { store: '봉석이토스트', type: '토스트', address: '경남 양산시 중앙로 133 남부시장 1층 가1-17' },
    { store: '서울마님죽 양산남부시장점', type: '죽', address: '경남 양산시 중앙로 133 남부시장 1층 라-9호' },
    { store: '이지단팥빵', type: '베이커리', address: '경남 양산시 중앙로 133' },
    { store: '미미분식', type: '종합분식', address: '경남 양산시 중앙로 133' },
    { store: '빵이랑케익이랑', type: '베이커리', address: '경남 양산시 중앙로 133' },
    { store: '양주튀김', type: '종합분식', address: '경남 양산시 중앙로 133 양주튀김' },
    { store: '죽사랑', type: '죽', address: '경남 양산시 중앙로 133' },
    { store: '튀김에전하다', type: '종합분식', address: '경남 양산시 중앙로 133' },
    { store: '에쿠찌', type: '카페,디저트', address: '경남 양산시 중앙로 133 남부시장 2층 청년몰 나10호' },
    { store: '마산통닭', type: '치킨,닭강정', address: '경남 양산시 중앙로 133' },
    { store: '엄마손맛분식', type: '종합분식', address: '경남 양산시 중앙로 133' },
    { store: '쿠우키', type: '베이커리', address: '경남 양산시 중앙로 133' },
    { store: '영진맛집', type: '한식', address: '경남 양산시 중앙로 133' },
    { store: '예린찻집', type: '가페,디저트', address: '경남 양산시 중앙로 133 가동 20호, 21호' },
    { store: '내송식육점', type: '육류,고기요리', address: '경남 양산시 중앙로 133' },
    { store: '옴팡집', type: '국수', address: '경남 양산시 중앙로 133' },
    { store: '반달떡갈비', type: '한식', address: '경남 양산시 중앙로 133 가동1층15호(중부동 남부시장)' },
    { store: '신청식당', type: '한식', address: '경남 양산시 중앙로 133' },
    { store: '프렌치커피', type: '카페', address: '경남 양산시 중앙로 133' },
    { store: '민이분식', type: '한식', address: '경남 양산시 중앙로 133 남부시장 다 2-6호 민이분식' },
    { store: '미소식당', type: '한식', address: '경남 양산시 중앙로 133 다-30' },
    { store: '똘이분식', type: '종합분식', address: '경남 양산시 중앙로 133' },
    { store: '예서향', type: '차', address: '경남 양산시 중앙로 133' },
    { store: '분식마당', type: '종합분식', address: '경남 양산시 중앙로 133' },
    { store: '양산청년몰미나치킨', type: '양식', address: '경남 양산시 중앙로 133' },
    { store: '모꼬치', type: '한식', address: '경남 양산시 중앙로 133' },
    { store: '카페인 향기', type: '카페,디저트', address: '경남 양산시 중앙로 133 가 21호' },
    { store: '통큰분식', type: '종합분식', address: '경남 양산시 중앙로 133 다동 1-6호' }
  ];

app.get('/food', (req, res) => {
  res.json(excelData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
