import { Link } from 'react-router-dom'
import './quang-cao.scss'
const QuangCao = () => {
  return (
    <div className='hero-banner text-black min-h-[500px]'>
      <div className='max-w-[1200px] m-auto'>
        <div className='hero-content relative z-[2] flex flex-col items-center pt-[50px]'>
          <div className='title'>Hệ sinh thái giải pháp Meta</div>
          <div className='sub-title'>Tối ưu hóa, bảo vệ và phát triển bền vững</div>
          <div className='content'>
            <div className='form-check'>
              <img src='/images/check.png' alt='' />
              <span>Đối tác chính thức của Meta năm thứ 3</span>
            </div>
            <div className='form-check'>
              <img src='/images/check.png' alt='' />
              <span>Kinh nghiệm triển khai trên nhiều lĩnh vực</span>
            </div>
            <div className='form-check'>
              <img src='/images/check.png' alt='' />
              <span>Cung cấp đa giải pháp, làm việc chuyên nghiệp và uy tín</span>
            </div>
          </div>
          <a type='button' className='btn btn-primary btn-review-solution' href='https://zalo.me/0385958416'>
            Tìm hiểu giải pháp
          </a>
          <div className='w-[700px]'>
            <img src='/images/model-cam.png' alt='' />
          </div>
        </div>
      </div>
      <div className='bg-[#EDF3FE]'>
        <div className='risk  max-w-[1200px] m-auto min-h-[900px] pt-[50px]'>
          <div className='risk-point'>
            <img src='/images/risk.png' alt='' />
          </div>
          <div className='title text-center'>Những rủi ro ẩn giấu từ nền tảng, bạn có đang gặp phải ?!</div>
          <div className='content flex items-center justify-between'>
            <div className='flex mt-[50px] gap-[30px]'>
              <div className='flex flex-col gap-[47px]'>
                <div className='customer text-right'>Chi phí quảng cáo quá cao </div>
                <div className='customer text-right'> Chính sách nền tảng thay đổi liên tục </div>
                <div className='customer text-right'> Vi phạm tiêu chuẩn nền tảng </div>
                <div className='customer text-right'> Khó khăn khẳng định uy tín thương hiệu </div>
              </div>
              <div>
                <img src='/images/risk-point.png' alt='' />
              </div>
            </div>

            <div className='flex min-h-[400px] mt-[50px] items-end '>
              <div className='flex flex-row-reverse gap-[30px]'>
                <div className='flex flex-col gap-[47px]'>
                  <div className='customer'>Chi phí quảng cáo quá cao </div>
                  <div className='customer'> Chính sách nền tảng thay đổi liên tục </div>
                  <div className='customer'> Vi phạm tiêu chuẩn nền tảng </div>
                  <div className='customer'> Khó khăn khẳng định uy tín thương hiệu </div>
                </div>
                <div>
                  <img src='/images/risk-point.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-[100px] max-w-[1200px] m-auto relative min-h-[800px]'>
        <div className='absolute top-[-400px] left-[-200px]'>
          <img src='/images/noti.png' alt='' />
        </div>
        <div className='pt-[350px]'>
          <div className='title text-center flex items-center justify-center'>Lựa chọn giải pháp dành cho bạn</div>
          <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-[50px] pt-[50px]'>
            <div className='flex flex-col gap-[10px] p-5 col'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/protect.png' alt='' />
                <span>Công cụ bảo hộ thương hiệu & bản quyền</span>
              </div>
              <ul>
                <li>Cung cấp công cụ bảo hộ thương hiệu</li>
                <li>Cung cấp báo cáo và phân tích liên quan đến bảo vệ thương hiệu</li>
              </ul>
              <div>
                <Link to='/'>Xem thêm</Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/combine.png' alt='' />
                <span>Công cụ bảo hộ thương hiệu & bản quyền</span>
              </div>
              <ul>
                <li>Cung cấp công cụ bảo hộ thương hiệu</li>
                <li>Cung cấp báo cáo và phân tích liên quan đến bảo vệ thương hiệu</li>
              </ul>
              <div>
                <Link to='/'>Xem thêm</Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/repair.png' alt='' />
                <span>Công cụ bảo hộ thương hiệu & bản quyền</span>
              </div>
              <ul>
                <li>Cung cấp công cụ bảo hộ thương hiệu</li>
                <li>Cung cấp báo cáo và phân tích liên quan đến bảo vệ thương hiệu</li>
              </ul>
              <div>
                <Link to='/'>Xem thêm</Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/ads.png' alt='' />
                <span>Công cụ bảo hộ thương hiệu & bản quyền</span>
              </div>
              <ul>
                <li>Cung cấp công cụ bảo hộ thương hiệu</li>
                <li>Cung cấp báo cáo và phân tích liên quan đến bảo vệ thương hiệu</li>
              </ul>
              <div>
                <Link to='/'>Xem thêm</Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/donate.png' alt='' />
                <span>Công cụ bảo hộ thương hiệu & bản quyền</span>
              </div>
              <ul>
                <li>Cung cấp công cụ bảo hộ thương hiệu</li>
                <li>Cung cấp báo cáo và phân tích liên quan đến bảo vệ thương hiệu</li>
              </ul>
              <div>
                <Link to='/'>Xem thêm</Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/verified.png' alt='' />
                <span>Công cụ bảo hộ thương hiệu & bản quyền</span>
              </div>
              <ul>
                <li>Cung cấp công cụ bảo hộ thương hiệu</li>
                <li>Cung cấp báo cáo và phân tích liên quan đến bảo vệ thương hiệu</li>
              </ul>
              <div>
                <Link to='/'>Xem thêm</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuangCao
