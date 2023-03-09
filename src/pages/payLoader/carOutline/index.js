import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { PayLoaderContext, PayLoaderSteps } from '../setting';
import './index.less';

const CarOutline = memo(() => {
	const ref = useRef();
	const [context] = useContext(PayLoaderContext);
	const { steps } = context;
	const [style, setStyle] = useTween({ opacity: 0, x: 80, y: 10 });

	useEffect(() => {
		if (steps === PayLoaderSteps.logoDidFadeIn) {
			setStyle(
				{ opacity: 0.8, x: 0, y: 0 },
				{
					duration: 5000,
					easing: Bezier.easeOutSine,
					onStart: () => {
						[...ref.current.getElementsByTagName('path')].forEach((path) => {
							const total = path.getTotalLength();
							path.classList.add('on');
							path.setAttribute('style', `stroke-dasharray:${total}; stroke-dashoffset:${total}`);
						});
					},
				},
			);
		}
	}, [steps]);

	return (
		<div className='CarOutline'>
			<svg
				ref={ref}
				style={style}
				xmlns='http://www.w3.org/2000/svg'
				width='2803.516'
				height='996.516'
				viewBox='0 0 2803.516 996.516'
			>
				<defs>
					<clipPath id='clip-path'>
						<rect
							id='Rectangle_224'
							data-name='Rectangle 224'
							width='2787.396'
							height='948.013'
							fill='none'
						/>
					</clipPath>
				</defs>
				<g
					id='Group_434'
					data-name='Group 434'
					transform='matrix(1, -0.017, 0.017, 1, 0, 48.647)'
					opacity='0.5'
					stroke='#fff'
				>
					<g id='Group_434-2' data-name='Group 434' clipPath='url(#clip-path)'>
						<path
							id='Path_1411'
							data-name='Path 1411'
							d='M1147.726,161.475s-244.8-4.758-298.458-2.708c-85.042,3.249-304.416,17.333-334.208,19.5s-120.249,5.958-253.5,46.583-234,94.25-234,94.25S205.5,297.433,230.688,295.809,393.459,284.9,393.459,284.9'
							transform='translate(12.094 69.442)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1412'
							data-name='Path 1412'
							d='M169.3,267.009s116.188-53.626,208-73.937,250.249-28.438,250.249-28.438'
							transform='translate(74.29 72.242)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1413'
							data-name='Path 1413'
							d='M879.435,166.6s649.284,6.216,711.916,5.259,104.23-.478,152.52-7.649,111.4-21.993,194.594-17.212,232.365,34.423,278.264,47.334,121.92,48.289,129.57,51.636,11,6.693,11.952,14.823,1.435,11,1.435,11'
							transform='translate(385.897 64.096)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1414'
							data-name='Path 1414'
							d='M91.092,241.953s24.78.406,39.406,0,111.719-4.469,143.813-4.469,71.094-.406,84.907,3.656,49.742,23.514,61.343,29.657c13.812,7.312,27.218,23.969,27.218,23.969'
							transform='translate(39.971 104.204)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1415'
							data-name='Path 1415'
							d='M392.506,243.724s-63.43,32.861-89.836,45.049-60.937,28.844-90.188,32.094-150.717,19.5-150.717,19.5A36.6,36.6,0,0,0,57.3,322.9c-4.875-8.938-11.781-23.156-11.375-27.219s1.624-17.063,1.624-17.063'
							transform='translate(20.142 106.946)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1416'
							data-name='Path 1416'
							d='M29.3,277.521,23.61,297.7s215.312-30.874,219.781-31.281,19.5-13.405,19.5-13.405'
							transform='translate(10.36 111.022)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1417'
							data-name='Path 1417'
							d='M28.588,283.787l-2.437,10.969,22.123-3.139'
							transform='translate(11.475 124.526)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_241'
							data-name='Line 241'
							x2='6.246'
							y2='13.382'
							transform='translate(42.797 419.266)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1418'
							data-name='Path 1418'
							d='M64.569,323.46l-8.329,1.4s-16.729-41.488-16.729-42.6'
							transform='translate(17.337 123.853)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1419'
							data-name='Path 1419'
							d='M63.965,595.118s52.863-.669,72.268-10.037,18.29-22.752,16.506-33.235-39.481-115.539-48.626-136.952-19.405-44.833-30.557-55.539S43.891,339.95,35.192,335.711s-12.269-3.345-12.269-3.345l17.621-13.605-8.7-16.06,23.867-4.016'
							transform='translate(10.059 131.063)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1420'
							data-name='Path 1420'
							d='M50.136,312.978c2.676.446,22.975-1.115,22.975-1.115L51.474,324.576s-1.784,2.678,4.462,3.57,24.98,6.244,34.349,10.706,16.952,9.814,28.775,33.235,58.661,141.636,65.13,161.933,7.138,37.472-4.016,45.948-49.293,9.368-70.483,10.262S1.066,587.552,1.066,587.552'
							transform='translate(0.468 136.846)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1421'
							data-name='Path 1421'
							d='M30.01,322.094s-17.621,13.382-20.52,16.06S5.7,346.407,8.375,356.667s30.78,80.521,37.249,97.25,7.361,23.642,6.913,35.91.67,16.06-1.784,16.506-12.49-1.115-16.506-.669-7.359,4.016-4.46,7.584l2.9,3.568'
							transform='translate(2.973 141.335)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1422'
							data-name='Path 1422'
							d='M59.465,461.066s-16.283-3.122-20.966-3.122-13.384-.892-16.06,1.561-1.561,7.584,2.453,9.591a53.119,53.119,0,0,0,10.037,3.345'
							transform='translate(9.206 200.877)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1423'
							data-name='Path 1423'
							d='M33.591,475.482c-.892.446-10.929,4.46-14.053,6.915s-4.46,4.237-3.122,8.7,2.23,7.138,3.345,6.913,55.318-29.888,62.008-32.564,13.384-2.9,22.752-3.122,29.665.669,32.118-.67,3.347-9.368-1.784-10.706-29.665,0-38.364,0-15.614,3.57-20.743,6.692S39.39,474.144,39.39,474.144'
							transform='translate(6.976 197.615)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1424'
							data-name='Path 1424'
							d='M27.986,461.667s-3.345-5.131-3.791-6.023.446-2.9,5.8-2.676,22.975,2.453,26.543,2.23,10.037-4.237,15.168-4.906,54.2-1.338,57.1-1.338,6.246.223,6.023-.669'
							transform='translate(10.573 196.708)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1425'
							data-name='Path 1425'
							d='M47.092,463.145h-22.4s6.611.544,9.023,2.955'
							transform='translate(10.835 203.229)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1426'
							data-name='Path 1426'
							d='M26.628,583.689s-.542,3.1-4.742,5.591-14.932,10.267-18.2,12.755-4.821,8.555-1.866,13.533,44.642,33.91,49.931,37.486,28.963,12.739,45.485,15.177,86.937,14.083,93.165,14.624,8.938,3.521,11.1,5.147,56.6,8.666,64.458,9.479,32.77,0,50.916,0,29.792-1.624,29.792-3.25-9.479-16.52-10.834-25.188-1.624-60.666-1.624-90.457,16.25-83.146,31.416-115.1S475.046,273.9,679.253,297.19,927.878,487.856,930.045,549.064s-4.334,129.459-6.5,134.334,2.167,9.208,4.875,8.666,82.334-8.125,87.209-8.666,3.25-5.958,2.708-11.916-8.666-50.918-8.666-50.918l-37.917,4.876s11.916-84.5-11.916-155.458S885.087,330.773,806,292.316,640.8,248.441,569.3,261.44,433.338,309.649,377.547,365.982,303.88,498.148,299.006,533.9s-4.334,112.667-4.334,112.667'
							transform='translate(0.11 111.936)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1427'
							data-name='Path 1427'
							d='M326.97,538.38H177.47c-31.957,0-95.332-5.958-113.749-10.833s-46.964-23.44-46.964-23.44'
							transform='translate(7.353 221.203)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1428'
							data-name='Path 1428'
							d='M4.547,521.6s56.5-42.671,62.651-47.583c5.139-4.106,12.833-10.384,19.552-13.175'
							transform='translate(1.995 202.218)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1429'
							data-name='Path 1429'
							d='M7.865,334.946s26.075-1.588,31.946-1.588,23.5,1.837,33.367,14.52c10.814,13.9,59.63,145.21,59.63,145.21'
							transform='translate(3.451 146.278)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1430'
							data-name='Path 1430'
							d='M124.14,461.982s8.342,20.7,6.8,29.042-2.472,12.667-4.634,13.9-72.3,8.033-82.491,8.959'
							transform='translate(19.225 202.718)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1431'
							data-name='Path 1431'
							d='M105.552,265.336c1.571-.315,32.692-4.086,40.238-5.03s9.116-1.258,9.116-1.258L185.4,240.816'
							transform='translate(46.316 105.67)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1432'
							data-name='Path 1432'
							d='M240.332,561.9v-5.6a6.42,6.42,0,0,1,6.42-6.42h30.242'
							transform='translate(105.458 241.288)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1433'
							data-name='Path 1433'
							d='M91.487,367.195s211.193-74.464,240.08-84.734,40.44-11.555,59.057-12.2,21.825,0,21.825,0'
							transform='translate(40.145 118.467)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1434'
							data-name='Path 1434'
							d='M187.856,576.807s11.555-164.333,118.756-250.992c113.983-92.142,219.538-87.3,246.5-87.3,29.529,0,129.669-1.925,219.538,60.34'
							transform='translate(82.431 104.641)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1435'
							data-name='Path 1435'
							d='M491.239,258.154s129.027-40.442,302.988-48.144,560.4-8.987,560.4-8.987'
							transform='translate(215.556 88.21)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1436'
							data-name='Path 1436'
							d='M670.814,228.127S789.56,162.541,857.909,126.64s153.956-86.3,254.062-108.389,208.5-20.022,330-13.808,279.607,31.757,351.406,50.4,227.07,72.3,281.678,94.583c86.3,35.209,256.1,116.136,256.1,116.136'
							transform='translate(294.354 0.11)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1437'
							data-name='Path 1437'
							d='M626.521,216.57S760.448,152.211,839.951,114.8s227.67-89.434,227.67-89.434'
							transform='translate(274.918 11.129)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_242'
							data-name='Line 242'
							x2='60.328'
							transform='translate(936.452 210.876)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1438'
							data-name='Path 1438'
							d='M660.8,176.862s99.647-48.207,134.787-65.067,74.75-34.125,74.75-34.125'
							transform='translate(289.96 34.082)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1439'
							data-name='Path 1439'
							d='M810.931,87.74s2-3.732-.235-6.983-8.5-5.206-8.5-5.206'
							transform='translate(352.005 33.152)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1440'
							data-name='Path 1440'
							d='M663.814,185.412h37.17a15.986,15.986,0,0,0,7.738-2.312c4.291-2.709,45.856-25.532,59.033-32.974,10.969-6.2,66.625-35.242,77.8-41.335s26.711-14.218,26.711-14.218c16.5-8.17,58.782-31.035,82.994-40.837'
							transform='translate(291.283 23.579)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1441'
							data-name='Path 1441'
							d='M726.84,222.138s42.583-28.757,91.526-56.962,129.252-72.59,169.505-90.7c35.1-15.791,97.61-39.817,142.405-47.007s106.182-10.785,163.7-11.338,93.739,0,144.341,3.318,149.043,14.379,236.422,27.929S1848.39,87.751,1914.2,109.6s193.008,73.829,213.471,82.125,69.683,29.864,76.595,33.734,7.189,9.125,7.189,9.125'
							transform='translate(318.938 6.997)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1442'
							data-name='Path 1442'
							d='M1859.022,211.961s5.531-6.083-6.359-11.89-202.963-76.042-231.168-86-119.731-35.947-131.9-39.817l-12.168-3.872-11.692-15.493'
							transform='translate(643.168 24.086)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1443'
							data-name='Path 1443'
							d='M2122.053,195.807s0-3.25-10.021-8.125-159.79-63.375-194.457-74.75-102.645-31.416-114.833-35.207-87.209-20.042-125.125-27.354-143-20.583-174.145-23.563-110.228-8.125-147.874-8.936-114.562,1.083-149.771,3.25-87.479,9.207-135.145,24.645S953.409,92.349,922.806,109.141,800.66,177.391,780.89,189.307s-50.646,31.688-50.646,31.688'
							transform='translate(320.432 7.757)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1444'
							data-name='Path 1444'
							d='M737.537,180.114s34.459-22.137,46.78-29.447,69.753-39.262,69.753-39.262'
							transform='translate(323.632 48.885)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1445'
							data-name='Path 1445'
							d='M935.965,163.421s-58.057,2.089-71.841,3.76-38.636,7.726-43.23,9.4-9.19.21-10.86-2.3c0,0,23.808-7.309,42.394-10.86s71.006-4.8,76.228-5.013,6.056-.417,7.935,1.881,1.045,1.67-.209,5.221-8.771,13.782-14.618,17.751-11.9,4.594-25.687,4.594-33,1.672-34.877,5.43.626,6.266,3.132,8.981a15.021,15.021,0,0,1,4.177,11.695c-.209,5.639,2.3,11.277-.627,16.081s-7.309,6.682-15.035,6.473-43.439-1.253-49.078-3.132a12.858,12.858,0,0,1-9.19-12.739c0-6.266.209-10.86,2.3-13.784s11.486-11.486,13.365-16.08.627-7.728-1.043-10.651-.21-6.683.626-10.86-1.462-7.1-3.341-10.233-.21-17.543-.21-18.586-3.341-1.462-3.341-1.462,23.391-21.3,32.787-27.776,22.346-9.816,36.548-10.443,36.756-1.253,43.439-.417,12.32,4.385,18.378,12.322,3.55,8.98,0,9.188-65.785,4.387-78.524,5.639-43.23,7.311-43.23,7.311a7.488,7.488,0,0,0,4.594,2.088c2.506,0,28.612-4.8,40.932-6.265s75.809-5.221,75.809-5.221'
							transform='translate(348.663 43.857)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1446'
							data-name='Path 1446'
							d='M848.871,201.576c1.462-5.43-.209-7.518-2.089-12.531s-6.89-4.8-8.562-11.069,3.968-13.156,3.968-13.156'
							transform='translate(367.676 72.323)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1447'
							data-name='Path 1447'
							d='M796.108,205.491a12.939,12.939,0,0,1,1.879-9.607c3.134-4.8,13.366-15.663,17.543-21.929s4.8-13.782,5.847-15.871,2.3-5.011,7.309-6.473'
							transform='translate(349.224 66.527)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1448'
							data-name='Path 1448'
							d='M891.54,115.179s2.506,12.739,2.506,20.467a117.954,117.954,0,0,1-1.462,16.5'
							transform='translate(391.209 50.541)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1449'
							data-name='Path 1449'
							d='M802.709,129.18a28.249,28.249,0,0,1,10.651-3.551'
							transform='translate(352.23 55.126)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1450'
							data-name='Path 1450'
							d='M825.062,128.181c2.715,3.76,6.056,4.8,10.651,4.177s37.381-5.43,52-6.265,32.37-1.045,32.37-1.045'
							transform='translate(362.038 54.872)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1451'
							data-name='Path 1451'
							d='M900.414,119.937s-8.145-13.365-14.41-16.29c-7.244-3.38-10.651-3.758-17.543-3.55'
							transform='translate(381.082 43.902)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1452'
							data-name='Path 1452'
							d='M816.695,154.849c-.551,1.837.184,4.96,4.408,7.348s20.576,8.634,27.924,6.8'
							transform='translate(358.297 67.948)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1453'
							data-name='Path 1453'
							d='M838.1,137.972s75.961-37.049,131.65-61.179S1085.212,36.325,1144.24,31.5s137.735-4.083,155.185-4.455,40.838,0,40.838,0l-.371-7.8'
							transform='translate(367.76 8.446)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_243'
							data-name='Line 243'
							y1='46.407'
							x2='76.665'
							transform='translate(1074.932 182.844)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_244'
							data-name='Line 244'
							y1='40.966'
							x2='67.704'
							transform='translate(1086.759 188.971)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1454'
							data-name='Path 1454'
							d='M848.576,133.1S938.428,89,959,79.746s62.048-23.825,86.56-31.367,74.389-15.769,101.128-18.169,94.444-3.942,116.555-3.942h32.4'
							transform='translate(372.357 11.526)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1455'
							data-name='Path 1455'
							d='M1164.617,24.718s.3,52.692-3.042,100.266c-2.115,30.065-13.638,98.067-13.638,98.067'
							transform='translate(503.716 10.846)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1456'
							data-name='Path 1456'
							d='M1141.465,222.075s10.758-64.786,13.627-91.322,10.04-104.471,10.04-104.471'
							transform='translate(500.876 11.532)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1457'
							data-name='Path 1457'
							d='M1183.668,226s7.172-93.952,7.172-128.617-.957-78.413-.957-78.413'
							transform='translate(519.395 8.324)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1458'
							data-name='Path 1458'
							d='M1191.347,18.97s2.151,67.416,1.673,95.387-6.693,111.4-6.693,111.4'
							transform='translate(520.562 8.324)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_245'
							data-name='Line 245'
							x2='370.123'
							y2='9.659'
							transform='translate(1282.749 156.53)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1459'
							data-name='Path 1459'
							d='M1221.427,222.909s0-43.557-.256-63.03-4.1-132.975-4.1-132.975'
							transform='translate(534.053 11.805)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1460'
							data-name='Path 1460'
							d='M1461.3,62.519S1483.6,84.041,1490,90.446s90.957,95.826,90.957,95.826'
							transform='translate(641.222 27.433)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1461'
							data-name='Path 1461'
							d='M1710.473,204.256s-56.88-59.955-70.46-74.815-42.14-43.65-42.14-43.65-21.4-6.056-59.194-14.512S1418.77,48.733,1391.611,45.4s-99.925-11.274-127.852-13.067-72.254-4.869-72.254-4.869l-.256-7.686'
							transform='translate(522.722 8.679)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1462'
							data-name='Path 1462'
							d='M1477.043,66.791s4.557,1.817,53.071,54.053c58.076,62.53,57.81,62.343,57.81,62.343'
							transform='translate(648.129 29.308)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1463'
							data-name='Path 1463'
							d='M1465.079,63.536s52.961,53.456,61.377,62.53,56.92,60.056,56.92,60.056'
							transform='translate(642.879 27.88)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1464'
							data-name='Path 1464'
							d='M1495.462,188.276s-3.794-54.611-6.1-71.934-4.784-31.019-4.784-31.019'
							transform='translate(651.433 37.44)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1465'
							data-name='Path 1465'
							d='M1487.669,88.764a372.236,372.236,0,0,1,5.61,37.452c1.98,20.458,5.94,59.726,5.94,59.726'
							transform='translate(652.791 38.95)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1466'
							data-name='Path 1466'
							d='M1570.753,79.886s-36.766-8.735-58.906-13-122.281-22.346-161.078-26.611-133.656-11.172-133.656-11.172'
							transform='translate(534.071 12.771)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_246'
							data-name='Line 246'
							x2='44.891'
							y2='2.032'
							transform='translate(1662.622 161.72)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_247'
							data-name='Line 247'
							x2='42.859'
							y2='3.25'
							transform='translate(1711.981 163.955)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1467'
							data-name='Path 1467'
							d='M1219.513,29.811s5.282,103.594,5.688,129.39.609,62.359.609,62.359'
							transform='translate(535.124 13.081)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1468'
							data-name='Path 1468'
							d='M1223.466,117.9s142.39,12.391,172.656,15.031,87.953,5.077,116.391,5.688,95.646,12.682,95.646,12.682'
							transform='translate(536.859 51.737)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1469'
							data-name='Path 1469'
							d='M1493.421,133.937a36.882,36.882,0,0,0,16.328,8.473c9.713,2.068,33.32,3.411,36.271,4.444,6.2,2.17,11.573,9.61,11.573,9.61'
							transform='translate(655.315 58.772)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1470'
							data-name='Path 1470'
							d='M2216.069,187.549s-112.321-20.676-157.864-25.706-94.44-9.78-123.777-10.617-62.588.279-88.852,3.632-67.617,12.015-100.027,15.368-66.219,5.867-117.63,5.867-148.644-.839-191.394-1.676-138.865-1.676-163.173-1.676-188.6-1.676-226.877-1.676-205.9.43-205.9.43'
							transform='translate(368.845 66.241)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1471'
							data-name='Path 1471'
							d='M744.7,159.295s-9.915,5.278-14.554,10.715-16.951,20.31-23.668,37.262-17.431,49.575-19.191,76.921-4.775,118.409-4.368,164.721,13.812,131.626,19.5,161.281,20.311,110.5,20.311,110.5a12.5,12.5,0,0,0,6.5,3.656c4.062.813,133.249-3.25,192.968-3.25s203.937.813,294.531,1.626,264.875-2.031,267.312-4.063,4.468-21.53,4.468-21.53-465.56,14.218-585,16.656S729.227,720.7,729.227,720.7'
							transform='translate(299.647 69.899)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1472'
							data-name='Path 1472'
							d='M1383.413,498.592c-1.266-1.266-1.266-2.532-10.972-2.532s-222.836,6.752-273.48,7.175-226.633,3.375-266.3,4.642-118.944,11.588-120.632,11.588-6.823-2.725-6.823-2.725,75.544-10.551,141.8-12.661,372.657-8.44,425.412-10.972,100.022-2.954,104.243-2.111,6.752,5.486,6.752,7.6-.422,51.489-2.532,54.021l-2.111,2.531'
							transform='translate(309.444 215.276)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1473'
							data-name='Path 1473'
							d='M709.018,518.166s81.514-18.9,189.015-23.626,170.115-1.773,257.535-4.135,216.777-6.5,216.777-6.5'
							transform='translate(311.118 212.339)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1474'
							data-name='Path 1474'
							d='M1168.563,633.188s4.43-7.531,4.873-13.733-.443-32.34.887-66.009,9.3-123.6,11.518-161.259,7.089-106.323,9.3-132.9,3.1-53.162.443-70-3.624-26.183-3.624-26.183'
							transform='translate(512.767 71.569)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_248'
							data-name='Line 248'
							y1='4.078'
							x2='21.657'
							transform='translate(76.368 480.005)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_249'
							data-name='Line 249'
							y1='4.653'
							x2='20.084'
							transform='translate(91.574 495.202)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_250'
							data-name='Line 250'
							y1='4.426'
							x2='19.858'
							transform='translate(95.772 502.238)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1475'
							data-name='Path 1475'
							d='M64.551,344.6s48.749-16.047,71.5-23.156,23.562-11.174,25.593-14.22,3.86-6.5,3.86-6.5'
							transform='translate(28.325 131.96)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1476'
							data-name='Path 1476'
							d='M778.246,494.154c-.253,4.747,4.942,7.345,18.417,6.5,13.076-.82,173.875-3.793,236.707-4.876s188.5-4.332,235.083-5.416,75.833-.542,75.833-.542,2.134-7.286-.983-9.365-136.652,1.3-191.469,3.118-188.09,3.9-229.916,4.937-98.463,2.6-113.79,2.338-1.558-5.975,0-7.275,36.632-20.523,69.625-25.72,152.5-14.808,183.154-17.405,190.949-11.171,224.462-12.99,60.013-2.6,60.792-3.637,2.078-12.73-.26-12.73-119.765,8.833-135.092,10.132-131.2,9.093-158.734,11.431-101.838,8.313-138.469,12.729-43.127,3.637-61.831,11.172-46.243,20.523-56.894,25.46S778.519,489.037,778.246,494.154Z'
							transform='translate(341.492 180.387)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1477'
							data-name='Path 1477'
							d='M850.111,445.172s137.1-15.277,201.828-21.309,262.134-19.7,262.134-19.7'
							transform='translate(373.03 177.347)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1478'
							data-name='Path 1478'
							d='M1174.681,413.317s128.171-6.3,156.2-6.7,76.78,10.157,112.936,21.532,82.064,34.531,81.656,37.374-.406,4.063-8.531,4.469-200.687,8.125-236.437,8.938-102.375.813-106.031,1.219'
							transform='translate(515.363 178.418)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1479'
							data-name='Path 1479'
							d='M1347.805,492.548s141.661-1.778,171.3-2.964,180.188-2.964,189.375-4.148,13.929-12.152,8-18.968-38.823-21.339-62.237-29.933-81.8-26.969-115.285-30.822-53.938-2.668-93.354-.593-97.207,4.742-97.207,4.742-163.3,13.04-194.117,15.411-257.54,22.819-272.062,24.3-31.415,7.41-43.565,12.151-51.27,24.3-58.087,27.858-2.964,10.669-.3,12.151'
							transform='translate(340.837 176.92)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1480'
							data-name='Path 1480'
							d='M1174.881,405.852s141.365-7.7,157.665-7.7,48.01,2.963,75.275,10.372,85.353,29.044,114.989,42.083'
							transform='translate(515.539 174.708)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1481'
							data-name='Path 1481'
							d='M1176,422.81s95.849-6.086,120.951-7.1,36.259-2.535,82.156,5.072S1490.167,454,1495.492,455.773s15.974,9.636,2.282,11.411'
							transform='translate(516.03 182.042)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1482'
							data-name='Path 1482'
							d='M1173.631,483.41s185.656.406,279.093,4.875,151.53,8.938,151.53,8.938-90.593-3.25-137.312-3.656-206.375,0-232.374.406-56.468.407-56.468.407'
							transform='translate(514.991 212.121)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1483'
							data-name='Path 1483'
							d='M1272.377,551.161c16.348-.918,148.687-.406,211.249,2.032s96.688,6.5,104,7.312,11.782-2.843,13-8.531,6.5-45.094,6.093-49.97,2.844-2.437-.406-4.875-76.782-4.062-142.594-4.875-285.688.263-285.688.263,4.777,1.591,4.429,8.132c-.483,9.08-2.98,43.6-3.521,46.855s.27,5.145-3.521,6.771'
							transform='translate(515.776 215.869)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_251'
							data-name='Line 251'
							y1='1.422'
							x2='97.093'
							transform='translate(1698.169 711.782)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1484'
							data-name='Path 1484'
							d='M1257.163,533.1s13.782,17.326,43.315,16.932,110.65-.787,129.551-1.181,44.1-12.207,44.1-12.207'
							transform='translate(551.645 233.924)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1485'
							data-name='Path 1485'
							d='M1468.757,640.952s23.1,4.424,26.545,3.932,6.39-2.457,6.882-7.374,15.729-119.448,30.967-167.62,56.531-110.11,100.771-134.2,105.193-44.732,181.876-19.663,113.55,91.921,125.839,126.331,14.256,97.328,9.339,130.262-7.865,42.765-7.865,42.765,60.461-12.289,105.685-24.578,47.19-12.781,54.072-20.645,7.864-10.814,9.831-13.764-.984-5.407,1.473-10.322,16.222-25.562,17.205-32.936a88.7,88.7,0,0,0,.492-15.238s-3.932,9.341-29.986,22.612-79.14,22.612-100.277,25.562-45.224,5.9-45.224,5.9'
							transform='translate(644.493 133.669)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1486'
							data-name='Path 1486'
							d='M1972.939,558.254s4.916-58.987-6.39-101.752-31.461-78.651-61.937-110.11S1818.1,282,1744.364,282.489s-145.682,37.123-186.393,83.758c-44.917,51.453-68.726,131.545-74.625,172.344s-6.39,48.665-6.39,48.665'
							transform='translate(648.091 123.954)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1487'
							data-name='Path 1487'
							d='M1966.054,543.45s12.332-55.342,10.484-68.274-9.7-18.011-20.782-29.556-32.328-36.023-50.8-72.97-49.416-105.759-53.111-115.458-6.466-14.778-4.619-29.094,7.852-27.71,18.935-27.248,23.091,6.465,23.091,6.465'
							transform='translate(810.308 88.128)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1488'
							data-name='Path 1488'
							d='M1933.855,231.379c-2.031-1.219-4.469-3.25-11.375-3.25s-46.312-.813-52.812-.813-6.906,4.876-6.5,7.719h-15.844'
							transform='translate(810.609 99.747)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1489'
							data-name='Path 1489'
							d='M1869.933,233.057c-3.656,0-5.485,2.056-4.8,5.027s5.939,8.456,8.454,9.369,30.395,0,39.305,0h21.484c2.968,0,5.254-4.114,4.113-6.4s-9.828-6.856-15.771-7.77S1869.933,233.057,1869.933,233.057Z'
							transform='translate(818.362 102.158)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1490'
							data-name='Path 1490'
							d='M1873.59,235.682c-2.742,0-4.114.229-3.885,2.514a6.279,6.279,0,0,0,6.4,5.713h49.362c3.427,0,6.856.229,8-1.371s-1.6-3.885-4.113-4.571a77.583,77.583,0,0,0-17.368-2.285Z'
							transform='translate(820.419 103.418)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1491'
							data-name='Path 1491'
							d='M1909.851,243.19s6.013,6.013,6.013,13.785v70.018c0,18.687-.712,24.172,4.772,36.561s18.079,36.97,20.313,40.626,2.437,7.922,2.437,13.608v14.828c0,3.047-5.079,4.876-5.079,4.876'
							transform='translate(838.045 106.712)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1492'
							data-name='Path 1492'
							d='M1942.429,261.266s-2.317,3.244-7.724,3.244h-35.684c-9.114,0-14.135.076-20.854-6.643s-14.676-20.7-14.676-20.7h-14.211'
							transform='translate(811.467 104.07)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1493'
							data-name='Path 1493'
							d='M1865.386,243.288s4.908,7.262,7.724,10.041a21.679,21.679,0,0,0,15.6,6.178h38c4.171,0,7.7-1.9,8.628-4.988'
							transform='translate(818.534 106.755)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1494'
							data-name='Path 1494'
							d='M1850.312,245.609a53.821,53.821,0,0,1-.089-17.123c1.418-10.095,4.929-18.657,8.715-21.5s9.985-6.647,23.55-2.7'
							transform='translate(811.613 88.898)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1495'
							data-name='Path 1495'
							d='M1756.161,338.9l30.071-12.994,113.959-69.4L1914,247.834'
							transform='translate(770.606 108.75)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1496'
							data-name='Path 1496'
							d='M1486.383,427.676s52-125.125,182-157.625,231.29,31.959,274.624,102.917'
							transform='translate(652.227 114.701)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1497'
							data-name='Path 1497'
							d='M1567.141,151.184s20.464,13.063,35.269,28.737,23.077,40.059,23.947,61.83-3.484,60.523-4.354,68.36a44.355,44.355,0,0,1-3,12.487'
							transform='translate(687.664 66.34)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1498'
							data-name='Path 1498'
							d='M1608.307,269.425s.474,2.365-1.575,9.306-5.836,22.238-5.836,22.238'
							transform='translate(702.475 118.224)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1499'
							data-name='Path 1499'
							d='M1606.782,269.754s-.158,2.209-2.682,11.513-5.836,21.451-5.836,21.451'
							transform='translate(701.321 118.368)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1500'
							data-name='Path 1500'
							d='M1475.3,588.893s3.155-29.3,6.536-52.065,16.447-71.684,27.821-97.277,37.376-69.062,67.844-96.28,69.063-45.5,96.282-53.626,69.468-15.031,117-4.875,75.156,26.812,96.282,42.656,45.093,43.468,61.343,74.75,22.343,55.25,26,78.812,2.843,54.437,2.03,78'
							transform='translate(647.365 122.731)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1501'
							data-name='Path 1501'
							d='M1176.969,225.962s.61,9.141,2.437,8.938,18.281-.407,26.2-1.016,13-2.437,14.218-4.875,2.845-11.375,1.626-16.25-9.345-7.111-16.657-7.111-53.624-1.014-79.219-.609-46.718,3.453-52.811,5.89-8.938,8.328-7.11,13,13.61,9.751,19.5,10.359,18.689,1.219,20.516.2c0,0,6.7-7.312,8.735-8.936a14.32,14.32,0,0,1,3.046-2.032c6.877,0,53.336.574,56.182.688S1176.482,224.441,1176.969,225.962Z'
							transform='translate(467.371 89.93)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1502'
							data-name='Path 1502'
							d='M1075.922,209.125c-1.016.61-3.859,2.032-3.047,6.5s5.485,6.906,15.641,6.906,45.093-.61,54.64-.407,49.767.813,55.657.61a18.208,18.208,0,0,0,10.765-3.656c2.234-1.423,4.672-7.516,3.25-9.751a8.738,8.738,0,0,0-3.047-3.046'
							transform='translate(470.716 90.517)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1503'
							data-name='Path 1503'
							d='M1199.23,207.27s1.016,3.656-2.235,5.077-23.359,1.016-40.422,1.423-56.266.406-65.812.812-11.578-.2-11.578-2.64'
							transform='translate(473.547 90.95)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_252'
							data-name='Line 252'
							x2='4.875'
							y2='8.328'
							transform='translate(1670.544 303.298)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1504'
							data-name='Path 1504'
							d='M1086.978,212.493c-1.016,0-12.594,3.047-12.594,3.047'
							transform='translate(471.441 93.242)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1505'
							data-name='Path 1505'
							d='M1077,214.811c-.537.134-12.282,4.355-11.5,4.791'
							transform='translate(467.527 94.259)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_253'
							data-name='Line 253'
							x2='4.289'
							y2='8.175'
							transform='translate(1676.8 314.296)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1506'
							data-name='Path 1506'
							d='M1063.557,226.6a13.341,13.341,0,0,1,5.613-12.424,17.994,17.994,0,0,1,8.031-3.275c6.882-1.013,24.291-.607,26.921-2.227s4.656-10.121,16.194-11.335,30.364-1.013,34.412-1.013,9.919,3.846,13.765,6.68,6.478,4.25,11.336,4.049,27.788-.183,32.995.607c6.679,1.011,13.765,4.453,13.966,13.562s-.4,14.169-9.109,17.611-35.828,2.024-38.459,2.226-2.227.607-5.062,3.442-7.489,10.931-22.873,11.538-25.3,0-32.186-4.656-8.1-10.121-13.562-10.323-16.245.1-22.468-.809c-9.716-1.417-15.587-6.073-18.218-9.919A8.6,8.6,0,0,1,1063.557,226.6Z'
							transform='translate(466.644 86.141)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1507'
							data-name='Path 1507'
							d='M1171.722,202.692s44.135.673,66.372,1.348,305.577,15.834,333.54,17.182,36.051,1.347,36.051,1.347'
							transform='translate(514.153 88.942)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1508'
							data-name='Path 1508'
							d='M1478.143,220.389c-2.054-2.2-3.25-5.145.135-8.4s11.51-5.552,26.677-7.041,73.937-2.709,85.583-2.574,14.355,2.167,17.741,3.385,8.26,4.739,7.177,7.584-5.823,13-7.312,14.489-3.25,1.626-8.8,2.167-24.917,1.761-24.917,1.761,2.167-7.312-1.625-10.156-32.094-2.437-38.187-2.167-9.614.271-9.614.271-7.584,9.48-8.938,10.564-10.7.27-16.927-.137S1482.07,224.587,1478.143,220.389Z'
							transform='translate(647.738 88.799)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1509'
							data-name='Path 1509'
							d='M1477.79,217.19s11.687-5.321,36.874-6.81,89.646.135,93.3.135,6.666-.089,6.666-.089'
							transform='translate(648.456 92.039)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1510'
							data-name='Path 1510'
							d='M1494.1,205.952c-3.25.678-8.088,3.75-9.036,5.915-.789,1.8.452,4.509,4.3,5.325,5.04,1.069,27.354-1.083,41.573-1.354s50.916.406,62.021.27,11.375-.407,13.27-1.761,4.739-4.062,2.3-6.093'
							transform='translate(651.55 90.372)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1511'
							data-name='Path 1511'
							d='M1499.089,206.637s5.417-7.177,14.218-8.4,23.293-1.9,29.657-.407,12.865,7.041,12.865,7.041'
							transform='translate(657.802 86.437)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1512'
							data-name='Path 1512'
							d='M1492.545,205.293a30.9,30.9,0,0,0-15.979,5.823c-7.312,5.552,4.469,13.542,6.093,14.218s7.313,4.063,13.677,4.739a142.5,142.5,0,0,0,16.25.542c4.469,0,6.771.271,8.4,1.489s6.906,11.1,29.249,11.1,21.532-11.24,25.729-11.24,20.991-1.219,26.677-2.167,12.323-2.978,13.949-10.02-.272-9.208-.272-9.208'
							transform='translate(646.878 90.083)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1513'
							data-name='Path 1513'
							d='M1541.249,215.062s3.525,6.6,4.611,11.132'
							transform='translate(676.302 94.37)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1514'
							data-name='Path 1514'
							d='M1546.76,235.935s21.125-1.016,28.031-2.234,10.765-5.282,13.813-10.156.407-12.8-4.265-16.047-14.848-4.449-14.848-4.449'
							transform='translate(678.721 89.098)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1515'
							data-name='Path 1515'
							d='M1578.495,216.615s31.58-4.256,53.961-4.119,105.738,8.325,105.738,8.325'
							transform='translate(692.646 93.242)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1516'
							data-name='Path 1516'
							d='M1766.4,229.971s44.952-1.738,70.284-1.987,41.973.5,41.973.5'
							transform='translate(775.101 100.018)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1517'
							data-name='Path 1517'
							d='M1694.217,229.509c-2.167-7.312-5.958-26-6.229-31.146s2.438-12.459,16.791-12.459,47.938,2.437,57.417,3.521,17.063,7.041,21.4,17.876,12.729,39.541,13.813,47.4,0,18.687-13.271,18.958-50.1-1.083-60.667-1.083-17.874-8.936-20.854-16.52S1694.217,229.509,1694.217,229.509Z'
							transform='translate(740.684 81.575)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1518'
							data-name='Path 1518'
							d='M1695.889,219.223c1.083.27,34.937,2.708,36.292,2.98s11.646,8.936,13.541,9.749,2.167,1.083,10.021,1.083,34.4,1.083,34.4,1.083'
							transform='translate(744.159 96.195)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1519'
							data-name='Path 1519'
							d='M1721.112,229.388s19.5-18.958,20.313-20.041,5.145-1.9,6.77-2.439,19.23-4.062,19.23-4.062'
							transform='translate(755.227 89.009)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1520'
							data-name='Path 1520'
							d='M1689.431,202.178c-.609-4.063-.406-8.125,2.64-11.172s6.906-3.859,11.172-4.062,46.312,2.437,53.015,2.843,13.407,2.642,16.656,5.079a31.362,31.362,0,0,1,8.126,9.952c1.625,3.25,7.109,21.329,9.139,28.844s5.485,19.7,5.485,22.953,1.016,8.938-4.469,12.594-32.5,1.422-41.64,1.219-27.828,0-31.078-1.827-8.938-4.876-12.8-10.969-11.781-35.14-13.61-42.859S1689.431,202.178,1689.431,202.178Z'
							transform='translate(741.204 82.027)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1521'
							data-name='Path 1521'
							d='M1461.942,539.671c-.937,1.249,5.375,2.363,5,9.044s-2.229,13.736.371,15.592,18.562,7.053,23.017,8.167,7.8.373,8.539-4.083,4.083-28.957,4.083-28.957'
							transform='translate(641.46 236.704)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1522'
							data-name='Path 1522'
							d='M1926.528,481.97a65.2,65.2,0,0,1-18.146,6.61c-9.853,1.847-12.93,1.847-15.394,3.387s-4.311,6.465-4.311,6.465,8.916-.7,15.086-1.54a47.213,47.213,0,0,0,15.813-5.364'
							transform='translate(828.754 211.489)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1523'
							data-name='Path 1523'
							d='M970.326,252.207s316.344-7.09,358.886-8.726,299.435-6.545,347.977-6.545,139.082.545,139.082.545'
							transform='translate(425.781 103.968)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1524'
							data-name='Path 1524'
							d='M166.53,305.778s-79.871,9.916-83.623,8.042-18.762-19.031-24.391-25.195-5.629-5.9-4.824-6.968l1.688-2.092'
							transform='translate(23.393 122.673)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_254'
							data-name='Line 254'
							x1='6.377'
							y2='47.463'
							transform='translate(189.118 385.813)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1525'
							data-name='Path 1525'
							d='M195.259,255.092c-1.34.268-4.02,4.557-4.02,4.557l113.642-7.5'
							transform='translate(83.916 110.641)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1526'
							data-name='Path 1526'
							d='M107.856,276.552,99.6,307.109l-14.051,2.232'
							transform='translate(37.54 121.351)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1527'
							data-name='Path 1527'
							d='M120.413,275l-8.253,30.557-14.051,2.232'
							transform='translate(43.05 120.671)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1528'
							data-name='Path 1528'
							d='M133.125,273.452l-8.253,30.557-14.051,2.232'
							transform='translate(48.628 119.991)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1529'
							data-name='Path 1529'
							d='M59.818,281.668c.222.892,25.662,27.19,25.662,27.19'
							transform='translate(26.248 123.596)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1530'
							data-name='Path 1530'
							d='M84.605,246.333c-.814,1.083-1.355,4.334,1.623,4.063s25.46-8.4,25.46-8.4'
							transform='translate(36.844 106.19)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1531'
							data-name='Path 1531'
							d='M113.059,261.443s178.115-60.312,299.8-78.537'
							transform='translate(49.61 80.259)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1532'
							data-name='Path 1532'
							d='M28.409,498.81l1.482-9.318H23.539l3.811-29.857H19.727l1.482-9.954h-4.87V389.968l1.27-2.752a10.66,10.66,0,0,0-.237-5.452c-.919-2.914-8.744-26.847-9.358-28.38s-.058-7.26-.058-7.26'
							transform='translate(3.39 151.879)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1533'
							data-name='Path 1533'
							d='M13.712,376.6l3.181,3.61v55.687'
							transform='translate(6.017 165.251)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1534'
							data-name='Path 1534'
							d='M42.315,426.778,17.309,390.726s8.516,15.352,3.069,24.239'
							transform='translate(7.595 171.451)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1535'
							data-name='Path 1535'
							d='M46.029,467.863,19.335,424.755s.24-1.043,1-5.242-.85-11.941-.85-11.941L46.95,443.931'
							transform='translate(8.484 178.844)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_255'
							data-name='Line 255'
							x2='9.204'
							y2='25.926'
							transform='translate(29.66 620.627)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1536'
							data-name='Path 1536'
							d='M14.43,370.894s2.716,4.024,5.58,15.094-1.437,13.44-1.437,13.44,8.116-6.38.292-26.609'
							transform='translate(6.332 162.749)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1537'
							data-name='Path 1537'
							d='M19.635,421.772s7.634,2.291,7.634-6.3'
							transform='translate(8.616 182.311)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1538'
							data-name='Path 1538'
							d='M20.7,412s6.489,5.344,6.489-9.923'
							transform='translate(9.081 176.432)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1539'
							data-name='Path 1539'
							d='M19.635,396.854s5.725,3.817,5.725-8.97'
							transform='translate(8.616 170.205)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1540'
							data-name='Path 1540'
							d='M21.226,434.305s5.725,2.291,5.725-4.771'
							transform='translate(9.314 188.48)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1541'
							data-name='Path 1541'
							d='M18.716,448.643s6.666-2.365,6.666-9.426'
							transform='translate(8.213 192.729)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1542'
							data-name='Path 1542'
							d='M23.614,427.5s9.733,5.344,10.687-4.2'
							transform='translate(10.362 185.745)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1543'
							data-name='Path 1543'
							d='M27.991,434.752s10.306,7.634,13.359-3.626'
							transform='translate(12.282 189.179)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1544'
							data-name='Path 1544'
							d='M23.216,438.637s7.824,8.78,10.115-1.145'
							transform='translate(10.187 191.972)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1545'
							data-name='Path 1545'
							d='M25.869,446.256c.573.191,8.207,6.489,12.978-1.335'
							transform='translate(11.351 195.232)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1546'
							data-name='Path 1546'
							d='M24.94,416.615s9.733,5.344,8.78-5.916'
							transform='translate(10.944 180.215)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1547'
							data-name='Path 1547'
							d='M30.511,422.921s8.4,4.771,8.016-2.672'
							transform='translate(13.388 184.406)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1548'
							data-name='Path 1548'
							d='M24.012,402.073s6.108,1.527,4.962-4.771'
							transform='translate(10.537 174.337)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_256'
							data-name='Line 256'
							x2='25.035'
							y2='7.221'
							transform='translate(162.907 699.184)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_257'
							data-name='Line 257'
							x1='48.558'
							transform='translate(875.097 795.334)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1549'
							data-name='Path 1549'
							d='M315.255,439.285l9.46-17.709a3.07,3.07,0,0,1,4.686-.879,215.383,215.383,0,0,0,25.1,18.03c11.348,7.118,17.851,11.618,21.266,14.1a19.332,19.332,0,0,1,5.128,5.562l9.548,15.622a3.479,3.479,0,0,1-4.552,4.883l-68.458-33.043A4.784,4.784,0,0,1,315.255,439.285Z'
							transform='translate(138.087 184.283)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1550'
							data-name='Path 1550'
							d='M385.814,476.056s-65.863-32.576-67.156-33.219c-1.958-.976-2.59-2.1-1.486-4.414,1.334-2.8,8.6-16.048,8.6-16.048'
							transform='translate(138.938 185.338)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1551'
							data-name='Path 1551'
							d='M316.164,495.65h9.6a3.392,3.392,0,0,0,3.368-2.908,128.581,128.581,0,0,1,6.108-24.942c2.544-6.846,3.983-10.885,4.783-13.194a3.4,3.4,0,0,0-1.7-4.149l-9.567-4.784'
							transform='translate(138.733 195.562)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1552'
							data-name='Path 1552'
							d='M550.663,432.16l-7.557,5.439a3.277,3.277,0,0,0-1.055,4.144,118.957,118.957,0,0,1,8.9,22.621c1.761,6.7,2.846,10.618,3.486,12.846a3.166,3.166,0,0,0,3.619,2.224l10.161-1.747'
							transform='translate(237.701 189.632)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1553'
							data-name='Path 1553'
							d='M570.821,505.307l-9.311.04a3.277,3.277,0,0,0-3.265,2.76,118.9,118.9,0,0,1-5.895,23.583c-2.457,6.476-3.849,10.3-4.621,12.48a3.167,3.167,0,0,0,1.655,3.913l9.286,4.478'
							transform='translate(240.265 221.729)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1554'
							data-name='Path 1554'
							d='M339.235,567.135s-6.771-5.958-16.52-34.125'
							transform='translate(141.608 233.886)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1555'
							data-name='Path 1555'
							d='M338.581,557A85.241,85.241,0,0,1,331,545.622'
							transform='translate(145.242 239.42)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1556'
							data-name='Path 1556'
							d='M777.033,566.488c0-137.608-115.967-249.163-259.022-249.163S258.991,428.88,258.991,566.488s103.553,241.923,259.02,241.923S777.033,704.1,777.033,566.488Z'
							transform='translate(113.646 139.243)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1557'
							data-name='Path 1557'
							d='M742.829,567.477c0-128.617-104.234-232.881-232.81-232.881S277.208,438.859,277.208,567.477s93.076,226.115,232.811,226.115S742.829,696.094,742.829,567.477Z'
							transform='translate(121.639 146.821)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1558'
							data-name='Path 1558'
							d='M588.242,490.766a203.208,203.208,0,0,0-35.912-79.127'
							transform='translate(242.363 180.628)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1559'
							data-name='Path 1559'
							d='M641.65,411.223a202.518,202.518,0,0,0-140.585-56.515c-112.365,0-203.454,91.3-203.454,203.924s81.34,198,203.454,198,203.454-85.374,203.454-198q0-6.194-.364-12.3'
							transform='translate(130.592 155.646)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1560'
							data-name='Path 1560'
							d='M469.53,357.8l19.243,3.981a2.942,2.942,0,0,1,2.081,4.115,208.338,208.338,0,0,0-10.31,28.212c-3.686,12.474-6.194,19.737-7.626,23.583a18.89,18.89,0,0,1-3.88,6.275l-12.194,13.112a3.394,3.394,0,0,1-5.826-2.9l12.9-72.567A4.732,4.732,0,0,1,469.53,357.8Z'
							transform='translate(197.882 156.958)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1561'
							data-name='Path 1561'
							d='M452.315,433.6s13.146-70.029,13.408-71.406c.4-2.083,1.291-2.975,3.77-2.58,3,.481,17.447,3.639,17.447,3.639'
							transform='translate(198.476 157.76)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1562'
							data-name='Path 1562'
							d='M378.233,375.384l17.67-8.594a2.942,2.942,0,0,1,4.161,1.988,208.3,208.3,0,0,0,9.057,28.638c4.7,12.131,7.145,19.415,8.358,23.336a18.9,18.9,0,0,1,.758,7.338l-1.653,17.828a3.393,3.393,0,0,1-6.387,1.256l-34.09-65.347A4.731,4.731,0,0,1,378.233,375.384Z'
							transform='translate(164.801 160.817)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1563'
							data-name='Path 1563'
							d='M411.005,445.333s-32.341-63.49-32.974-64.74c-.958-1.892-.8-3.145,1.41-4.345,2.668-1.449,16.038-7.769,16.038-7.769'
							transform='translate(165.636 161.689)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1564'
							data-name='Path 1564'
							d='M301.09,526.183l-2.655-20.268a3.144,3.144,0,0,1,3.413-3.495,225.416,225.416,0,0,0,31.891.121c13.8-.8,21.959-.915,26.316-.872a20.187,20.187,0,0,1,7.641,1.583l17.379,7.311a3.53,3.53,0,0,1-.9,6.738l-77.321,13.041A4.925,4.925,0,0,1,301.09,526.183Z'
							transform='translate(130.942 220.129)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1565'
							data-name='Path 1565'
							d='M298.427,523.79l.22-4.584a4.845,4.845,0,0,1,3.9-4.476,3.1,3.1,0,0,0,2.476-2.67l1.268-11.387a2.993,2.993,0,0,1,2.954-2.629l146.548-1.4,16.571,9.508s-37.464,2.971-59.833,3.515-31.29-3.43-41.748-5.3-53,1.554-53.752,1.373-1.607,1.9-1.607,1.9,27.176-1.125,45.275-1.5,34.193,9.08,42.809,9.6,73.848-4.319,73.848-4.319a27.288,27.288,0,0,1-.551-5.469l.043-2.114-83.825-42.908'
							transform='translate(130.95 202.255)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1566'
							data-name='Path 1566'
							d='M382.918,513.94s-74.859,11.9-76.333,12.129c-2.229.348-3.433-.211-3.892-2.783-.554-3.106-2.378-18.385-2.378-18.385'
							transform='translate(131.779 221.551)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1567'
							data-name='Path 1567'
							d='M344.416,612.653,330.8,597.407a3.143,3.143,0,0,1,.846-4.81,225.478,225.478,0,0,0,26.411-17.877c10.946-8.442,17.624-13.134,21.247-15.554a20.15,20.15,0,0,1,7.2-3l18.476-3.758a3.528,3.528,0,0,1,3.052,6.073L351.52,612.84A4.928,4.928,0,0,1,344.416,612.653Z'
							transform='translate(144.816 242.363)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1568'
							data-name='Path 1568'
							d='M405.606,555.657S350.48,607.683,349.394,608.7c-1.645,1.544-2.955,1.761-4.784-.1-2.209-2.255-12.328-13.847-12.328-13.847'
							transform='translate(145.806 243.823)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1569'
							data-name='Path 1569'
							d='M424.067,656.451l-19.409-4.611a3.07,3.07,0,0,1-2.006-4.326,220.01,220.01,0,0,0,11.177-29.054c4.056-12.869,6.785-20.352,8.336-24.311a19.7,19.7,0,0,1,4.095-6.421l12.7-13.319a3.445,3.445,0,0,1,5.833,3.161l-14.933,75.068A4.807,4.807,0,0,1,424.067,656.451Z'
							transform='translate(176.548 251.578)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1570'
							data-name='Path 1570'
							d='M441.772,576.074S426.65,648.5,426.35,649.922c-.456,2.155-1.384,3.06-3.889,2.587-3.026-.573-17.6-4.211-17.6-4.211'
							transform='translate(177.655 252.782)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1571'
							data-name='Path 1571'
							d='M516.785,638.97l-17.85,7.88a3,3,0,0,1-4.114-2.2,216.7,216.7,0,0,0-8.413-29.366c-4.423-12.477-6.706-19.953-7.833-23.971a19.432,19.432,0,0,1-.593-7.454l2.049-17.946a3.363,3.363,0,0,1,6.411-.978l32.609,67.619A4.727,4.727,0,0,1,516.785,638.97Z'
							transform='translate(209.684 247.023)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1572'
							data-name='Path 1572'
							d='M482.669,564.957s30.9,65.663,31.508,66.955c.915,1.957.725,3.216-1.506,4.328-2.7,1.344-16.2,7.121-16.2,7.121'
							transform='translate(211.796 247.904)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1573'
							data-name='Path 1573'
							d='M589,566.518l-9.582,17a3,3,0,0,1-4.613.7,216.764,216.764,0,0,0-24.316-18.49c-11.011-7.348-17.315-11.971-20.621-14.516a19.44,19.44,0,0,1-4.937-5.616l-9.1-15.6a3.364,3.364,0,0,1,4.551-4.622l66.595,34.654A4.73,4.73,0,0,1,589,566.518Z'
							transform='translate(226.136 230.349)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1574'
							data-name='Path 1574'
							d='M518.3,526.435s64.057,34.107,65.316,34.78c1.9,1.02,2.5,2.142,1.383,4.368-1.357,2.691-8.716,15.4-8.716,15.4'
							transform='translate(227.429 231)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1575'
							data-name='Path 1575'
							d='M604.372,470.463l2.23,19.384a3,3,0,0,1-3.321,3.276,216.661,216.661,0,0,0-30.54-.678c-13.228.521-21.045.483-25.216.367a19.442,19.442,0,0,1-7.293-1.646L523.7,483.884a3.362,3.362,0,0,1,.968-6.411l74.249-11.079A4.728,4.728,0,0,1,604.372,470.463Z'
							transform='translate(228.921 204.63)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_258'
							data-name='Line 258'
							x1='95.499'
							y2='12.008'
							transform='translate(658.091 682.103)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1576'
							data-name='Path 1576'
							d='M524.02,478.508s71.874-10.031,73.288-10.224c2.14-.294,3.285.262,3.685,2.722.483,2.974,2,17.584,2,17.584'
							transform='translate(229.941 205.452)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1577'
							data-name='Path 1577'
							d='M560.359,395.454l12.943,14.6a3,3,0,0,1-.842,4.588A216.519,216.519,0,0,0,547.053,431.6c-10.538,8.014-16.962,12.466-20.447,14.762a19.449,19.449,0,0,1-6.919,2.836l-17.717,3.515a3.363,3.363,0,0,1-2.885-5.808l54.472-51.657A4.73,4.73,0,0,1,560.359,395.454Z'
							transform='translate(218.51 172.847)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1578'
							data-name='Path 1578'
							d='M499.7,447.379s53.128-49.437,54.175-50.407c1.584-1.466,2.842-1.669,4.58.118,2.1,2.16,11.719,13.261,11.719,13.261'
							transform='translate(219.267 173.682)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1579'
							data-name='Path 1579'
							d='M477.9,430.641l-18.142,90.252a26.949,26.949,0,0,0-7.594,2.347s-23.123-57.247-24.923-64.343c-2-7.888,1.968-25.221-3.574-41.338s-14.379-40.145-14.379-40.145,2.141.134,2.191.859,15.4,37.832,16.7,47.787.253,19.175,7.178,39.069,20.4,52.582,20.4,52.582l3.883-17.776-43.407-131a2.784,2.784,0,0,0-3.239-1.843l-10.72,2.354a2.894,2.894,0,0,1-3.14-1.4,4.538,4.538,0,0,0-5.194-2.129l-4.233,1.209'
							transform='translate(171.002 160.486)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1580'
							data-name='Path 1580'
							d='M522.377,461.55l-70.69,64.008-.043.081a26.972,26.972,0,0,0-6.754-2.275S461.9,463.6,465.133,456.134s16.956-18.772,22.406-34.921,13.12-40.574,13.12-40.574,1.616,1.413,1.212,2.019-10.9,39.363-15.946,48.043-11.506,15.342-18.168,35.325-15.948,54.1-15.948,54.1l13.929-11.708,45.6-130.256a2.782,2.782,0,0,0-1.44-3.437l-9.926-4.679a2.9,2.9,0,0,1-1.632-3.029,4.536,4.536,0,0,0-2.814-4.856l-4.089-1.627'
							transform='translate(195.218 158.202)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1581'
							data-name='Path 1581'
							d='M458.585,516.385a27.186,27.186,0,0,0-3.863-4.97v-.071c1.252.669,51.233-39.459,58.359-43.655s24.969-5.329,39.151-15.3,35.177-25.4,35.177-25.4.429,2.106-.262,2.363-32.667,25.717-41.98,29.829-18.527,5.742-36.012,18.133-45.668,34.774-45.668,34.774l18.251-1.345,115.7-79.479a2.85,2.85,0,0,0,.942-3.656l-5.079-9.679a2.95,2.95,0,0,1,.54-3.434,4.616,4.616,0,0,0,.709-5.626l-2.275-3.741'
							transform='translate(199.533 177.772)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1582'
							data-name='Path 1582'
							d='M544.784,543.916,460.263,497.43l.035-1.027a27.23,27.23,0,0,0-.515-5.288l-.048-.127c.642,1.266,65.053-3.131,73.3-2.481s23.511,9.954,40.85,9.918,43.381-.632,43.381-.632-.856,1.971-1.568,1.786-41.509,2.334-51.5.361-18.471-5.922-39.9-5.8-57.353,2.3-57.353,2.3l15.723,9.364,140.367,1.245A2.85,2.85,0,0,0,625.9,504.6l1.388-10.841a2.952,2.952,0,0,1,2.413-2.5,4.618,4.618,0,0,0,3.807-4.2l.282-4.371'
							transform='translate(201.732 211.8)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1583'
							data-name='Path 1583'
							d='M495.928,592.764,456.244,505.5a27.1,27.1,0,0,0,3.473-5.98l.246.009c-.224,1.4,54.135,35.294,60.424,40.662s13.179,21.867,27.232,32.023S583.1,597.194,583.1,597.194s-1.85,1.092-2.318.522-34.963-22.5-41.886-29.96-11.47-15.644-28.884-28.131-47.764-31.834-47.764-31.834l7.223,16.814,112.861,83.469a2.853,2.853,0,0,0,3.764-.3l7.492-7.956a2.953,2.953,0,0,1,3.424-.61,4.615,4.615,0,0,0,5.549-1.164l2.794-3.371'
							transform='translate(200.201 219.192)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1584'
							data-name='Path 1584'
							d='M431.845,606.068l21.1-94.872a49.3,49.3,0,0,0,6.42-2.751.544.544,0,0,1,.778.378c1.508,6.965,21.8,59.88,23.519,67.475,1.824,8.065-2.529,25.406,2.65,41.953s13.474,41.242,13.474,41.242-2.138-.233-2.171-.968-14.545-38.948-15.624-49.072.174-19.4-6.3-39.825-19.211-54.089-19.211-54.089L452.2,533.332l40.456,134.417a2.854,2.854,0,0,0,3.2,2.011l10.765-1.891a2.953,2.953,0,0,1,3.108,1.561,4.616,4.616,0,0,0,5.142,2.39l4.256-1.029'
							transform='translate(189.494 223.081)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1585'
							data-name='Path 1585'
							d='M384.244,577.051l73-67.038a42.778,42.778,0,0,0,6.362,1.4s-18.428,61.866-21.894,69.544S424.04,600.04,418.1,616.681s-14.343,41.826-14.343,41.826-1.6-1.508-1.176-2.127,12.059-40.623,17.4-49.515,12.06-15.653,19.326-36.249,17.553-55.805,17.553-55.805L442.436,526.63l-49.57,134.187a2.918,2.918,0,0,0,1.373,3.606l9.948,5.108a3.026,3.026,0,0,1,1.577,3.187,4.729,4.729,0,0,0,2.728,5.114l4.106,1.793'
							transform='translate(168.607 223.794)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1586'
							data-name='Path 1586'
							d='M372.159,516.82l97.008-14.066s2.95,3.5,4.555,4.954c0,0-51.4,41.143-58.807,45.568s-26.034,5.689-40.773,16.2-36.551,26.759-36.551,26.759-.463-2.206.258-2.476,33.927-27.085,43.623-31.434,19.306-6.095,37.475-19.152,47.439-36.63,47.439-36.63l-19.047,1.488L327.084,591.8a2.993,2.993,0,0,0-.958,3.836l5.372,10.119a3.1,3.1,0,0,1-.541,3.6,4.847,4.847,0,0,0-.7,5.9l2.4,3.912'
							transform='translate(142.957 220.609)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1587'
							data-name='Path 1587'
							d='M433.854,427.8l39.911,81.853a27.16,27.16,0,0,0-4.531,6.708s-53.549-32.784-60.051-38.048-13.815-21.876-28.311-31.754-36.586-24.26-36.586-24.26,1.866-1.183,2.352-.617,36.018,21.746,43.2,29.127,11.961,15.578,29.924,27.721,49.224,30.831,49.224,30.831l-7.657-16.925L344.876,411.157a2.912,2.912,0,0,0-3.829.442l-7.492,8.4a3.027,3.027,0,0,1-3.476.744,4.74,4.74,0,0,0-5.633,1.387l-2.788,3.544'
							transform='translate(141.144 180.187)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1588'
							data-name='Path 1588'
							d='M444.7,503.569H436c-.514,0-.633-.095-.717-.514-.125-.633-.207-1.227-.364-2.22-.05-.318.15-.492.486-.492H454c.334,0,.537.174.486.492-.157.993-.239,1.587-.364,2.22-.083.419-.2.514-.716.514Z'
							transform='translate(190.839 219.551)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1589'
							data-name='Path 1589'
							d='M447.362,505.444a.231.231,0,0,1-.235-.227v-.032c.327-2.811,1.525-14.072,1.672-15.779a1.634,1.634,0,0,0-.36-1.446c-.065-.075-.656-.728-1.144-1.26-.255-.278-.262-.46-.013-.694.567-.532,1.2-1.078,1.646-1.452.378-.315.509-.321.951.058a24.93,24.93,0,0,1,1.935,1.846c.37.388.34.6.226,1.383-.128.868-2.719,17.267-2.738,17.382a.246.246,0,0,1-.265.226h-.006Z'
							transform='translate(196.189 212.521)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1590'
							data-name='Path 1590'
							d='M445.867,505.474a.241.241,0,0,1-.268-.21v-.023c.032-3.476.134-14.88.127-15.978a1.716,1.716,0,0,0-.589-1.567c-.168-.193-.751-.763-.931-.929a1.028,1.028,0,0,0-1.452-.053c-.019.017-.036.035-.053.053-.181.167-.764.737-.932.929a1.716,1.716,0,0,0-.588,1.567c-.007,1.1.095,12.5.127,15.978a.239.239,0,0,1-.247.234h-1.58a.254.254,0,0,1-.281-.223h0c-.013-.151-1.4-17.628-1.417-17.8-.071-.9-.045-.983.3-1.4a16.486,16.486,0,0,1,1.341-1.44c.321-.309.41-.354,1.034-.354h6c.623,0,.714.045,1.033.354a16.259,16.259,0,0,1,1.341,1.44c.342.416.368.5.3,1.4-.014.176-1.4,17.656-1.416,17.8a.255.255,0,0,1-.279.224h-1.567Z'
							transform='translate(192.085 212.491)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1591'
							data-name='Path 1591'
							d='M435.655,505.22c-.019-.115-2.61-16.514-2.74-17.384-.115-.783-.15-.993.226-1.381a25.222,25.222,0,0,1,1.935-1.847c.443-.374.573-.374.951-.056.45.376,1.079.919,1.647,1.452.247.232.24.417-.013.693-.489.532-1.034,1.135-1.1,1.21l-.043.05a1.631,1.631,0,0,0-.361,1.446c.15,1.708,1.347,12.966,1.672,15.778a.233.233,0,0,1-.2.259h-1.7a.247.247,0,0,1-.273-.216h0Z'
							transform='translate(189.93 212.52)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1592'
							data-name='Path 1592'
							d='M443.152,483.63h-3.358a.692.692,0,0,1-.731-.525c-.075-.224-.558-1.729-.6-1.882a.445.445,0,0,1,.256-.574.461.461,0,0,1,.216-.026h8.437a.445.445,0,0,1,.5.384.44.44,0,0,1-.026.216c-.042.151-.525,1.658-.6,1.882a.692.692,0,0,1-.731.525Z'
							transform='translate(192.385 210.897)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1593'
							data-name='Path 1593'
							d='M556.994,409.767a200.519,200.519,0,0,0-74.714-43.958'
							transform='translate(211.625 160.518)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1594'
							data-name='Path 1594'
							d='M584.017,487.2A197.156,197.156,0,0,0,553.6,418.7'
							transform='translate(242.922 183.725)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1595'
							data-name='Path 1595'
							d='M420.49,692.416a248.1,248.1,0,0,0,26.655,1.413c120.228,0,200.31-83.252,200.31-193.077q0-5.838-.334-11.6'
							transform='translate(184.512 214.642)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1596'
							data-name='Path 1596'
							d='M340.692,595.444c22.85,21.241,51.649,36.882,85.13,45.129'
							transform='translate(149.496 261.282)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1597'
							data-name='Path 1597'
							d='M301.749,521.5c5.4,32.841,18.453,62.374,37.868,86.78'
							transform='translate(132.408 228.833)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1598'
							data-name='Path 1598'
							d='M320.918,435.373A196.864,196.864,0,0,0,299.8,524.351'
							transform='translate(131.551 191.042)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1599'
							data-name='Path 1599'
							d='M397.908,374.1a200.8,200.8,0,0,0-72.874,62.923'
							transform='translate(142.625 164.156)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1600'
							data-name='Path 1600'
							d='M488.53,361.247a203.246,203.246,0,0,0-93.58,7.925'
							transform='translate(173.305 157.532)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1601'
							data-name='Path 1601'
							d='M543.469,414.791a185.1,185.1,0,0,0-54.621-35.246'
							transform='translate(214.507 166.545)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1602'
							data-name='Path 1602'
							d='M571.568,485.516a181.7,181.7,0,0,0-24.622-57.538'
							transform='translate(240.001 187.797)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1603'
							data-name='Path 1603'
							d='M558.427,565.486A187.062,187.062,0,0,0,571.32,500'
							transform='translate(245.039 219.4)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1604'
							data-name='Path 1604'
							d='M503.9,619.789a166.93,166.93,0,0,0,55.155-45.839'
							transform='translate(221.111 251.85)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1605'
							data-name='Path 1605'
							d='M423.3,621.379q11.022,1.09,22.608,1.1a218.188,218.188,0,0,0,49.125-5.424'
							transform='translate(185.746 270.764)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1606'
							data-name='Path 1606'
							d='M350.256,589.4a173.377,173.377,0,0,0,58.169,33.887'
							transform='translate(153.693 258.631)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1607'
							data-name='Path 1607'
							d='M312.527,520.123a175.635,175.635,0,0,0,22.454,61.33'
							transform='translate(137.137 228.231)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1608'
							data-name='Path 1608'
							d='M328.852,441.5a181.235,181.235,0,0,0-17.808,64.827'
							transform='translate(136.487 193.73)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1609'
							data-name='Path 1609'
							d='M396.119,384.068a185.294,185.294,0,0,0-54.414,42.912'
							transform='translate(149.941 168.53)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1610'
							data-name='Path 1610'
							d='M479.621,371.657a187.93,187.93,0,0,0-69.714,2.666'
							transform='translate(179.868 162.176)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1611'
							data-name='Path 1611'
							d='M349.09,420.494l7.666,5.534a3.409,3.409,0,0,0,4.4-.338,126.642,126.642,0,0,1,19.52-16.044c6.049-3.9,9.569-6.243,11.564-7.594a3.269,3.269,0,0,0,1.078-4.234l-4.833-9.269'
							transform='translate(153.181 170.495)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1612'
							data-name='Path 1612'
							d='M418.047,373.835l2.715,8.906a3.275,3.275,0,0,0,3.581,2.332,119.017,119.017,0,0,1,24.283-1.134c6.911.492,10.968.727,13.283.839a3.167,3.167,0,0,0,3.272-2.709l1.62-10.181'
							transform='translate(183.44 163.185)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1613'
							data-name='Path 1613'
							d='M493.954,382.089l-3.019,8.807a3.274,3.274,0,0,0,1.535,3.99,119.065,119.065,0,0,1,20.34,13.31c5.311,4.449,8.462,7.017,10.272,8.464a3.169,3.169,0,0,0,4.239-.278l7.279-7.3'
							transform='translate(215.342 167.661)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1614'
							data-name='Path 1614'
							d='M353.585,587.787S378.5,610.808,408.564,619.2'
							transform='translate(155.154 257.922)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1615'
							data-name='Path 1615'
							d='M493.064,613.559s-21.876,8.848-68.821,4.424'
							transform='translate(186.159 269.231)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1616'
							data-name='Path 1616'
							d='M555.23,571.707s-21.876,29-53.09,43.5'
							transform='translate(220.34 250.866)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1617'
							data-name='Path 1617'
							d='M549.108,572.981c-.737.492-18.68,24.579-44,36.131,0,0-4.424-4.67-3.442-5.408s11.306-4.669,22.122-13.025S544.437,568.8,544.437,568.8Z'
							transform='translate(220.071 249.592)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1618'
							data-name='Path 1618'
							d='M485.928,613.806c-.885-.049-29.685,8.475-56.873,2.545,0,0-.742-6.39.488-6.391s11.849,3.04,25.514,2.834,29.638-5.132,29.638-5.132Z'
							transform='translate(188.172 266.643)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1619'
							data-name='Path 1619'
							d='M406.289,614.292c-.681-.567-27.507-9.146-47.334-26.657,0,0,3.22-5.57,4.206-4.836s7.938,6.407,19.093,13.669c11.454,7.455,26.714,12.159,26.714,12.159Z'
							transform='translate(157.51 255.704)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1620'
							data-name='Path 1620'
							d='M392.9,559.747s6.193,5.419,10.836,8.772a40,40,0,0,0,9.031,4.9l3.354-2.065,12.641-34.314-5.676-4.128Z'
							transform='translate(172.404 233.844)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1621'
							data-name='Path 1621'
							d='M361.835,533.576c1.806.774,13.158,4.128,16,3.87s6.45-2.58,8-3.613,21.673-15.48,21.673-15.48l-3.87-9.287-46.957,8Z'
							transform='translate(156.51 223.379)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1622'
							data-name='Path 1622'
							d='M355.24,489.69h48.247l2.322-6.967-43.088-20.64A120.482,120.482,0,0,0,355.24,489.69Z'
							transform='translate(155.88 202.763)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1623'
							data-name='Path 1623'
							d='M416.649,465.831l8.256-6.708L412,434.355s-3.611,4.385-8,1.548-11.867-10.837-12.641-10.578-6.193,3.354-14.965,11.095Z'
							transform='translate(165.165 186.631)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1624'
							data-name='Path 1624'
							d='M437.578,447.981l8.772-.258,6.193-35.089s-13.159-.774-22.706,1.291Z'
							transform='translate(188.613 181.002)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1625'
							data-name='Path 1625'
							d='M468.57,457.5l6.193,3.87,27.606-26.575s-9.289-9.546-19.093-13.417Z'
							transform='translate(205.609 184.901)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1626'
							data-name='Path 1626'
							d='M525.128,455.628s6.967,10.321,9.546,22.189l-51.085,8.513-1.033-3.87Z'
							transform='translate(211.747 199.93)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1627'
							data-name='Path 1627'
							d='M533.358,502.645s-.774,16.254-6.967,24.769l-40.248-22.447,1.032-3.613Z'
							transform='translate(213.321 219.995)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1628'
							data-name='Path 1628'
							d='M489.443,568.043a90.526,90.526,0,0,0,19.867-16.254l-32.251-24.253-4.9,4.128Z'
							transform='translate(207.183 231.484)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1629'
							data-name='Path 1629'
							d='M445.568,540.167l6.708-.258,11.352,38.184s-7.224,2.58-25.542,1.806Z'
							transform='translate(192.233 236.913)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1630'
							data-name='Path 1630'
							d='M1558.174,456.028l4.55-15.935a2.122,2.122,0,0,1,3.324-1.263,164.948,164.948,0,0,0,20.889,12.326c9.3,4.7,14.693,7.752,17.538,9.456a16.065,16.065,0,0,1,4.523,4.1l9.134,12.048c1.727,2.278-.168,5.534-2.683,4.613l-54.782-20.07A4.379,4.379,0,0,1,1558.174,456.028Z'
							transform='translate(683.655 192.378)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1631'
							data-name='Path 1631'
							d='M1615.146,478.862s-52.814-19.968-53.85-20.363c-1.573-.6-2.188-1.472-1.693-3.541.6-2.5,4.148-14.443,4.148-14.443'
							transform='translate(684.283 193.299)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1632'
							data-name='Path 1632'
							d='M1565.292,503.251l7.052-1.078a2.628,2.628,0,0,0,2.082-2.819,121.982,121.982,0,0,1,1.1-21.634c.94-6.034,1.45-9.587,1.724-11.617a3.087,3.087,0,0,0-1.811-3.295l-7.679-2.942'
							transform='translate(686.852 201.79)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1633'
							data-name='Path 1633'
							d='M1730.729,423.491l-4.814,5.416a3.028,3.028,0,0,0-.214,3.6,111.038,111.038,0,0,1,9.607,18c2.2,5.43,3.531,8.6,4.3,10.4a2.38,2.38,0,0,0,2.961,1.462l7.229-2.607'
							transform='translate(757.025 185.829)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1634'
							data-name='Path 1634'
							d='M1754.147,483.151l-6.836,1.078a2.534,2.534,0,0,0-2.025,2.685,112.89,112.89,0,0,1-1.132,20.467c-.928,5.716-1.433,9.08-1.7,11a2.871,2.871,0,0,0,1.747,3.1l7.43,2.719'
							transform='translate(764.577 212.007)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1635'
							data-name='Path 1635'
							d='M1594.008,560.268s-5.782-4.245-16.768-26.806'
							transform='translate(692.095 234.084)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1636'
							data-name='Path 1636'
							d='M1592.151,551.827a74.631,74.631,0,0,1-7.115-8.7'
							transform='translate(695.516 238.324)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1637'
							data-name='Path 1637'
							d='M1900.477,552.216c0-118.041-84.635-213.731-189.037-213.731S1522.4,434.175,1522.4,552.216s75.576,207.52,189.038,207.52S1900.477,670.257,1900.477,552.216Z'
							transform='translate(668.032 148.528)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1638'
							data-name='Path 1638'
							d='M1875.514,553.064c0-110.327-76.071-199.765-169.908-199.765S1535.7,442.736,1535.7,553.064s67.927,193.96,169.908,193.96S1875.514,663.391,1875.514,553.064Z'
							transform='translate(673.867 155.028)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1639'
							data-name='Path 1639'
							d='M1766.613,468.188a187.189,187.189,0,0,0-37.12-62.424'
							transform='translate(758.905 178.05)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1640'
							data-name='Path 1640'
							d='M1787.415,402.821c-31.59-25.3-70.894-37.807-110.963-31.688-82.563,12.61-137.11,99.509-121.836,194.1s86.622,157.16,176.348,143.457,137.914-94.532,122.639-189.119q-.84-5.2-1.935-10.287'
							transform='translate(681.043 162.18)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1641'
							data-name='Path 1641'
							d='M1658.289,370.448l14.679,1.184a2.6,2.6,0,0,1,2.086,3.223,192.491,192.491,0,0,0-3.748,24.851c-1.019,10.89-1.875,17.271-2.406,20.663a16.411,16.411,0,0,1-2,5.7l-7.181,12.379c-1.357,2.338-4.659,1.079-4.675-1.787l-.367-62.392A3.537,3.537,0,0,1,1658.289,370.448Z'
							transform='translate(726.075 162.549)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1642'
							data-name='Path 1642'
							d='M1655.92,436s.161-60.29.168-61.474c.009-1.794.544-2.645,2.419-2.59,2.267.066,13.313,1.1,13.313,1.1'
							transform='translate(726.62 163.204)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1643'
							data-name='Path 1643'
							d='M1596.13,395.6l11.818-9.2a2.159,2.159,0,0,1,3.326,1.2,197.924,197.924,0,0,0,10.539,23.037c5.1,9.66,7.883,15.5,9.306,18.66a18.318,18.318,0,0,1,1.552,6.077l1.2,15.158c.227,2.865-2.965,4.116-4.524,1.773l-33.91-51.056A4.286,4.286,0,0,1,1596.13,395.6Z'
							transform='translate(699.753 169.368)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1644'
							data-name='Path 1644'
							d='M1629.807,450.537s-32.375-49.693-33.009-50.672c-.961-1.482-1.011-2.551.447-3.807,1.763-1.517,10.731-8.325,10.731-8.325'
							transform='translate(700.374 170.138)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1645'
							data-name='Path 1645'
							d='M1560.277,532.3l-4.7-16.725a2.507,2.507,0,0,1,2.033-3.318,146.566,146.566,0,0,0,23.45-3.478c10.03-2.223,16.011-3.232,19.218-3.685a13.456,13.456,0,0,1,5.828.472l13.762,4.188c2.6.793,2.777,4.859.25,5.761l-55.044,19.63A3.794,3.794,0,0,1,1560.277,532.3Z'
							transform='translate(682.542 221.581)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1646'
							data-name='Path 1646'
							d='M1555.693,531.682l-.459-3.875a3.942,3.942,0,0,1,2.26-4.2,2.5,2.5,0,0,0,1.457-2.521l-.613-9.7a2.33,2.33,0,0,1,1.813-2.539l107.49-17.625,13.464,6.126s-27.124,6.7-43.485,9.666-23.457.63-31.4.23-38.736,7.253-39.308,7.185-.925,1.777-.925,1.777,19.817-4,33.064-6.339,26.357,3.788,32.757,3.26,53.676-11.915,53.676-11.915a26.55,26.55,0,0,1-1.145-4.531l-.255-1.78-67.412-26.631'
							transform='translate(682.425 205.478)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1647'
							data-name='Path 1647'
							d='M1618.889,511.2s-53.391,18.394-54.443,18.752c-1.59.542-2.551.209-3.237-1.9-.829-2.548-4.24-15.175-4.24-15.175'
							transform='translate(683.2 224.316)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1648'
							data-name='Path 1648'
							d='M1602.22,600.514l-12.073-11.276a2.893,2.893,0,0,1-.03-4.135,165.717,165.717,0,0,0,16.981-17.976c6.9-8.319,11.168-13.008,13.5-15.447a13.875,13.875,0,0,1,4.886-3.328l13.066-5.23c2.469-.988,4.634,2.373,3.068,4.758l-34.154,51.994A3.354,3.354,0,0,1,1602.22,600.514Z'
							transform='translate(697.371 238.245)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1649'
							data-name='Path 1649'
							d='M1639.6,545.69s-33.449,49.879-34.11,50.857c-1,1.482-1.932,1.812-3.528.45-1.93-1.645-10.937-10.246-10.937-10.246'
							transform='translate(698.145 239.449)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1650'
							data-name='Path 1650'
							d='M1665.34,627.1l-14.887-1.695a2.733,2.733,0,0,1-2.06-3.409,202.376,202.376,0,0,0,4.272-25.654c1.234-11.263,2.227-17.854,2.829-21.353a17.093,17.093,0,0,1,2.138-5.853l7.525-12.611c1.422-2.383,4.751-.97,4.714,2l-.79,64.72C1669.05,625.591,1667.358,627.335,1665.34,627.1Z'
							transform='translate(723.281 243.678)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1651'
							data-name='Path 1651'
							d='M1667.573,557.533s-1.288,62.523-1.316,63.752c-.042,1.86-.6,2.725-2.507,2.609-2.3-.141-13.5-1.563-13.5-1.563'
							transform='translate(724.132 244.646)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1652'
							data-name='Path 1652'
							d='M1733.6,600.87l-12.047,8.621a2.223,2.223,0,0,1-3.321-1.386,206.648,206.648,0,0,0-10.164-23.719c-4.944-9.982-7.635-16.005-9.007-19.254a18.828,18.828,0,0,1-1.446-6.193l-.929-15.3c-.176-2.892,3.057-3.98,4.578-1.541l33.131,53.131A4.26,4.26,0,0,1,1733.6,600.87Z'
							transform='translate(744.506 237.282)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1653'
							data-name='Path 1653'
							d='M1699.1,542.344s31.613,51.677,32.232,52.7c.938,1.541.969,2.619-.519,3.8-1.8,1.432-10.938,7.8-10.938,7.8'
							transform='translate(745.569 237.981)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1654'
							data-name='Path 1654'
							d='M1777.318,531.846l-4.736,15.351a2.068,2.068,0,0,1-3.293,1.105,167.81,167.81,0,0,0-20.375-12.8c-9.087-4.935-14.346-8.11-17.12-9.877a16.241,16.241,0,0,1-4.388-4.162l-8.8-12.084c-1.663-2.283.256-5.384,2.718-4.39l53.631,21.629A4.344,4.344,0,0,1,1777.318,531.846Z'
							transform='translate(753.85 221.505)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1655'
							data-name='Path 1655'
							d='M1720.057,505.993s51.693,21.455,52.709,21.881c1.538.642,2.131,1.516,1.608,3.512-.632,2.413-4.315,13.913-4.315,13.913'
							transform='translate(754.764 222.03)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1656'
							data-name='Path 1656'
							d='M1775.125,452.006l4.267,16.03a2.377,2.377,0,0,1-2,3.124,140.916,140.916,0,0,0-22.533,2.857c-9.649,1.922-15.4,2.768-18.477,3.138a13.035,13.035,0,0,1-5.582-.564l-13.135-4.26c-2.482-.8-2.593-4.683-.158-5.493l53.054-17.637A3.662,3.662,0,0,1,1775.125,452.006Z'
							transform='translate(752.871 197.037)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<line
							id='Line_259'
							data-name='Line 259'
							x1='68.542'
							y2='20.801'
							transform='translate(2401.84 663.874)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1657'
							data-name='Path 1657'
							d='M1717.336,467.649s51.451-16.49,52.464-16.811c1.532-.486,2.449-.15,3.076,1.873.758,2.443,3.85,14.543,3.85,14.543'
							transform='translate(753.569 197.742)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1658'
							data-name='Path 1658'
							d='M1730.915,393.3l11.492,10.81a2.757,2.757,0,0,1,0,3.948,158.948,158.948,0,0,0-16.369,17.093c-6.656,7.913-10.772,12.374-13.021,14.693a13.366,13.366,0,0,1-4.7,3.157l-12.542,4.941c-2.37.934-4.423-2.282-2.908-4.554l33.019-49.5A3.22,3.22,0,0,1,1730.915,393.3Z'
							transform='translate(742.606 172.164)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1659'
							data-name='Path 1659'
							d='M1693.535,443.621s32.331-47.48,32.97-48.413c.965-1.41,1.86-1.721,3.381-.416,1.837,1.578,10.408,9.823,10.408,9.823'
							transform='translate(743.126 172.872)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1660'
							data-name='Path 1660'
							d='M1677.323,430.569l-1.089,77.833a18.1,18.1,0,0,0-5.262,2.823s-24.755-45.485-27.041-51.242c-2.541-6.4-1.974-21.4-8.231-34.317s-16.011-32.1-16.011-32.1,1.59-.128,1.725.476,16.447,30.044,18.755,38.259,2.787,16.076,10.572,32.006,22.12,41.872,22.12,41.872l.442-15.365L1623.64,385.664a2.066,2.066,0,0,0-2.63-1.184l-7.557,3.18a2.079,2.079,0,0,1-2.5-.826,3.235,3.235,0,0,0-4.1-1.2l-2.947,1.489'
							transform='translate(703.796 168.647)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1661'
							data-name='Path 1661'
							d='M1707.52,452.635l-43.259,61.69-.022.072a18.516,18.516,0,0,0-5.27-1.152s4.394-52.1,5.755-58.733,9.912-17.67,11.726-31.844,4.138-35.548,4.138-35.548,1.378,1.006,1.164,1.56-2.671,34.282-5.2,42.138-6.374,14.175-8.558,31.707-4.38,47.223-4.38,47.223l8.646-11.4,15.84-114.51a2.525,2.525,0,0,0-1.525-2.725l-7.929-2.817a2.578,2.578,0,0,1-1.609-2.36,4,4,0,0,0-2.727-3.762l-3.226-.908'
							transform='translate(727.958 162.913)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1662'
							data-name='Path 1662'
							d='M1670.426,508.962a23.372,23.372,0,0,0-3.514-3.741l-.009-.059c1.01.422,32.292-38.888,36.96-43.212s17.624-7.277,26.693-17.245,22.4-25.277,22.4-25.277.6,1.721.128,2.014-20.514,25.264-26.8,29.763-12.834,6.9-24,19.27-28.839,34.33-28.839,34.33l13.228-3.178,74.238-79.734a2.629,2.629,0,0,0,.2-3.177l-5.044-7.558a2.777,2.777,0,0,1-.069-2.945,4.351,4.351,0,0,0-.242-4.8l-2.18-2.886'
							transform='translate(731.44 175.75)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1663'
							data-name='Path 1663'
							d='M1741.547,523.659,1673.138,494.1l-.114-.866a26.5,26.5,0,0,0-1.095-4.383l-.052-.1c.643.99,47.374-9.929,53.519-10.308s18.625,5.721,31.36,3.744,31.79-5.4,31.79-5.4-.361,1.753-.911,1.676-30.183,6.617-37.79,6.082-14.375-2.9-30.1-.391-41.83,8.367-41.83,8.367l12.823,6.1,103.307-14.706a2.209,2.209,0,0,0,1.775-2.384l-.45-9.26a2.365,2.365,0,0,1,1.433-2.374,3.732,3.732,0,0,0,2.227-3.955l-.386-3.7'
							transform='translate(733.622 202.832)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1664'
							data-name='Path 1664'
							d='M1712.37,564.334,1671.376,495.5a23.761,23.761,0,0,0,1.742-5.411l.181-.02c.026,1.2,44.564,23.565,49.913,27.369s12.65,16.886,24.352,23.838,29.455,16.994,29.455,16.994-1.213,1.125-1.633.7-28.74-14.969-34.84-20.461-10.548-11.851-25.038-20.386-39.413-21.375-39.413-21.375l7.588,13.31,94.247,57.437a1.925,1.925,0,0,0,2.725-.676l4.426-7.523a1.988,1.988,0,0,1,2.433-.9,3.133,3.133,0,0,0,3.921-1.6l1.6-3.145'
							transform='translate(733.402 215.044)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1665'
							data-name='Path 1665'
							d='M1663.3,583.525l2.637-82.046a34.053,34.053,0,0,0,4.344-3.03.4.4,0,0,1,.623.232c2.053,5.679,24.14,47.843,26.432,54.028,2.434,6.57,1.587,21.622,7.637,34.937s15.494,33.124,15.494,33.124-1.6.045-1.726-.57-15.969-31.078-18.136-39.459-2.5-16.309-10.031-32.74-21.453-43.269-21.453-43.269l-.729,15.423L1716.345,628.5a2.146,2.146,0,0,0,2.62,1.331l7.654-2.8a2.149,2.149,0,0,1,2.495.963,3.333,3.333,0,0,0,4.1,1.429l2.988-1.341'
							transform='translate(729.856 218.685)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1666'
							data-name='Path 1666'
							d='M1625.65,566.044l44.548-64.493a28.652,28.652,0,0,0,4.865.462s-5.151,54.026-6.656,60.863-10.4,18.01-12.5,32.652-4.866,36.737-4.866,36.737-1.381-1.086-1.154-1.655,3.352-35.469,6.069-43.537,6.739-14.5,9.285-32.612,5.329-48.837,5.329-48.837l-9,11.544-18.223,118.258a2.665,2.665,0,0,0,1.5,2.875l8,3.174a2.721,2.721,0,0,1,1.591,2.5,4.211,4.211,0,0,0,2.7,3.99l3.26,1.045'
							transform='translate(713.338 220.081)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1667'
							data-name='Path 1667'
							d='M1607.6,519.224l69.372-22.7s2.643,2.61,4.02,3.65c0,0-32.183,40.321-37.03,44.869s-18.358,7.7-27.76,18.181-23.229,26.575-23.229,26.575-.637-1.8-.147-2.109,21.257-26.553,27.792-31.292,13.356-7.286,24.938-20.291,29.888-36.087,29.888-36.087l-13.794,3.387-77,83.846a2.759,2.759,0,0,0-.183,3.328l5.319,7.9a2.916,2.916,0,0,1,.091,3.085,4.569,4.569,0,0,0,.285,5.033l2.295,3.014'
							transform='translate(695.06 217.875)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1668'
							data-name='Path 1668'
							d='M1644.011,433.379l40.427,64.266a23.236,23.236,0,0,0-2.418,6.142s-43.794-21.524-49.285-25.215-13.119-16.824-25.11-23.493-30.173-16.269-30.173-16.269,1.212-1.2,1.646-.783,29.413,14.221,35.7,19.614,10.9,11.741,25.747,19.923,40.35,20.371,40.35,20.371l-7.922-13.355-96.594-55.2a1.968,1.968,0,0,0-2.754.8l-4.365,7.893a2.047,2.047,0,0,1-2.454,1.016,3.227,3.227,0,0,0-3.949,1.8l-1.569,3.291'
							transform='translate(685.093 188.294)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1669'
							data-name='Path 1669'
							d='M1662.864,495.7l-6.394.977c-.378.058-.478-.009-.6-.351-.18-.518-.32-1.009-.57-1.824a.33.33,0,0,1,.292-.468l13.664-2.088a.337.337,0,0,1,.425.36c.019.852.04,1.36.033,1.9,0,.361-.079.455-.456.512Z'
							transform='translate(726.34 215.865)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1670'
							data-name='Path 1670'
							d='M1665.007,496.4a.186.186,0,0,1-.2-.165l0-.026c-.142-2.4-.788-11.99-.912-13.44a1.546,1.546,0,0,0-.46-1.174c-.058-.056-.581-.538-1.011-.93-.225-.2-.255-.358-.1-.581.344-.511.735-1.04,1.013-1.4.236-.308.33-.327.706-.059a20.149,20.149,0,0,1,1.672,1.334c.325.285.331.466.354,1.135.023.744.344,14.808.346,14.906a.193.193,0,0,1-.164.22h0Z'
							transform='translate(729.385 209.938)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1671'
							data-name='Path 1671'
							d='M1663.894,496.826a.188.188,0,0,1-.226-.147l0-.019c-.447-2.924-1.919-12.512-2.073-13.433a1.593,1.593,0,0,0-.645-1.25c-.15-.144-.655-.557-.81-.676a.7.7,0,0,0-1.075.118c-.01.017-.022.033-.032.052-.111.16-.46.7-.558.883a1.57,1.57,0,0,0-.22,1.383c.144.924,1.766,10.49,2.26,13.405a.189.189,0,0,1-.15.224h-.017l-1.144.174a.2.2,0,0,1-.238-.155h0c-.03-.125-3.421-14.648-3.456-14.794-.174-.744-.165-.82.031-1.207a13.292,13.292,0,0,1,.79-1.361c.193-.295.253-.344.712-.413l4.406-.673c.458-.07.531-.042.807.181a13.454,13.454,0,0,1,1.181,1.06c.308.309.339.38.41,1.14.013.15,1.364,14.987,1.374,15.112a.194.194,0,0,1-.174.22h0Z'
							transform='translate(726.384 210.143)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1672'
							data-name='Path 1672'
							d='M1656.345,497.545c-.03-.095-4.158-13.577-4.37-14.292-.193-.645-.246-.817-.023-1.186a19.905,19.905,0,0,1,1.173-1.768c.273-.365.37-.38.691-.155.381.265.918.652,1.407,1.035.213.168.233.324.085.584-.288.5-.607,1.07-.645,1.14l-.026.047a1.536,1.536,0,0,0-.069,1.256c.343,1.416,2.748,10.738,3.37,13.063a.19.19,0,0,1-.114.239l-.023.006-1.224.187a.192.192,0,0,1-.23-.15v-.006Z'
							transform='translate(724.815 210.623)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1673'
							data-name='Path 1673'
							d='M1659.02,478.784l-2.468.377a.533.533,0,0,1-.609-.36c-.085-.18-.645-1.39-.7-1.512a.394.394,0,0,1,.111-.511.288.288,0,0,1,.155-.046l6.2-.947a.346.346,0,0,1,.419.266.42.42,0,0,1,.01.184c-.01.131-.161,1.45-.185,1.647a.521.521,0,0,1-.465.524Z'
							transform='translate(726.304 208.77)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1674'
							data-name='Path 1674'
							d='M1732.668,403.667a147.984,147.984,0,0,0-60.86-28.533'
							transform='translate(733.592 164.609)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1675'
							data-name='Path 1675'
							d='M1763.026,465.666a182.079,182.079,0,0,0-31.638-54.118'
							transform='translate(759.735 180.588)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1676'
							data-name='Path 1676'
							d='M1662.3,664.122a161.735,161.735,0,0,0,19.778-1.8c88.339-13.492,135.892-92.4,121-184.633q-.792-4.9-1.819-9.7'
							transform='translate(729.418 205.352)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1677'
							data-name='Path 1677'
							d='M1598.917,583.88a138.831,138.831,0,0,0,68.672,28.349'
							transform='translate(701.607 256.207)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1678'
							data-name='Path 1678'
							d='M1560.273,526.146c8.424,26.975,22.018,50.313,39.594,68.632'
							transform='translate(684.65 230.874)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1679'
							data-name='Path 1679'
							d='M1559.752,452.387a186.5,186.5,0,0,0-3.452,77.1'
							transform='translate(681.82 198.508)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1680'
							data-name='Path 1680'
							d='M1608.335,394.06c-19.412,15.71-34.852,36.737-45.012,61.024'
							transform='translate(685.989 172.914)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1681'
							data-name='Path 1681'
							d='M1675.36,373.237a132.545,132.545,0,0,0-67.686,17.158'
							transform='translate(705.45 163.767)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1682'
							data-name='Path 1682'
							d='M1723.411,409.4a138.766,138.766,0,0,0-44.915-23.473'
							transform='translate(736.527 169.348)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1683'
							data-name='Path 1683'
							d='M1753.651,465.65a168.417,168.417,0,0,0-25.9-45.56'
							transform='translate(758.142 184.336)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1684'
							data-name='Path 1684'
							d='M1752.131,534.728a178.577,178.577,0,0,0,.591-56.447'
							transform='translate(768.838 209.87)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1685'
							data-name='Path 1685'
							d='M1720.242,587.9a128.087,128.087,0,0,0,34.31-44.686'
							transform='translate(754.845 238.362)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1686'
							data-name='Path 1686'
							d='M1662.957,598.846a149.657,149.657,0,0,0,16.76-1.614,142.121,142.121,0,0,0,35.36-10.069'
							transform='translate(729.708 257.648)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1687'
							data-name='Path 1687'
							d='M1605.125,577.733a127.8,127.8,0,0,0,47.338,21.932'
							transform='translate(704.331 253.51)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1688'
							data-name='Path 1688'
							d='M1568.007,523.782a164.809,164.809,0,0,0,24.817,48.988'
							transform='translate(688.044 229.836)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1689'
							data-name='Path 1689'
							d='M1566.866,456.527a170.737,170.737,0,0,0-4.292,56.443'
							transform='translate(685.357 200.325)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1690'
							data-name='Path 1690'
							d='M1609.2,402a140.67,140.67,0,0,0-34.161,42.145'
							transform='translate(691.129 176.398)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1691'
							data-name='Path 1691'
							d='M1670.451,382.206a122.362,122.362,0,0,0-50.863,10.061'
							transform='translate(710.678 167.704)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1692'
							data-name='Path 1692'
							d='M1580.038,437.354l6.383,3.787a2.3,2.3,0,0,0,3.186-.777,97.212,97.212,0,0,1,12.167-15.666c3.915-3.958,6.185-6.316,7.467-7.675a3.015,3.015,0,0,0,.217-3.678l-4.808-7.241'
							transform='translate(693.323 178.199)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1693'
							data-name='Path 1693'
							d='M1625.618,390.75l3.2,7.175a2.473,2.473,0,0,0,2.948,1.557,77.391,77.391,0,0,1,17.689-3.678c5.143-.361,8.158-.62,9.873-.784a2.439,2.439,0,0,0,2.037-2.643l-.191-8.732'
							transform='translate(713.323 168.344)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1694'
							data-name='Path 1694'
							d='M1682.2,387.606l-1.024,7.735a3,3,0,0,0,1.669,3.18,89.158,89.158,0,0,1,16.752,8.895c4.505,3.141,7.168,4.944,8.695,5.957a2.14,2.14,0,0,0,3.078-.709l4.358-6.948'
							transform='translate(737.688 170.082)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1695'
							data-name='Path 1695'
							d='M1607.352,576s21.431,16.538,44.659,20.215'
							transform='translate(705.308 252.751)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1696'
							data-name='Path 1696'
							d='M1713.15,584.351s-14.873,9.886-49.967,11.438'
							transform='translate(729.807 256.414)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1697'
							data-name='Path 1697'
							d='M1751.535,541.687s-12.139,26.812-33.108,42.494'
							transform='translate(754.048 237.693)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1698'
							data-name='Path 1698'
							d='M1747.555,543.1c-.475.495-10.393,22.739-27.427,35.281,0,0-3.885-3.426-3.262-4.155s7.675-5.191,14.487-13.423,12.2-20.689,12.2-20.689Z'
							transform='translate(753.334 237.001)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1699'
							data-name='Path 1699'
							d='M1707.962,584.915c-.657.059-20.663,10.449-41.443,8.519,0,0-1.413-5.283-.509-5.421s9.119,1.223,19.132-.483,21.081-7.636,21.081-7.636Z'
							transform='translate(730.915 254.458)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1700'
							data-name='Path 1700'
							d='M1649.47,592.485c-.577-.4-21.453-4.594-38.4-17.076,0,0,1.612-5.039,2.436-4.534s6.7,4.491,15.882,9.336c9.428,4.977,21.278,7.214,21.278,7.214Z'
							transform='translate(706.942 250.486)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1701'
							data-name='Path 1701'
							d='M1631.325,549.076s5.285,3.856,9.152,6.151a28.9,28.9,0,0,0,7.3,3.1l2.185-2.109,4.635-30.238-4.731-2.83Z'
							transform='translate(715.828 229.56)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1702'
							data-name='Path 1702'
							d='M1605.73,531.156c1.432.447,10.229,1.99,12.279,1.455s4.39-2.891,5.387-3.931,13.825-15.433,13.825-15.433l-4.1-7.367L1599.7,517.867Z'
							transform='translate(701.95 221.981)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1703'
							data-name='Path 1703'
							d='M1594.145,493.687l35.451-5.414.761-6.111-34.458-12.5A113.4,113.4,0,0,0,1594.145,493.687Z'
							transform='translate(699.48 206.088)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1704'
							data-name='Path 1704'
							d='M1636.69,467.016l5.157-6.561L1629.008,441.1s-2.059,4.089-5.666,2.2-10.191-7.768-10.725-7.464-4.095,3.511-9.49,11Z'
							transform='translate(703.454 191.24)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1705'
							data-name='Path 1705'
							d='M1650.047,449.9l6.411-1.2-.21-30.163s-9.774.826-16.507,3.63Z'
							transform='translate(719.521 183.656)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1706'
							data-name='Path 1706'
							d='M1672.676,454.181l5.075,2.555,16.68-25.416s-8.119-6.975-15.849-9.125Z'
							transform='translate(733.973 185.26)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1707'
							data-name='Path 1707'
							d='M1714.364,447.217a67.245,67.245,0,0,1,10.024,17.563l-36.382,12.883-1.283-3.134Z'
							transform='translate(740.137 196.24)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1708'
							data-name='Path 1708'
							d='M1727.748,485.608s1.636,13.738-1.76,21.584l-32.618-14.335.268-3.15Z'
							transform='translate(743.054 213.086)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1709'
							data-name='Path 1709'
							d='M1704.328,544.342a68.679,68.679,0,0,0,12.393-15.88l-26.986-16.749-3.042,4.017Z'
							transform='translate(740.123 224.54)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1710'
							data-name='Path 1710'
							d='M1666.826,526.173l4.893-.97L1685.24,556s-4.958,2.977-18.523,4.383Z'
							transform='translate(731.358 230.46)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1711'
							data-name='Path 1711'
							d='M1724.619,675.765c-51.61,0-184.2-12.1-226.779-145.307l-5.475-.607'
							transform='translate(654.852 232.499)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
						<path
							id='Path_1712'
							data-name='Path 1712'
							d='M1805.317,522.311l-6.721-5.565h-15.814'
							transform='translate(782.287 226.749)'
							fill='none'
							strokeMiterlimit='10'
							strokeWidth='0.5'
						/>
					</g>
				</g>
			</svg>
		</div>
	);
});
export default CarOutline;
