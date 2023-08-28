import { Fragment } from "react";
import Badge from "../Badge";
import Divider from "../Divider";
import Entry from "../Entry";
import Tab from "../Tab";
import Tabs from "../Tabs";
import "./EntriesSection.css";

export default function EntriesSection({
  entries,
  onToggleFavorite,
  isFavorite,
  id,
}) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              onToggleFavorite={onToggleFavorite}
              id={id}
              isFavorite={isFavorite}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
