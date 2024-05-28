import { Trans, useTranslation } from 'react-i18next'
import cx from 'classnames'
import RuleItem from './components/RuleItem/RuleItem'
import { i18TagMap } from './helpers/helpers'
import Leaderboard from './components/Leaderboard/Leaderboard'
import { useCallback, useEffect } from 'react'
import types from './store/types'
import { useDispatch, useSelector } from 'react-redux'
import { useResizeDetector } from 'react-resize-detector'
import { getBoards, setActiveBoard, setMobMode } from './store/actions'
import moment from 'moment'
import 'moment/locale/ka'
import 'moment/locale/ru'
import DateSlider from './components/DateSlider/DateSlider'
import AuthContentLoader from './components/ContentLoaders/AuthContentLoader'

const App = () => {
	const { t, i18n } = useTranslation()
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
		}
		else {
			dispatch(setMobMode(false))
		}
		
		// set frame height
		try {
			//window.top.setHeight(height)
			setTimeout(() => {
				if(window.top.setHeight){
					//console.log(2,document.querySelector('body').offsetHeight)
					window.top.setHeight(document.querySelector('body').offsetHeight+100)
				}
			},100)
			
		} catch (e) {}
		
	}, [dispatch])
	const { ref } = useResizeDetector({
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
		} catch (e) {}
	}, [i18n])
	
	useEffect(() => {
		dispatch(getBoards())
	}, [dispatch, activeBoard, date])

	
	return (
		<main ref={ref}>
			<header>
				<div className={cx('logo', i18n.language)}/>
				<div className="title">
					{t('translation:header')}
				</div>
				{/*<div className="sup-title">
					<span>{t('translation:sup_title')}</span>
				</div>*/}
				<div className="sub-title">
					<span>{t('translation:sub_title')}</span>
				</div>
				<div className={cx('toolbar', { authorized: auth })}>
					<div className="dates">
						<div className="start-date">
							<span className="date">{moment(dateFrom).format(types.DATE_FORMAT_DM)} 00:00</span>
							<div className="event-name">{t('translation:dates.start_name')}</div>
						</div>
						<div className="divider"/>
						<div className="end-date">
							<span className="date">{moment(dateTo).format(types.DATE_FORMAT_DM)} 23:59</span>
							<div className="event-name">{t('translation:dates.end_name')}</div>
						</div>
					</div>
					<div className="min-max">
						<p>{t('translation:cashback_min')} <span>5</span></p>
						<p>{t('translation:cashback_max')} <span>1000</span></p>
					</div>
					{/*{firstLoad
						? <div className="auth-panel">
							<AuthContentLoader/>
						</div>
						: auth
							? <div className="header-play-wrapper">
								<a className="play-btn-link"
								   target="_blank"
								   rel="noreferrer"
								   href={mob ? gameMobUrl : gameWebUrl}>{t('translation:play_game')}</a>
							</div>
							: <div className="auth-panel">
								<div className="avatar"/>
								<div className="auth-text">{t('translation:auth_prompt')}</div>
								<div className="auth-btn" onClick={() => {
									try {
										window.top.check_auth({ code: 'auth' }, () => {
												window.top.location.reload()
											}
										)
									} catch (e) {}
								}}>{t('translation:login')}</div>
							</div>
					}*/}
				</div>
			</header>
			
			<section>
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
				
				<figure>
					<div className="banner-head">
						<div className="icon"/>
						<div className="titles">
							<h2>{t('translation:banner_title')}</h2>
							<h4>{t('translation:banner_subtitle')}</h4>
						</div>
					</div>
					<div className="labels around">
						<label>
							<span className="title">{t('translation:max_bet')}</span>
							<span className="value bet">1 000₾</span>
						</label>
						<label>
							<span className="title">{t('translation:max_win')}</span>
							<span className="value win">100 000₾</span>
						</label>
						{/*<label>
							<span className="title">{t('translation:tkt_count')}</span>
							<span className="value count">10</span>
						</label>*/}
					</div>
				</figure>
			</section>
			
			<div className="container">
				<div className="shadow"/>
				<div className="footer-play-wrapper">
					<a className="play-btn-link"
					   target="_blank"
					   rel="noreferrer"
					   href={mob ? gameMobUrl : gameWebUrl}>{t('translation:play_game')}</a>
				</div>
				<section className="rules">
					<RuleItem title={t('translation:faq.f1-title')} >
						<Trans i18nKey={t('translation:faq.f1-content')} components={i18TagMap()}/>
					</RuleItem>
					<RuleItem title={t('translation:faq.f2-title')}>
						<Trans i18nKey={t('translation:faq.f2-content')} components={i18TagMap()}/>
					</RuleItem>
					{/*<RuleItem title={t('translation:faq.f3-title')}>
						<Trans i18nKey={t('translation:faq.f3-content')} components={i18TagMap()}/>
					</RuleItem>
					<RuleItem title={t('translation:faq.f4-title')}>
						<Trans i18nKey={t('translation:faq.f4-content')} components={i18TagMap()}/>
					</RuleItem>*/}
				</section>
			</div>
		</main>
	)
}

export default App