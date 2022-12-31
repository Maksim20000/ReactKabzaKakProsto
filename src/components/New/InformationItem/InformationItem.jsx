import React, { Component } from 'react';
import css from './InformationItem.module.css'
export function InformationItem(props) {
    return (
        <div className={css.flex}>
            <p className={css.item}>id: { props.id }</p>
            <p className={css.item}>name: { props.name }</p>
            <p className={css.item}>message: { props.message }</p>
        </div>
    );
}