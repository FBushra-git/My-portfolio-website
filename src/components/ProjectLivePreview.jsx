export default function ProjectLivePreview({ projectName, liveLink }) {
  return (
    <div className="desktopPreviewFrame">
      <iframe src={liveLink} title={`${projectName} live website preview`} loading="lazy" />
    </div>
  );
}
