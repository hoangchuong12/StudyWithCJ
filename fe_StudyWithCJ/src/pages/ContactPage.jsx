import { useState } from 'react';

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('✅ Gửi liên hệ thành công!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center text-center mb-4">
                <div className="col-md-8">
                    <h2 className="text-primary fw-bold">Liên hệ với chúng tôi</h2>
                    <p className="text-muted">Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào, hãy điền vào biểu mẫu bên dưới.</p>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6 bg-light p-4 rounded shadow-sm">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Họ và tên</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Nguyễn Văn A"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="example@email.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Nội dung</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Tôi muốn hỏi về..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 fw-bold">
                            Gửi liên hệ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
