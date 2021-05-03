import React from "react";

const CombatIcon = ({ classNameIcon, color }) => {
	return (
		<svg
			height={512}
			viewBox="0 0 60 57"
			width={512}
			xmlns="http://www.w3.org/2000/svg"
			className={classNameIcon}>
			<g id="Page-1" fill="none" fillRule="evenodd">
				<g
					id="019---Gloves-Touching"
					fill="rgb(0,0,0)"
					fillRule="nonzero"
					transform="translate(0 -1)">
					<path
						fill={color}
						id="Shape"
						d="m7.124 48.14c.54900684.5529645 1.29678837.8627391 2.076.86.7765538.0006872 1.5212832-.3085069 2.069-.859l3.931-3.931c4.383-1.381 8.357-5.127 10.8-7.468.7828213-.3336263 1.5018185-.8005515 2.125-1.38.7621224-.6964355 1.4100305-1.5083453 1.92-2.406.5106852.8974467 1.1588854 1.7092997 1.921 2.406.6232815.5798022 1.3426716 1.0467628 2.126 1.38 2.446 2.341 6.42 6.087 10.8 7.468l3.931 3.931c1.146448 1.143943 3.002552 1.143943 4.149 0l6.166-6.165c1.1416315-1.1470129 1.1416315-3.0009871 0-4.148l-3.763-3.762c.2-2.082.6-9.949-4.3-14.853-1.476-1.476-2.854-2.068-4.11-1.766-.9405345.2728319-1.7180635.9374115-2.134 1.824-2.0035947-1.5873511-4.7154187-1.9504116-7.066-.946-1.8467734.7724746-3.5147313 1.916898-4.9 3.362-1.1538645 1.1110952-2.1075019 2.4128323-2.819 3.848-.7103446-1.4358686-1.6641194-2.7377933-2.819-3.848-1.3848218-1.4456283-3.0528964-2.5901317-4.9-3.362-2.3506497-1.0053159-5.0630766-.6426099-7.067.945-.4161548-.8858279-1.1931614-1.549908-2.133-1.823-1.249-.3-2.633.29-4.11 1.766-4.9 4.9-4.5 12.771-4.3 14.853l-3.757 3.762c-1.1427285 1.1465598-1.1427285 3.0014402 0 4.148zm40.318-28.749c.509-.124 1.316.327 2.224 1.236 4.344 4.344 3.868 11.77 3.711 13.351l-4.034 4.035c-.2599566.2510745-.3642126.6228779-.2726972.9725073.0915155.3496295.3645604.6226744.7141899.7141899.3496294.0915154.7214328-.0127406.9725073-.2726972l3.578-3.579 1.32 1.32-3.409 3.409c-.2599566.2510745-.3642126.6228779-.2726972.9725073.0915155.3496295.3645604.6226744.7141899.7141899.3496294.0915154.7214328-.0127406.9725073-.2726972l3.409-3.409.66.66c.3641664.3646493.3641664.9553507 0 1.32l-6.165 6.165c-.3646493.3641664-.9553507.3641664-1.32 0l-3.393-3.394 1.172-1.173c.3789722-.3923789.3735524-1.0160848-.0121814-1.4018186s-1.0094397-.3911536-1.4018186-.0121814l-1.445 1.446c-2.7510883-1.1248716-5.2684095-2.7526693-7.423-4.8 2.3891603-.1118187 4.6932907-.9207673 6.628-2.327 3.368-2.438 6.2-7.205 3.1-12.615-.3337733-.5829311-.7115363-1.1395465-1.13-1.665.316-.785.705-1.298 1.103-1.394zm-15.748 7.337c.6333054-1.3736948 1.5220973-2.6144063 2.619-3.656 1.1838989-1.2300026 2.6030211-2.2094112 4.173-2.88.6918369-.2789588 1.4291347-.4281133 2.175-.44 1.98 0 3.652 1.224 5.069 3.7 2.441 4.254.291 7.955-2.533 10-2.909 2.106-7.226 2.911-9.86.453-2.244-2.105-2.797-4.513-1.643-7.177zm-12.253-6.976c.745885.0117043 1.4832158.1608654 2.175.44 1.5997635.6863792 3.0435742 1.6903107 4.244 2.951 1.0708952 1.0209587 1.9358761 2.2379745 2.548 3.585 1.155 2.664.6 5.076-1.642 7.172-2.631 2.456-6.945 1.657-9.86-.453-2.824-2.045-4.973-5.746-2.534-10 1.418-2.472 3.09-3.695 5.069-3.695zm-9 .875c.909-.909 1.717-1.365 2.223-1.236.4.1.787.607 1.107 1.4-.4191191.5249709-.7969173 1.0816381-1.13 1.665-3.1 5.41-.272 10.177 3.1 12.615 1.9347705 1.4068354 4.2394046 2.2158389 6.629 2.327-2.1547863 2.0475639-4.6724805 3.6753835-7.424 4.8l-1.445-1.446c-.251515-.2538372-.6193449-.3542108-.9649319-.263311-.3455869.0908997-.616428.359263-.7105.704-.094072.3447369.0029169.7134738.2544319.967311l1.172 1.173-3.394 3.394c-.17427951.174915-.41108183.2731628-.658.273-.24694019.0002735-.48378334-.0979912-.658-.273l-6.168-6.165c-.36143613-.365775-.36143613-.954225 0-1.32l.66-.66 3.408 3.409c.25107447.2599566.62287789.3642126.97250732.2726972.34962944-.0915155.6226744-.3645604.71418984-.7141899.09151544-.3496294-.01274058-.7214328-.27269716-.9725073l-3.408-3.409 1.32-1.32 3.578 3.579c.25107447.2599566.62287789.3642126.9725073.2726972.3496295-.0915155.6226744-.3645604.7141899-.7141899.0915154-.3496294-.0127406-.7214328-.2726972-.9725073l-4.035-4.035c-.159-1.578-.644-8.994 3.713-13.351z"
					/>
					<path
						fill={color}
						id="Shape"
						d="m16.477 25.807c.4788426.2749468 1.0899062.1097582 1.365-.369.712-1.241 1.3-1.684 1.6-1.684.2533349.0127731.5023032.071035.735.172.5152817.1996509 1.0948491-.0562183 1.2945-.5715s-.0562183-1.0948491-.5715-1.2945c-.4615657-.1899304-.9540373-.2936443-1.453-.306-1.209 0-2.3.88-3.339 2.688-.2749468.4788426-.1097582 1.0899062.369 1.365z"
					/>
					<path
						fill={color}
						id="Shape"
						d="m47.6 15.161c-.4085804-.0000951-.7760081-.2487423-.928-.628-.720872-1.8082926-.9368997-3.7784648-.625-5.7-2.2 1.469-5.5 3.033-8.89 2.3-2.932-.633-5.334-2.848-7.157-6.591-1.823 3.743-4.225 5.956-7.158 6.592-3.388.734-6.689-.83-8.89-2.3.3118997 1.9215352.095872 3.8917074-.625 5.7-.1252372.3425886-.4270758.5898104-.7876225.6451043-.3605467.0552938-.7225993-.0901127-.9447457-.3794262-.2221465-.2893135-.2691423-.6766332-.1226318-1.0106781.9380367-2.389087.8032516-5.06621002-.37-7.349-.2083176-.43716272-.0734622-.96076979.3201135-1.24291441.3935758-.28214463.9327582-.24173841 1.2798865.09591441.05.05 4.992 4.913 9.719 3.886 2.757-.6 4.99-3.134 6.638-7.529.1458609-.39124017.5194545-.65067064.937-.65067064s.7911391.25943047.937.65067064c1.648 4.395 3.881 6.928 6.638 7.529 4.729 1.021 9.673-3.838 9.723-3.887.3471283-.33765282.8863107-.37805904 1.2798865-.09591441.3935757.28214462.5284311.80575169.3201135 1.24291441-1.1727388 2.28292775-1.3075127 4.9598274-.37 7.349.12383.3080248.0867213.6574232-.0990455.9325665s-.495971.4401576-.8279545.4404335z"
					/>
					<path
						fill={color}
						id="Shape"
						d="m30 57.32c-.4171213.0002605-.7905905-.2584177-.937-.649-1.648-4.4-3.881-6.928-6.638-7.529-4.728-1.023-9.669 3.836-9.719 3.886-.3926454.3787042-1.0163551.3728476-1.40182-.0131628-.3854648-.3860105-.3904391-1.0097279-.01118-1.4018372.232-.233 5.763-5.68 11.549-4.427 2.933.636 5.335 2.849 7.158 6.591 1.823-3.742 4.225-5.955 7.158-6.591 5.787-1.251 11.317 4.2 11.549 4.427.3792591.3921093.3742848 1.0158267-.01118 1.4018372-.3854649.3860104-1.0091746.391867-1.40182.0131628-.05-.049-4.993-4.913-9.719-3.886-2.757.6-4.99 3.133-6.638 7.529-.1464095.3905823-.5198787.6492605-.937.649z"
					/>
				</g>
			</g>
		</svg>
	);
};

export default CombatIcon;