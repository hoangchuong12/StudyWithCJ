function Footer() {
    return (
        <footer className="bg-dark text-white mt-5 pt-4 pb-3">
            <div className="container text-center text-md-start">
                <div className="row">
                    {/* Cột 1: Giới thiệu */}
                    <div className="col-md-4 mb-3">
                        <h5 className="text-uppercase">📘 StudyWithCJ</h5>
                        <p>
                            Nền tảng học tập cá nhân hóa, hỗ trợ người học Việt phát triển kỹ năng toàn diện.
                        </p>
                    </div>

                    {/* Cột 2: Liên kết nhanh */}
                    <div className="col-md-4 mb-3">
                        <h6 className="text-uppercase">Liên kết nhanh</h6>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white text-decoration-none">Trang chủ</a></li>
                            <li><a href="/gioi-thieu" className="text-white text-decoration-none">Giới thiệu</a></li>
                            <li><a href="/khoa-hoc" className="text-white text-decoration-none">Khóa học</a></li>
                            <li><a href="/lien-he" className="text-white text-decoration-none">Liên hệ</a></li>
                        </ul>
                    </div>

                    {/* Cột 3: Thông tin liên hệ */}
                    <div className="col-md-4 mb-3">
                        <h6 className="text-uppercase">Liên hệ</h6>
                        <p>Email: <a href="mailto:info@studywithcj.vn" className="text-white">info@studywithcj.vn</a></p>
                        <p>Hotline: 0813 399 400</p>
                        <p>Địa chỉ: TP.HCM, Việt Nam</p>
                    </div>
                </div>
                <hr className="border-top border-light" />
                <p className="text-center mb-0">© {new Date().getFullYear()} StudyWithCJ. Đã đăng ký bản quyền.</p>
            </div>
        </footer>
    )
}

export default Footer
