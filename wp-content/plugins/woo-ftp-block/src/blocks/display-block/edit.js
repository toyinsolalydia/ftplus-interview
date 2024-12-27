import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, RangeControl, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { numberOfProducts, displayPrice } = attributes;
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const blockProps = useBlockProps();

    useEffect(() => {
        fetchProducts();
    }, [numberOfProducts]);

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            // Using the custom REST API endpoint
            const response = await apiFetch({
                path: '/woo-ftp-block/v1/products'
            });
            setProducts(response);
            setIsLoading(false);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

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

            <div className="woo-ftp-products">
                {isLoading ? (
                    <p className="loading"><Spinner /> {__('Loading products...', 'woo-ftp-block')}</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : (
                    <ul className="products-list">
                        {products.slice(0, numberOfProducts).map((product) => (
                            <li key={product.id} className="product-item">
                                <h4>{product.name}</h4>
                                {displayPrice && (
                                    <div className="price" 
                                         dangerouslySetInnerHTML={{__html: product.price}} 
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}