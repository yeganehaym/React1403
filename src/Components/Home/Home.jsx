import {Categories} from "../Category/Categories";
import '../../Home.css'
import {AllCats} from "../Category/AllCats";
import {Foods} from "../Foods/Foods";
export function Home(){
    return <>
        <div className="top-bar">
            <span>سفره خانه سنتی سرای امیر {process.env.REACT_APP_Text}</span>
        </div>

        <div className="bg-parent">
            <div className="bg">


            </div>
            <span className="text text1">رستوران</span>
            <span className="text text2">فست فود</span>
            <span className="text text3">کافه و بستنی</span>

        </div>

       <Categories />

<Foods></Foods>


        <section className="gmap">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13234.230714718176!2d51.43272182305863!3d33.978206723595534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9684626d88175b%3A0x11569a1cbb5e6140!2sAgha%20Bozorg%20Mosque!5e0!3m2!1sen!2s!4v1727136616337!5m2!1sen!2s"
                width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>

        <div className="my-5"></div>

        <div className="row">
            <div className="col-sm-12 col-lg-4  d-flex align-items-center flex-column my-sm-4 my-lg-0">
                <h4>آدرس</h4>
                <span className="footer-info">کاشان، خیابان بابا افضل، کوچه حدیث 1</span>
            </div>

            <div className="col-sm-12 col-lg-4  d-flex align-items-center flex-column  my-sm-4 my-lg-0">
                <h4>ساعات کاری</h4>
                <span className="footer-info">همه روزه از ساعت 17 الی 2 نیمه شب</span>
            </div>

            <div className="col-sm-12 col-lg-4 d-flex align-items-center flex-column  my-sm-4 my-lg-0">
                <h4>تماس با ما</h4>

                <div className="d-flex align-items-start flex-column" style={{direction:"ltr"}}>
                <span className="footer-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                      </svg>
                      03155574507
                </span>

                    <span className="footer-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-telegram" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                      </svg>
                      telegram
                </span>

                    <span className="footer-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-instagram" viewBox="0 0 16 16">
                        <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                      </svg>
                      instagram
                </span>
                </div>
            </div>
        </div>

        <div className="line"></div>

        <div className="footer">
            Created By <a href="http://www.aliyeganeh.ir">AliYeganeh.ir</a>
        </div>


        <div className="space"></div>
    </>
}