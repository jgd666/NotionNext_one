import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
import CONFIG from '../config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm'>
      {/* 颜色过度区 */}
      <div
        id='color-transition'
        className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white  dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'
      />

      {/* 社交按钮 */}
          <div className='mx-auto w-full px-4 md:w-2/3 lg:w-6/12 xl:w-6/12'>
              <div className='mb-10 w-full bg-[#f1f3f7] p-2 flex flex-col items-center rounded-lg hover:scale-110 ease-in-out'>
                <h4 className='mb-3 text-lg font-semibold text-black mt-4'>
                  {siteConfig('HEO_FOOTER_BLOG_LATEST_TITLE', null, CONFIG)}
                </h4>
                <p className='text-sm text-black text-center mb-3'>
                  扫描二维码添加我的个人微信，实时解答各种疑问。
                </p>
                <div className='flex flex-row gap-8 items-center'>
                  <div
                    className="mb-4 sm:mb-8 h-[100px] w-[100px] flex justify-center items-center"
                  >
                    <img
                      src={siteConfig('HEO_WX', null, CONFIG)}
                      alt="about image"
                      className="h-[100px] w-[100px] object-cover object-center"
                    />
                  </div>
                  <div
                    className="mb-4 sm:mb-8 h-[100px] w-[100px] flex justify-center items-center"
                  >
                    <img
                      src={siteConfig('HEO_WX', null, CONFIG)}
                      alt="about image2"
                      className="h-[100px] w-[100px] object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>


      <br />

      {/* 底部页面信息 */}
      <div
        id='footer-bottom'
        className='w-full h-20 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F]'>
        <div id='footer-bottom-left'>
          NotionNext {siteConfig('VERSION')} <i className='fas fa-copyright' />{' '}
          {`${copyrightDate}`} <i className='mx-1 animate-pulse fas fa-heart' />{' '}
          <a
            href={siteConfig('LINK')}
            className='underline font-bold dark:text-gray-300 '>
            {siteConfig('AUTHOR')}
          </a>
          .
        </div>

        <div id='footer-bottom-right'>
          {siteConfig('BEI_AN') && (
            <>
              <i className='fas fa-shield-alt' />{' '}
              <a href='https://beian.miit.gov.cn/' className='mr-2'>
                {siteConfig('BEI_AN')}
              </a>
            </>
          )}

          <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye' />
            <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
          </span>
          <span className='pl-2 hidden busuanzi_container_site_uv'>
            <i className='fas fa-users' />{' '}
            <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
          </span>

          {/* <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}</h1> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
