import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, RangeControl, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import ServerSideRender from '@wordpress/server-side-render';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { numberOfProducts, displayPrice } = attributes;
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__('Block Settings', 'woo-ftp-block')}>
                    <RangeControl
                        label={__('Number of Products', 'woo-ftp-block')}
                        value={numberOfProducts}
                        onChange={(value) => setAttributes({ numberOfProducts: value })}
                        min={1}
                        max={20}
                    />
                    <ToggleControl
                        label={__('Display Price', 'woo-ftp-block')}
                        checked={displayPrice}
                        onChange={() => setAttributes({ displayPrice: !displayPrice })}
                    />
                </PanelBody>
            </InspectorControls>

            <ServerSideRender
                block="woo-ftp-block/display-block"
                attributes={attributes}
                EmptyResponsePlaceholder={() => <p>{__('No products found.', 'woo-ftp-block')}</p>}
                LoadingResponsePlaceholder={() => (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                        <Spinner />
                    </div>
                )}
            />
        </div>
    );
}