import Spline from '@splinetool/react-spline/next';

export default function SplineComponent() {
    return (
        <main className="w-full h-full" style={{ width: '500px', height: '600px' }}>
            <Spline scene="https://prod.spline.design/kGgDTVJD7cipSM21/scene.splinecode" />
        </main>
    );
}