// Modal.js

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div
			onClick={onClose}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					background: "#7393B3",
                    
					height: 300,
					width: 300,
					margin: "auto",
					padding: "2%",
					border: "2px solid #E5E4E2",
					borderRadius: "10px",
					boxShadow: "2px solid #6082B6",
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
