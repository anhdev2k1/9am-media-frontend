import { Link } from 'react-router-dom'
import './quang-cao.scss'
const QuangCao = () => {
  return (
    <div className='hero-banner text-black min-h-[500px]'>
      <div className='max-w-[1200px] m-auto'>
        <div className='hero-content relative z-[2] flex flex-col items-center pt-[50px]'>
          <div className='title max-sm:!text-[40px] px-[10px]'>Hệ sinh thái giải pháp Meta</div>
          <div className='sub-title max-sm:!text-[30px] px-[10px]'>Tối ưu hóa, bảo vệ và phát triển bền vững</div>
          <div className='content max-sm:!text-[20px]'>
            <div className='form-check max-sm:!px-[10px]'>
              <img src='/images/check.png' alt='' className='max-sm:hidden' />
              <span>Đối tác chính thức của Meta năm thứ 3</span>
            </div>
            <div className='form-check max-sm:!px-[10px]'>
              <img src='/images/check.png' alt='' className='max-sm:hidden' />
              <span>Kinh nghiệm triển khai trên nhiều lĩnh vực</span>
            </div>
            <div className='form-check max-sm:!px-[10px]'>
              <img src='/images/check.png' alt='' className='max-sm:hidden' />
              <span>Cung cấp đa giải pháp, làm việc chuyên nghiệp và uy tín</span>
            </div>
          </div>
          <a type='button' className='btn btn-primary btn-review-solution' href='https://zalo.me/0703363333'>
            Tìm hiểu giải pháp
          </a>
          <div className='w-[583px] m-auto'>
            <img src='/images/model-cam.png' alt='' className='max-sm:w-[70%]' />
          </div>
        </div>
      </div>
      <div className='bg-[#EDF3FE]'>
        <div className='risk  max-w-[1200px] m-auto min-h-[900px] pt-[50px]'>
          <div className='risk-point'>
            <img src='/images/risk.png' alt='' />
          </div>
          <div className='title text-center max-sm:!text-[30px] max-sm:px-[10px]'>
            Những rủi ro ẩn giấu từ nền tảng, bạn có đang gặp phải ?!
          </div>
          <div className='content flex items-center justify-between max-sm:flex-col max-sm:px-[10px]'>
            <div className='flex mt-[50px] gap-[30px]'>
              <div className='flex flex-col gap-[47px]'>
                <div className='customer text-right max-sm:!text-[16px]'>Chi phí quảng cáo quá cao </div>
                <div className='customer text-right max-sm:!text-[16px]'> Chính sách nền tảng thay đổi liên tục </div>
                <div className='customer text-right max-sm:!text-[16px]'> Vi phạm tiêu chuẩn nền tảng </div>
                <div className='customer text-right max-sm:!text-[16px]'> Khó khăn khẳng định uy tín thương hiệu </div>
              </div>
              <div>
                <img src='/images/risk-point.png' alt='' />
              </div>
            </div>

            <div className='flex min-h-[400px] mt-[50px] items-end '>
              <div className='flex flex-row-reverse gap-[30px]'>
                <div className='flex flex-col gap-[47px]'>
                  <div className='customer max-sm:!text-[16px]'>Chi phí quảng cáo quá cao </div>
                  <div className='customer max-sm:!text-[16px]'> Chính sách nền tảng thay đổi liên tục </div>
                  <div className='customer max-sm:!text-[16px]'> Vi phạm tiêu chuẩn nền tảng </div>
                  <div className='customer max-sm:!text-[16px]'> Khó khăn khẳng định uy tín thương hiệu </div>
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
        <div className='absolute top-[-400px] left-[-60px] w-[600px] max-sm:w-[400px] max-sm:top-[-100px] max-sm:left-[0]'>
          <img src='/images/noti-1.png' alt='' />
        </div>
        <div className='pt-[250px] pb-[120px]'>
          <div className='title text-center flex items-center justify-center max-sm:!text-[30px] px-[10px]'>
            Lựa chọn giải pháp dành cho bạn
          </div>
          <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-[50px] py-[50px] max-sm:px-[10px]'>
            <div className='flex flex-col gap-[10px] p-5 col justify-between'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/protect.png' alt='' />
                <span className='text-[17px] font-[600] text-primary'>Công cụ bảo hộ thương hiệu & bản quyền</span>
              </div>
              <ul className='indent-[20px] flex flex-col gap-[10px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Cung cấp công cụ bảo hộ thương hiệu</li>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  ★ Cung cấp báo cáo và phân tích liên quan đến bảo vệ thương hiệu
                </li>
              </ul>
              <div>
                <Link to='/' className='seemore'>
                  Xem thêm
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col justify-between'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/combine.png' alt='' />
                <span className='text-[17px] font-[600] text-primary'>Quảng cáo Meta</span>
              </div>
              <ul className='indent-[20px] flex flex-col gap-[10px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Tối ưu hóa chiến dịch quảng cáo</li>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Phân tích và điều chỉnh nội dung quảng cáo</li>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Cung cấp giải pháp quảng cáo sáng tạo</li>
              </ul>
              <div>
                <Link to='/' className='seemore'>
                  Xem thêm
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col justify-between'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/repair.png' alt='' />
                <span className='text-[17px] font-[600] text-primary'>Khôi phục tài nguyên số</span>
              </div>
              <ul className='indent-[20px] flex flex-col gap-[10px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  ★ Khôi phục tài khoản và tài nguyên số bị mất, khóa
                </li>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Tư vấn quy tình và chính sách bảo mật</li>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Hỗ trợ nhanh chóng, hiệu quả và kịp thời</li>
              </ul>
              <div>
                <Link to='/' className='seemore'>
                  Xem thêm
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col justify-between'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/ads.png' alt='' />
                <span className='text-[17px] font-[600] text-primary'>Kiếm tiền quảng cáo trong luồng</span>
              </div>
              <ul className='indent-[20px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Tối ưu hóa nội dung quảng cáo trong luồng</li>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Phân tích hiệu quả quảng cáo</li>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Đưa ra báo cáo và giải pháp cho chiến dịch</li>
              </ul>
              <div>
                <Link to='/' className='seemore'>
                  Xem thêm
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col justify-between'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/donate.png' alt='' />
                <span className='text-[17px] font-[600] text-primary'>Kích hoạt tính năng quảng cáo livestream</span>
              </div>
              <ul className='indent-[20px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  ★ Cung cấp hướng dẫn thực hiện Livestream hiệu quả
                </li>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  ★ Cung cấp báo cáo và phân tích liên quan đến bảo vệ thương hiệu
                </li>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  ★ Đánh giá, phân tích kết quả để cải thiện chiến lược
                </li>
              </ul>
              <div>
                <Link to='/' className='seemore'>
                  Xem thêm
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col justify-between'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/verified.png' alt='' />
                <span className='text-[17px] font-[600] text-primary'>Xác minh tích xanh</span>
              </div>
              <ul className='indent-[20px] flex flex-col gap-[10px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Cung cấp dịch vụ xác minh tích xanh</li>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  ★ Hướng dẫn quy trình xác minh, yêu cầu cần thiết
                </li>
                <li className='text-[16px] font-[500] text-[#676767] '>★ Cung cấp dịch vụ tư vấn và hỗ trợ kịp thời</li>
              </ul>
              <div>
                <Link to='/' className='seemore'>
                  Xem thêm
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col justify-between'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/technology.png' alt='' />
                <span className='text-[17px] font-[600] text-primary'>Build hệ thống tài nguyên số</span>
              </div>
              <ul className='indent-[20px] flex flex-col gap-[10px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  ★ Hỗ trợ xây dựng và quản lý hệ thống tài nguyên
                </li>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Cung cấp công cụ quản lý nội dung</li>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  ★ Dịch vụ tư vấn và tích hợp, tối ưu hóa tài nguyên số
                </li>
              </ul>
              <div>
                <Link to='/' className='seemore'>
                  Xem thêm
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col justify-between'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/shopping.png' alt='' />
                <span className='text-[17px] font-[600] text-primary'>Giỏ hàng livestream cho Fanpage</span>
              </div>
              <ul className='indent-[20px] flex flex-col gap-[10px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Cung cấp giải pháp giỏ hàng trực tuyến</li>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  ★ Hướng dẫn cách thiết lập và quản lý giỏ hàng
                </li>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  ★ Phân tích dữ liệu giỏ hàng để cải thiện quy trình, nâng cao trải nghiệm người dùng
                </li>
              </ul>
              <div>
                <Link to='/' className='seemore'>
                  Xem thêm
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-[10px] col justify-between'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/groups.png' alt='' />
                <span className='text-[17px] font-[600] text-primary'>
                  Cung cấp Fanpage, Group, Profile theo yêu cầu
                </span>
              </div>
              <ul className='indent-[20px] flex flex-col gap-[10px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  ★ Tạo, quản lý Fanpage, Group, Profile theo yêu cầu
                </li>
                <li className='text-[16px] font-[500] text-[#676767]'>★ Hỗ trợ phát triển nội dung và tương tác</li>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  ★ Tư vấn chiến lược tối ưu hóa Fanpage và Group
                </li>
              </ul>
              <div>
                <Link to='/' className='seemore'>
                  Xem thêm
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full flex items-center justify-center'>
            <a type='button' className='btn btn-primary btn-review-solution ' href='https://zalo.me/0703363333'>
              Đăng ký tư vấn
            </a>
          </div>
        </div>
      </div>
      <div className='w-full min-h-[200px] bg-color'>
        <div className='max-w-[1200px] m-auto'>
          <div className='title text-center flex items-center justify-center pt-[50px] max-sm:!text-[30px] px-[10px]'>
            Tại sao nên chọn 9AM Media?
          </div>
          <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 py-10 gap-10 justify-center max-sm:px-[10px]'>
            <div className='flex flex-col gap-[10px] col max-h-[250px]'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/why-choose-05.png' alt='' />
                <span className='text-[17px] font-[600] text-primary'>Chuyên môn đa dạng</span>
              </div>
              <ul className=''>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  Đội ngũ chuyên gia giàu kinh nghiệm trong quảng cáo, bảo hộ thương hiệu và quản lý tài nguyên số, đảm
                  bảo tối ưu hóa chiến dịch hiệu quả.
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-[10px] col max-h-[250px]'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/why-choose-04.svg' alt='' />
                <span className='text-[17px] font-[600] text-primary'>Giải pháp tùy chỉnh</span>
              </div>
              <ul className='gap-[10px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  Cung cấp dịch vụ linh hoạt theo nhu cầu riêng của từng khách hàng, giúp đáp ứng chính xác mong đợi.
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-[10px] col max-h-[250px]'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/why-choose-03.svg' alt='' />
                <span className='text-[17px] font-[600] text-primary'>Công nghệ hiện đại</span>
              </div>
              <ul className='gap-[10px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  Ứng dụng công nghệ mới nhất trong truyền thông số, từ quảng cáo đa nền tảng đến khôi phục tài khoản và
                  bảo vệ thương hiệu.
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-[10px] col max-h-[250px]'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/why-choose-02.png' alt='' width='60px' />
                <span className='text-[17px] font-[600] text-primary'>Hỗ trợ toàn diện</span>
              </div>
              <ul className=' gap-[10px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  Đồng hành cùng khách hàng từ lập kế hoạch đến thực hiện và theo dõi kết quả, đảm bảo thành công cho
                  chiến dịch.
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-[10px] col max-h-[250px]'>
              <div className='flex items-center gap-[10px]'>
                <img src='/images/why-choose-01.png' alt='' />
                <span className='text-[17px] font-[600] text-primary'>Đánh giá khách hàng tích cực</span>
              </div>
              <ul className='indent-[20px] flex flex-col gap-[10px]'>
                <li className='text-[16px] font-[500] text-[#676767]'>
                  Nhận phản hồi tích cực từ khách hàng, khẳng định uy tín và hiệu quả của dịch vụ.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full min-h-[200px]'>
        <div className='max-w-[1200px] m-auto'>
          <div className='title text-center flex items-center justify-center pt-[50px]'>Quyền lợi của khách hàng</div>
          <div className='grid grid-cols-5 max-sm:grid-cols-2 max-sm:px-[10px] gap-10 py-[120px]'>
            <div className='benefit max-sm:!w-full'>
              <div className='absolute top-[-30px] left-[50%] transform translate-x-[-50%]'>
                <img src='/images/group-01.png' alt='' />
              </div>
              <span className='text-[#676767] font-[500]'>
                Được hỗ trợ về phòng Media nếu khách hàng chưa đủ nguồn lực
              </span>
            </div>
            <div className='benefit max-sm:!w-full'>
              <div className='absolute top-[-30px] left-[50%] transform translate-x-[-50%]'>
                <img src='/images/group-02.png' alt='' />
              </div>
              <span className='text-[#676767] font-[500]'>Được hỗ trợ định hướng content giúp gia tăng doanh số</span>
            </div>
            <div className='benefit max-sm:!w-full'>
              <div className='absolute top-[-30px] left-[50%] transform translate-x-[-50%]'>
                <img src='/images/group-03.png' alt='' />
              </div>
              <span className='text-[#676767] font-[500]'>
                Được hỗ trợ cập nhật các ứng dụng công nghệ mới nhất, tiết kiệm thời gian, chi phí
              </span>
            </div>
            <div className='benefit max-sm:!w-full'>
              <div className='absolute top-[-30px] left-[50%] transform translate-x-[-50%]'>
                <img src='/images/group-04.png' alt='' />
              </div>
              <span className='text-[#676767] font-[500]'>
                Được hỗ trợ xây team sale, kịch bản sale gia tăng tỉ lệ chuyển đổi
              </span>
            </div>
            <div className='benefit max-sm:!w-full'>
              <div className='absolute top-[-30px] left-[50%] transform translate-x-[-50%]'>
                <img src='/images/group-05.png' alt='' />
              </div>
              <span className='text-[#676767] font-[500]'>
                Được hỗ trợ xây quy trình chăm sóc khách hàng, gia tăng tỉ lệ bán lại
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full min-h-[300px] bg-[#0013A1]'>
        <div className='title text-center flex items-center justify-center pt-[50px] max-sm:!text-[30px] px-[10px] !text-white'>
          Tiêu chí của 9AM Media
        </div>
        <div className='max-w-[1200px] m-auto'>
          <div className='grid grid-cols-2 py-[50px] justify-between gap-[10px] max-sm:px-[10px]'>
            <div>
              <img src='/images/win-03.jpg' alt='' />
            </div>
            <div>
              <img src='/images/win-04.jpg' alt='' />
            </div>
            <div>
              <img src='/images/win-05.jpg' alt='' />
            </div>
            <div>
              <img src='/images/win-06.jpg' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full min-h-[300px] bg-[#0013A1]'>
        <div className='title text-center flex items-center justify-center pt-[50px] max-sm:!text-[30px] px-[10px] !text-white'>
          Showcase
        </div>
        <div className='max-w-[1200px] m-auto'>
          <div className='grid grid-cols-2 py-[50px] justify-between gap-[10px] max-sm:px-[10px]'>
            <div>
              <img src='/images/case-1.jpg' alt='' />
            </div>
            <div>
              <img src='/images/case-2.jpg' alt='' />
            </div>
            <div>
              <img src='/images/case-3.jpg' alt='' />
            </div>
            <div>
              <img src='/images/case-4.jpg' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuangCao
