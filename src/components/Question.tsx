import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import iconSmile from '@/assets/images/icon-smile.svg'
const Question = () => {
  return (
    <div className='w-full min-h-[350px] pt-[100px] bg-primary pb-[100px]'>
      <div className='relative w-full h-max'>
        <h1 className='max-w-[70%] text-[50px] font-[800] text-center m-auto uppercase text-primary '>
          Câu hỏi thường gặp
        </h1>

        <div className='absolute bottom-[-40px] right-[350px] w-[100px] h-[100px] z-10'>
          <img src={iconSmile} alt='' />
        </div>
      </div>
      <Accordion type='single' collapsible className='mt-[50px] text-black'>
        <AccordionItem value='item-1' className='p-5'>
          <AccordionTrigger className='text-[25px] font-bold'>
            NGÂN SÁCH DÀNH CHO MỘT THIẾT KẾ TỐT NHƯ THẾ NÀO?
          </AccordionTrigger>
          <AccordionContent className='h-max text-[16px]'>
            Trong giai đoạn doanh nghiệp Việt Nam đều hướng đến những giải pháp tinh gọn nhưng hiệu quả, 9AM Media định
            hướng đồng hành doanh nghiệp với các gói giá cạnh tranh chỉ từ 1000.000 đồng cho một dịch vụ chất lượng,
            đúng định hướng chiến lược.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-2' className='p-5'>
          <AccordionTrigger className='text-[25px] font-bold'>TÔI CÓ THỂ NHẬN THÊM CÁC CHÍNH SÁCH HẬU MÃI NÀO?</AccordionTrigger>
          <AccordionContent className='h-max text-[16px]'>
            Đối với giải pháp dịch vụ bên 9AM Media, khách hàng sẽ ghi nhận rõ hơn về hiệu quả tích cực cả việc đổi mới
            khi đồng hành cùng 9AM Media với gói Marketing đồng hành. Giải pháp đồng hành Marketing và Sản xuất Media
            đuợc ưu đãi 10% chi phí hợp đồng.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-3' className='p-5'>
          <AccordionTrigger className='text-[25px] font-bold'>9AM MEDIA KHÁC BIỆT SO VỚI ĐƠN VỊ KHÁC NHƯ THẾ NÀO?</AccordionTrigger>
          <AccordionContent className='h-max text-[16px]'>
            9AM Media luôn tự tin với ưu điểm vượt trội đến từ những thiết kế tốt của mình, nhờ việc đảm bảo được sáu
            khía cạnh: <br />
            (1) Tinh gọn trong hoạ tiết, đường nét.
            <br /> (2) Mạnh mẽ trong ứng dụng màu sắc thiên nhiên Việt Nam.
            <br />
            (3) Logic và tiện lợi trong nghệ thuật sắp đặt.
            <br /> (4) Tối ưu hoá trong trải nghiệm khách hàng.
            <br /> (5) Nhất quán khi ứng dụng trên nhiều điểm chạm.
            <br /> (6) Nổi bật và chuyên nghiệp trong cùng không gian trưng bày với nhãn hàng quốc tế.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Question
