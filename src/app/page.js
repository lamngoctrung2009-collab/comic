"use client"; 
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const comics = [
    { id: "1", name: "One Piece - Tập 108", price: "30.000đ", remain: "Còn 20 cuốn", image: "/image/comic1.jpg", tag: "Hot" },
    { id: "2", name: "Jujutsu Kaisen - Tập 25", price: "45.000đ", remain: "Còn 5 cuốn", image: "/image/comic2.jpg", tag: "New" },
    { id: "3", name: "Doraemon Màu - Tập 1", price: "55.000đ", remain: "Còn 12 cuốn", image: "/image/comic3.jpg" },
    { id: "4", name: "Blue Lock - Tập 15", price: "35.000đ", remain: "Hết hàng", image: "/image/comic4.jpg", tag: "Sold Out" },
    { id: "5", name: "Conan - Tập 104", price: "25.000đ", remain: "Còn 50 cuốn", image: "/image/comic5.jpg" },
    { id: "6", name: "Spy x Family - Tập 12", price: "40.000đ", remain: "Còn 15 cuốn", image: "/image/comic6.jpg", tag: "New" },
    { id: "7", name: "Dragon Ball Super - Tập 20", price: "30.000đ", remain: "Còn 8 cuốn", image: "/image/comic7.jpg" },
    { id: "8", name: "Thanh Gươm Diệt Quỷ - Boxset", price: "1.200.000đ", remain: "Còn 2 bộ", image: "/image/comic8.jpg", tag: "Limited" },
    
  ];

  const filteredComics = comics.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add(styles.active);
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll(`.${styles.reveal}`);
    hiddenElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredComics]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* GIỮ LẠI HERO BANNER Ở ĐÂY */}
        <section className={`${styles.heroSection} ${styles.reveal}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>Mới nhất 2026</span>
            <h2 className={styles.heroTitle}>Thế Giới Truyện Tranh</h2>
            <p className={styles.heroSubtitle}>Nơi hội tụ những bộ Manga hot nhất hiện nay.</p>
            <div className={styles.heroActions}>
              <button className={styles.heroBtnPrimary}>Xem ngay</button>
              <button className={styles.heroBtnSecondary}>Lịch phát hành {'>'}</button>
            </div>
          </div>
          <div className={styles.heroImage}>
             <Image src="/image/banner-manga1.jpg" alt="Hero" width={500} height={350} priority />
          </div>
        </section>

        <div className={styles.item1}>
          <div className={styles.mainContent}>
            <h2 className={styles.sectionHeading}>Sản phẩm nổi bật</h2>
            
            <div className={styles.productGrid}>
              {filteredComics.map((c) => (
                <Link href={`/${c.id}`} key={c.id} className={styles.productLink}>
                  <div className={`${styles.product} ${styles.reveal}`}>
                    {c.tag && <span className={styles.badge}>{c.tag}</span>}
                    <div className={styles.productImage}>
                      <Image src={c.image} alt={c.name} width={200} height={280} />
                    </div>
                    <div className={styles.productName}>{c.name}</div>
                    <div className={styles.productPrice}>{c.price}</div>
                    <div className={styles.productRemain}>{c.remain}</div>
                    <button className={styles.cartBtn}>Xem chi tiết</button>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SIDEBAR BÊN PHẢI */}
          <aside className={`${styles.item2} ${styles.reveal}`}>
            <div className={styles.sidebarBox}>
              <h4>🔥 Khuyến mãi</h4>
              <p>Giảm ngay 10% khi mua trọn bộ Manga.</p>
            </div>
            <div className={styles.sidebarBox}>
              <h4>📅 Lịch phát hành</h4>
              <p>Theo dõi lịch ra mắt định kỳ vào thứ 2, thứ 6.</p>
            </div>
            <div className={styles.sidebarBox}>
              <h4>🚚 Giao hàng 2H</h4>
              <p>Miễn phí giao nhanh nội thành cho đơn từ 200k.</p>
            </div>
            <div className={styles.sidebarBox}>
              <h4>🛡️ Bản quyền</h4>
              <p>100% truyện chính hãng từ các NXB lớn.</p>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}