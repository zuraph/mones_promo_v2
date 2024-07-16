import {Trans, useTranslation} from 'react-i18next'
import cx from 'classnames'
import RuleItem from './components/RuleItem/RuleItem'
import {i18TagMap} from './helpers/helpers'
import Leaderboard from './components/Leaderboard/Leaderboard'
import {useCallback, useEffect, useState} from 'react'
import types from './store/types'
import {useDispatch, useSelector} from 'react-redux'
import {useResizeDetector} from 'react-resize-detector'
import {getBoards, setActiveBoard, setMobMode} from './store/actions'
import moment from 'moment'
import 'moment/locale/ka'
import 'moment/locale/ru'
import DateSlider from './components/DateSlider/DateSlider'
import AuthContentLoader from './components/ContentLoaders/AuthContentLoader'
import {gift, prize} from "./img";
import slots from './slots.jsx'
import Card from "./components/Card/Card";

import 'swiper/css';
import 'swiper/css/pagination';

import {Swiper, SwiperSlide} from "swiper/react";
import {left, right} from "./index";
import {Navigation, Pagination} from "swiper";


const App = () => {
    const {t, i18n} = useTranslation()
    moment.locale(i18n.language)
    const activeBoard = useSelector(state => state?.activeBoard)
    const date = useSelector(state => state?.date)
    const dateFrom = useSelector(state => state?.dateFrom)
    const dateTo = useSelector(state => state?.dateTo)
    const mob = useSelector(state => state?.mob)
    const auth = useSelector(state => state?.auth)
    const firstLoad = useSelector(state => state?.firstLoad)

    const gameMobUrl = '//www.lider-bet.com/ka/play/volt'
    const gameWebUrl = '//www.lider-bet.com/ka/play/volt'

    const dispatch = useDispatch()
    const onResize = useCallback((width, height) => {
        if (width <= 900) {
            dispatch(setMobMode(true))
        } else {
            dispatch(setMobMode(false))
        }

        // set frame height
        try {
            //window.top.setHeight(height)
            setTimeout(() => {
                if (window.top.setHeight) {
                    //console.log(2,document.querySelector('body').offsetHeight)
                    window.top.setHeight(document.querySelector('body').offsetHeight + 100)
                }
            }, 100)

        } catch (e) {
        }

    }, [dispatch])
    const {ref} = useResizeDetector({
        onResize: onResize,
        refreshMode: 'debounce',
        refreshRate: 50
    })

    useEffect(() => {
        // get language
        try {
            const lang = window.top.getLang()
            if (lang) {
                i18n.changeLanguage(lang)
                moment.locale(lang)
            }
        } catch (e) {
        }
    }, [i18n])

    useEffect(() => {
        dispatch(getBoards())
    }, [dispatch])


    // const [games, setGames] = useState([
    //     {name: "Book Of Demi Gods II", image: slot},
    //     {name: "Book Of Demi Gods II", image: slot},
    //     {name: "Book Of Demi Gods II", image: slot},
    //     {name: "Book Of Demi Gods II", image: slot},
    //     {name: "Book Of Demi Gods II", image: slot},
    //     {name: "Book Of Demi Gods II", image: slot},
    //     {name: "Book Of Demi Gods II", image: slot},
    //     // Добавьте больше игр по необходимости
    // ]);

    const [games, setGames] = useState(slots.map(slot => ({
        name: slot.name,
        image: slot.img,
        play: slot.play
    })));
    // const [games, setGames] = useState(slots);


    return (
        <main ref={ref}>
            <header>
                <div className="title"
                     dangerouslySetInnerHTML={{__html: t('translation:header')}}>
                </div>
                <div className={cx('logo', i18n.language)}/>
                <div className="photos-container">
                    <div className="prize-card">
                        <div className="prize-content">
                            <img src={prize} alt="img"/>
                            <div className="details-container">
                                <div className="days-count">
                                    <span> 364 დღე </span>
                                </div>
                                <div className="prizes-info">
                                    <span>10 000 პრიზი ყოველდღე </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/*<div className="sup-title">
					<span>{t('translation:sup_title')}</span>
				</div>*/}
                {/*<div className="sub-title">*/}
                {/*	<span>{t('translation:sub_title')}</span>*/}
                {/*</div>*/}
                <div className={cx('toolbar', {authorized: auth})}>
                    <div className="dates">
                        <div className="start-date">
                            <span className="date">{moment(dateFrom).format(types.DATE_FORMAT_DMY)} </span>
                            <div className="event-name">{t('translation:dates.start_name')}</div>
                        </div>
                        <div className="divider"/>
                        <div className="end-date">
                            <span className="date">{moment(dateTo).format(types.DATE_FORMAT_DMY)} </span>
                            <div className="event-name">{t('translation:dates.end_name')}</div>
                        </div>
                    </div>

                    {/*<div className="min-max">*/}
                    {/*	<p>{t('translation:cashback_min')} <span>5</span></p>*/}
                    {/*	<p>{t('translation:cashback_max')} <span>1000</span></p>*/}
                    {/*</div>*/}


                    {auth === 2 && <div className="auth-panel">
                        <div className="avatar"/>
                        <div className="auth-text">{t('translation:auth_prompt')}</div>

                        <div className="auth-btn" onClick={() => {
                            try {
                                window.top.check_auth({code: 'auth'}, () => {
                                        window.top.location.reload()
                                    }
                                )
                            } catch (e) {
                            }
                        }}>{t('translation:login')}</div>
                    </div>
                    }
                </div>

            </header>

            {/*<section>*/}
            {/*<DateSlider/>
				
				<article className={cx({ active: true })}>
					<nav>
						<div className={cx({ 'active': activeBoard === types.BET_COUNT })}
						     onClick={() => dispatch(setActiveBoard(types.BET_COUNT))}>
							{t('translation:tabs.tickets')}
						</div>
						<div className={cx({ 'active': activeBoard === types.MAX_COEF })}
						     onClick={() => dispatch(setActiveBoard(types.MAX_COEF))}>
							{t('translation:tabs.odd')}
						</div>
						<div className={cx({ 'active': activeBoard === types.TOTAL_WIN })}
						     onClick={() => dispatch(setActiveBoard(types.TOTAL_WIN))}>
							{t('translation:tabs.win')}
						</div>
					</nav>
					<Leaderboard/>
				</article>*/}
            {/*	*/}
            {/*	<figure>*/}
            {/*		<div className="banner-head">*/}
            {/*			<div className="icon"/>*/}
            {/*			<div className="titles">*/}
            {/*				<h2>{t('translation:banner_title')}</h2>*/}
            {/*				<h4>{t('translation:banner_subtitle')}</h4>*/}
            {/*			</div>*/}
            {/*		</div>*/}
            {/*		<div className="labels around">*/}
            {/*			<label>*/}
            {/*				<span className="title">{t('translation:max_bet')}</span>*/}
            {/*				<span className="value bet">1 000₾</span>*/}
            {/*			</label>*/}
            {/*			<label>*/}
            {/*				<span className="title">{t('translation:max_win')}</span>*/}
            {/*				<span className="value win">100 000₾</span>*/}
            {/*			</label>*/}
            {/*			/!*<label>*/}
            {/*				<span className="title">{t('translation:tkt_count')}</span>*/}
            {/*				<span className="value count">10</span>*/}
            {/*			</label>*!/*/}
            {/*		</div>*/}
            {/*	</figure>*/}
            {/*</section>*/}
            <section className="games-section">
                <div className="promotion-games-button">
                    <p> აქციაში მონაწილეობენ შემდეგი თამაშები</p>
                </div>
                {/*<div className="cards-container">*/}
                {/*    {games?.map((game, index) => (*/}
                {/*        <Card key={index} image={game?.image} title={game?.title} />*/}
                {/*    ))}*/}
                {/*</div>*/}
                <div className="slider-container">
                    <button className="arrow-left  arrow">
                        <img src={left} alt="Right"/>
                    </button>
                    <div className="cards-container">

                        <Swiper
                            style={{
                                maxWidth: "1500px",
                                width: "100%",
                                margin: "0 auto",
                            }}

                            slidesPerView={4}
                            spaceBetween={24}
                            navigation={{nextEl: ".arrow-left", prevEl: ".arrow-right"}}
                            modules={[Pagination, Navigation]}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                500: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                820: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1100: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper2"
                        >
                            {games?.map((game, index) => (
                                <SwiperSlide key={index}>
                                    <Card image={game?.image} name={game?.name} play={game?.play}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <button className="arrow-right arrow">
                        <img src={right} alt="right "/>
                    </button>
                </div>
            </section>
            <div className="shadow"/>


            <section className="winnings-section">

                <div className="title-container">
                    <p dangerouslySetInnerHTML={{__html: t('translation:prize-title')}}/>
                </div>


                <div className="winning-container">
                    <div className="daily-container">
                        <ul>
                            <li className="daily-title">{t('translation:board.daily-win')}</li>
                            <li className="daily-prize">{t('translation:board.daily-prize')}</li>
                            <li className="daily-note"
                                dangerouslySetInnerHTML={{__html: t('translation:board.daily-title')}}/>

                        </ul>

                        <ul className="standing-titles">
                            <li>   {t('translation:board.prizes-number')}</li>
                            <li> {t('translation:board.winning')}</li>
                        </ul>

                        <div className="standing-container">
                            <ul>
                                <li className="standing-item">
                                    <div className="prize-count">1</div>
                                    <div className="winnings">
                                    <span className="gift-icon">
                                        <img src={gift} alt="gift"/>
                                    </span>
                                        <div className="winning-amount">
                                            <span className="total"> 2 500 X </span>
                                            {/*<span className="currency"> GEL </span>*/}
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">2</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 1 000 X </span>
                                            {/*<span className="currency"> GEL </span>*/}
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">5</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 500 X </span>
                                            {/*<span className="currency"> GEL </span>*/}
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">12</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total">250 X </span>
                                            {/*<span className="currency"> GEL </span>*/}
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">20</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 100 X </span>
                                            {/*<span className="currency"> GEL </span>*/}
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">70</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 50 X </span>
                                            {/*<span className="currency"> GEL </span>*/}
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">160</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 20 X </span>
                                            {/*<span className="currency"> GEL </span>*/}
                                        </div>
                                    </div>
                                </li>

                                <li className="standing-item">
                                    <div className="prize-count">580</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 10 X </span>
                                            {/*<span className="currency"> GEL </span>*/}
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">500</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 10 Free Spins Bonus </span>
                                            {/*<span className="currency"> GEL </span>*/}
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">5 100</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 5 Free Spins Bonus</span>
                                            {/*<span className="currency"> GEL </span>*/}
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">50</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 1 Instant Bonus</span>
                                            {/*<span className="currency"> GEL </span>*/}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="daily-container">
                        <ul>
                            <li className="daily-title"
                                dangerouslySetInnerHTML={{__html: t('translation:board.friday-win')}}/>
                            <li className="daily-prize"
                                dangerouslySetInnerHTML={{__html: t('translation:board.friday-prize')}}/>
                            <li className="daily-note"
                                dangerouslySetInnerHTML={{__html: t('translation:board.friday-title')}}/>


                        </ul>

                        <ul className="standing-titles">
                            <li dangerouslySetInnerHTML={{__html: t('translation:board.prize-position')}}/>
                            <li dangerouslySetInnerHTML={{__html: t('translation:board.winning')}}/>
                        </ul>

                        <div className="standing-container">
                            <ul>
                                <li className="standing-item">
                                    <div className="prize-count">1</div>
                                    <div className="winnings">
                                    <span className="gift-icon">
                                        <img src={gift} alt="gift"/>
                                    </span>
                                        <div className="winning-amount">
                                            <span className="total"> 15 000  </span>
                                            <span className="currency"> ₾ </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">2</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 7 500  </span>
                                            <span className="currency"> ₾ </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">3</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 3 000  </span>
                                            <span className="currency"> ₾ </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">4-5</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 1 500  </span>
                                            <span className="currency"> ₾ </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">6-20</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 300  </span>
                                            <span className="currency"> ₾ </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">21-40</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 150 </span>
                                            <span className="currency">₾</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">41-150</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 150  </span>
                                            <span className="currency"> ₾ </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">151-300</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total">60 </span>
                                            <span className="currency"> ₾ </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">301-500</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 30  </span>
                                            <span className="currency"> ₾ </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="standing-item">
                                    <div className="prize-count">501-3 500-მდე</div>
                                    <div className="winnings">
                                        <span>  <img src={gift} alt="gift"/></span>
                                        <div className="winning-amount">
                                            <span className="total"> 15 </span>
                                            <span className="currency"> ₾ </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <div className="container">
                <div className="shadow2"/>
                {/*<div className="footer-play-wrapper">*/}
                {/*    <a className="play-btn-link"*/}
                {/*       target="_blank"*/}
                {/*       rel="noreferrer"*/}
                {/*       href={mob ? gameMobUrl : gameWebUrl}>{t('translation:play_game')}</a>*/}
                {/*</div>*/}
                <section className="rules">
                    <RuleItem title={t('translation:faq.f1-title')}>
                        <Trans i18nKey={t('translation:faq.f1-content')} components={i18TagMap()}/>
                    </RuleItem>
                    <RuleItem title={t('translation:faq.f3-title')}>
                        <Trans i18nKey={t('translation:faq.f3-content')} components={i18TagMap()}/>
                    </RuleItem>
                    <RuleItem title={t('translation:faq.f4-title')}>
                        <Trans i18nKey={t('translation:faq.f4-content')} components={i18TagMap()}/>
                    </RuleItem>
                    <RuleItem title={t('translation:faq.f2-title')}>
                        <Trans i18nKey={t('translation:faq.f2-content')} components={i18TagMap()}/>
                    </RuleItem>
                </section>
            </div>
        </main>
    );
}

export default App