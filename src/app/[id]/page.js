"use client";
import { useState } from "react"; 
import { useParams } from "next/navigation"; 
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import styles from "./page.module.css"; 

export default function ChiTietSanPham() {
  const params = useParams();
  const comicId = params.id;

  // Dữ liệu mẫu mở rộng với mảng 'images' để slider hoạt động
  const comics = [
    { 
      id: "1", 
      name: "One Piece - Tập 108", 
      price: "30.000đ", 
      author: "Eiichiro Oda", 
      nxb: "Kim Đồng",
      // Danh sách ảnh con cho slider`
      images: ["/image/comic1.jpg", "/image/comic2.jpg", "/image/comic3.jpg"] 
    },
    { 
      id: "2", 
      name: "Jujutsu Kaisen - Tập 25", 
      price: "45.000đ", 
      author: "Gege Akutami", 
      nxb: "Kim Đồng",
      images: ["/image/comic2.jpg", "/image/comic1.jpg", "/image/comic3.jpg"]
    },
    { id: "3", name: "Doraemon Màu - Tập 1", price: "55.000đ", author: "Fujiko F. Fujio", nxb: "Kim Đồng", images: ["/image/comic3.jpg", "/image/comic1.jpg"] },
    { id: "4", name: "Blue Lock - Tập 15", price: "35.000đ", author: "Muneyuki Kaneshiro", nxb: "Trẻ", images: ["/image/comic4.jpg", "/image/comic1.jpg"] },
    { id: "5", name: "Conan - Tập 104", price: "25.000đ", author: "Gosho Aoyama", nxb: "Kim Đồng", images: ["/image/comic5.jpg", "/image/comic2.jpg"] },
    { id: "6", name: "Spy x Family - Tập 12", price: "40.000đ", author: "Tatsuya Endo", nxb: "Kim Đồng", images: ["/image/comic6.jpg", "/image/comic3.jpg"] },
    { id: "7", name: "Dragon Ball Super - Tập 20", price: "30.000đ", remain: "Còn 8 cuốn", image: ["/image/comic7.jpg", "/image/comic3.jpg"]},
    { id: "8", name: "Thanh Gươm Diệt Quỷ - Boxset", price: "1.200.000đ", remain: "Còn 2 bộ",tag: "Limited", image:   ["/image/comic8.jpg", "/image/comic3.jpg"]},
  ];

  // Tìm truyện theo ID
  const comic = comics.find((item) => item.id === comicId);

  // Khởi tạo State cho Slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // Xử lý khi không tìm thấy truyện
  if (!comic) {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>
          <h2 style={{padding: '100px 0', textAlign: 'center'}}>Không tìm thấy truyện này!</h2>
        </div>
        <Footer />
      </div>
    );
  }

  // Danh sách ảnh của cuốn truyện hiện tại
  const imageList = comic.images || [comic.image];

  // Hàm điều hướng slider
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <main className={styles.detailWrapper}>
          
          {/* PHẦN SLIDER ẢNH TRÁI */}
          <div className={styles.detailImageArea}>
            <div className={styles.sliderContainer}>
              {/* Nút điều hướng - Chỉ hiện nếu có từ 2 ảnh trở lên */}
              {imageList.length > 1 && (
                <>
                  <button className={styles.btnPrev} onClick={prevSlide}>❮</button>
                  <button className={styles.btnNext} onClick={nextSlide}>❯</button>
                </>
              )}
              
              <div className={styles.mainImageCard}>
                <Image 
                  src={imageList[currentIndex]} 
                  alt={comic.name} 
                  width={450} 
                  height={630} 
                  className={styles.comicCover} 
                  priority
                />
              </div>

              {/* Dấu chấm chỉ số (Dots) */}
              {imageList.length > 1 && (
                <div className={styles.dots}>
                  {imageList.map((_, i) => (
                    <span 
                      key={i} 
                      className={`${styles.dot} ${currentIndex === i ? styles.activeDot : ""}`}
                      onClick={() => setCurrentIndex(i)}
                    ></span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* PHẦN THÔNG TIN BÊN PHẢI */}
          <div className={styles.detailInfoArea}>
            <h1 className={styles.detailTitle}>{comic.name}</h1>
            <p className={styles.detailPrice}>{comic.price}</p>
            
            <div className={styles.specsTable}>
              <h3>Thông tin chi tiết</h3>
              <ul>
                <li>
                  <span className={styles.specsLabel}>Tác giả</span>
                  <span className={styles.specsValue}>{comic.author}</span>
                </li>
                <li>
                  <span className={styles.specsLabel}>Nhà xuất bản</span>
                  <span className={styles.specsValue}>{comic.nxb}</span>
                </li>
              </ul>
            </div>

            <div className={styles.actionButtons}>
              <button className={styles.buyBtnDetail}>MUA NGAY</button>
              <button className={styles.cartBtnDetail}>THÊM GIỎ HÀNG</button>
            </div>
          </div>

        </main>
      </div>
      <Footer />
    </div>
  );
}